import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppDto } from './app.dto';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): AppDto {
    return {
      data: 'Hello World!',
      env: this.configService.get('DATABASE_URL'),
    };
  }
}
