import { IsDate, IsEmail,IsNumber, IsNotEmpty, IsNotEmptyObject, IsOptional, IsString, IsUUID } from "@nestjs/class-validator";
import { Manga } from "src/modules/manga/entities/manga.entity";


export class CreateAutorDto {

    @IsOptional()
    @IsDate()
    createAt: Date;

    @IsOptional()
    @IsDate()
    updateAt: Date;    
    
    @IsOptional()
    @IsDate()
    deleteAt: Date;

    
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsNumber()
    @IsNotEmpty()
    code: number;

    @IsNumber()
    @IsNotEmpty()
    age: number;
    
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    identificacion: string;

    @IsOptional()
    @IsDate()
    birthday: Date;

    @IsNotEmptyObject()
    manga: Manga
}
