import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [RoleController],
  providers: [
    RoleService,
  ],
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([Role])
  ],
  exports: []
})
export class RoleModule { }
