import {
    BadRequestException,
    Injectable,
    InternalServerErrorException
} from "@nestjs/common";



@Injectable()
export class DBErrorHandler {

    constructor() { }

    public handleDBExceptions(error: any | object) {

        if (error.code === '23505') {
            throw new BadRequestException(error.detail);
        }


        

        throw new InternalServerErrorException('Unexpected error, check server logs.')
    }

}