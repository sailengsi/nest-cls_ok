import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ClsService } from "nestjs-cls";

@Controller()
export class AppController {
  constructor(
    private readonly clsService: ClsService,
    private readonly appService: AppService
  ) {}

  @Get()
  getHello(): string {
    console.log(this.clsService.getId())
    return this.appService.getHello();
  }
}
