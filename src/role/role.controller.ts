import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PaginationDto } from './dto/pagination.dto';




@Controller('role')
export class RoleController {

	constructor(
		private readonly roleService: RoleService
	) { }


	@Post()
	async create(@Body() createRoleDto: CreateRoleDto) {
		return {
			status: 'success',
			message: 'Created successfully',
			response: await this.roleService.create(createRoleDto)
		}
	}

	@Get()
	async findAll(@Query() paginationDto: PaginationDto) {
		return {
			status: 'success',
			message: 'Roles read successfully',
			response: await this.roleService.findAll(paginationDto)
		}
	}


	@Get(':id')
	async findOne(@Param('id', ParseUUIDPipe) id: string) {
		return {
			status: 'success',
			message: 'Role read successfully',
			response: await this.roleService.findOne(id)
		}
	}




	@Patch(':id')
	update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
		return this.roleService.update(+id, updateRoleDto);
	}

	@Delete(':id')
	async remove(@Param('id', ParseUUIDPipe) id: string) {
		return {
			status: 'success',
			message: 'Successfully deleted role',
			response: await this.roleService.remove(id)
		}
	}
}
