import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'database/prisma.service';
import { environment } from 'config';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { Product } from './entities/product.entity';
import { ProductInn } from 'modules/products/entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    private prisma: PrismaService,
    private httpService: HttpService,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const product = {
      ...createProductDto,
    };
    const prod = await this.prisma.products.create({
      data: {
        ...product,
      },
    });
    return prod;
  }

  async findAll() {
    return this.prisma.products.findMany();
  }

  async findById(id: string) {
    return await this.prisma.products.findUnique({ where: { id } });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const res = await this.prisma.products.update({
      where: { id },
      data: {
        name: updateProductDto.name,
        price: updateProductDto.price,
        code: updateProductDto.code,
      },
    });
    return res;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  async getAllResorces() {
    const { data } = await firstValueFrom(
      this.httpService
        .get(environment.BASE_URL_INN + 'recursos/0', environment.CONFIG_INN)
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );
    const lean = data.recursos
      .filter((e: { preco: any }) => e.preco)
      .map((e: ProductInn) => {
        return {
          key: e.chave,
          price: e.preco,
          name: e.nome,
          image: e.imgUrl,
          stock: e.estoque,
          code: e.codigo,
          class: e.classe || '',
          brand: e.marca || '',
          ean: e.ean || '',
          ncm: e.ncm || '',
        };
      });
    console.log(lean);
    lean.forEach(async (e: Product) => {
      await this.prisma.products.upsert({
        where: {
          code: e.code,
        },
        update: { ...e },
        create: { ...e },
      });
    });
    return lean;
  }

  async findAllResources() {
    return await this.prisma.products.findMany();
  }
}
