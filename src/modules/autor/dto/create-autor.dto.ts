import { IsDate, IsEmail, IsNotEmpty, IsNotEmptyObject, IsOptional, IsString, IsUUID } from "@nestjs/class-validator";
import { Manga } from "src/modules/manga/entities/manga.entity";

export class CreateAutorDto {

    @IsDate()
    @IsOptional()
    createAt : Date;

    @IsDate()
    @IsOptional()
    updateAt : Date;
    
    @IsDate()
    @IsOptional()
    deleteAt : Date;

    @IsString()
    @IsNotEmpty()
    nombre: string

    @IsString()
    @IsNotEmpty()
    apellido: string;
    
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    identificacion: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNotEmptyObject()
    manga: Manga
}
