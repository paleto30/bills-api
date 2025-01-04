import { Type } from "class-transformer";
import { IsInt, IsOptional, IsPositive } from "class-validator";



export class PaginationDto {

    @Type(() => Number)
    @IsInt()
    @IsPositive()
    @IsOptional()
    page?: number;

    @Type(() => Number)
    @IsInt()
    @IsPositive()
    @IsOptional()
    limit?: number;
}