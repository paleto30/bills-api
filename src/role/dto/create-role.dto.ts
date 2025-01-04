import {
    IsNotEmpty, IsOptional, IsString,
    IsUUID
} from "class-validator";


export class CreateRoleDto {

    @IsUUID()
    @IsOptional()
    id?: string;

    @IsNotEmpty()
    @IsString()
    key: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    
    @IsString()
    @IsOptional()
    description?: string;


}
