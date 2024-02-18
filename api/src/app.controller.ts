import { Controller, Get } from '@nestjs/common';
import { AppDto } from './app.dto';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): AppDto {
    return this.appService.getHello();
  }
}
