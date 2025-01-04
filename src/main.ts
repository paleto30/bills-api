import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config/index';
import { Logger, ValidationPipe } from '@nestjs/common';




async function bootstrap() {

    const logger = new Logger('APP')

    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('api/v1');

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
        })
    )

    await app.listen(envs.app_port);

    logger.log(`Running on: http://localhost:${envs.app_port}/`);

}


bootstrap();
