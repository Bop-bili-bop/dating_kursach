import { Module } from '@nestjs/common';
import { validate } from './config/env.validation';
import { ConfigModule } from '@nestjs/config';

import { appConfig, jwtConfig, kafkaConfig, redisConfig } from './config';
import { HealthModule } from './modules/health/health.module';
import { LoggerModule } from './common/logger/logger.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      envFilePath: '.env',
      load: [appConfig, jwtConfig, redisConfig, kafkaConfig],
      validate,
    }),
    LoggerModule,
    HealthModule,
  ],
})
export class AppModule {}
