import { PartialType } from '@nestjs/mapped-types';
import { CreateAutorDto } from './create-autor.dto';
import { IsDate, IsEmail, IsOptional, IsString } from '@nestjs/class-validator';
import { Manga } from 'src/modules/manga/entities/manga.entity';

export class UpdateAutorDto extends PartialType(CreateAutorDto) {
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
    @IsOptional()
    nombre: string

    @IsString()
    @IsOptional()
    apellido: string;
    
    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    identificacion: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsOptional()
    manga: Manga
}
