import { Module } from '@nestjs/common';
import { DBErrorHandler } from './handler-db-exceptions/common.exceptions';

@Module({
    providers: [DBErrorHandler],
    exports: [DBErrorHandler]
})
export class CommonModule {}
