import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'database/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto,
    };
    const createdUser = await this.prisma.user.create({
      data: user,
    });
    return createdUser;
  }

  findAll() {
    return `This action returns all user`;
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }

  async findByToken(token: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        token,
      },
    });
    return user;
  }
}
