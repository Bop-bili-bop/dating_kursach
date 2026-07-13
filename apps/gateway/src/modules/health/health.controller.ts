import { Controller, Get, Version } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('health')
@ApiTags('Health')
export class HealthController {
  constructor(private readonly configService: ConfigService) {}

  @Version('1')
  @ApiOperation({ summary: 'Health check endpoint' })
  @Get()
  getHealth() {
    return {
      status: 'ok',
      service: 'gateway',
      environment: this.configService.get('app.nodeEnv'),
      port: this.configService.get('app.port'),
      timestamp: new Date().toISOString(),
    };
  }
}
