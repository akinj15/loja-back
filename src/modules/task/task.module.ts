import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { ProductsModule } from 'modules/products/products.module';
import { HttpModule } from '@nestjs/axios';
import { PrismaService } from 'database/prisma.service';
import { ProductsService } from 'modules/products/products.service';

@Module({
  imports: [ProductsModule, HttpModule],
  providers: [TaskService, PrismaService, ProductsService],
})
export class TaskModule {}
