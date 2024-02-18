import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { ScheduleModule } from '@nestjs/schedule';
import { featureModules } from 'modules';

@Module({
  imports: [...featureModules, ScheduleModule.forRoot()],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
