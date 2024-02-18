import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ProductsService } from 'modules/products/products.service';

@Injectable()
export class TaskService {
  constructor(private resourceService: ProductsService) {}

  @Cron(CronExpression.EVERY_30_SECONDS)
  async handleCron() {
    await this.resourceService.getAllResorces();
  }
}
