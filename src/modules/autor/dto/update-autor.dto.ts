import { PartialType } from '@nestjs/mapped-types';
import { CreateAutorDto } from './create-autor.dto';
import { IsDate, IsEmail, IsNumber, IsOptional, IsString } from '@nestjs/class-validator';
import { Manga } from 'src/modules/manga/entities/manga.entity';

export class UpdateAutorDto extends PartialType(CreateAutorDto) {
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
    @IsOptional()
    nombre: string;

    @IsNumber()
    @IsOptional()
    code: number;

    @IsNumber()
    @IsOptional()
    age: number;
    
    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    identificacion: string;

    @IsOptional()
    @IsDate()
    birthday: Date;

    @IsOptional()
    manga: Manga
}
