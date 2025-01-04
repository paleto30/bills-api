import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { DBErrorHandler } from 'src/common/handler-db-exceptions/common.exceptions';
import { PaginationDto } from './dto/pagination.dto';





@Injectable()
export class RoleService {

	private readonly logger = new Logger(RoleService.name);

	constructor(
		@InjectRepository(Role)
		private readonly roleRepository: Repository<Role>,
		private readonly dbErrorHandler: DBErrorHandler,
	) { }


	async create(createRoleDto: CreateRoleDto) {
		try {
			const role = this.roleRepository.create(createRoleDto);
			await this.roleRepository.save(role);
			return role;
		} catch (error) {
			this.logger.error(error);
			this.dbErrorHandler.handleDBExceptions(error);
		}
	}


	async findAll(paginationDto: PaginationDto) {

		const { page = 1, limit = 10 } = paginationDto;

		try {
			const totalRoles = await this.roleRepository.count();
			const roleList = await this.roleRepository
				.find({
					take: limit,
					skip: (page - 1) * limit
				});

			return {
				meta: {
					page,
					total_page: Math.ceil(totalRoles / limit),
					limit,
					total_records: totalRoles
				},
				data: roleList
			};
		} catch (error) {
			this.logger.error(error);
			this.dbErrorHandler.handleDBExceptions(error);
		}
	}

	async findOne(id: string) {
		try {
			const role = await this.roleRepository.findOne({
				where: { id },
			});

			if (!role) {
				throw new NotFoundException(`the role with id: '${id}' was not found`)
			}

			return role;
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw error
			}
			this.logger.error(error);
			this.dbErrorHandler.handleDBExceptions(error);
		}
	}

	update(id: number, updateRoleDto: UpdateRoleDto) {
		return `This action updates a #${id} role`;
	}

	async remove(id: string) {
		try {
			const role = await this.roleRepository.findOneBy({ id });
			if (!role) {
				throw new NotFoundException(`The role with id: ${id} doesn´t exist.`)
			}	
			await this.roleRepository.remove(role);
			return role;
		} catch (error) {
			if (error instanceof NotFoundException) {
				throw error
			}
			this.logger.error(error);
			this.dbErrorHandler.handleDBExceptions(error);
		}
	}
}
