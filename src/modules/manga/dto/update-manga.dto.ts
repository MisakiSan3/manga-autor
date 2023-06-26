import { PartialType } from '@nestjs/mapped-types';
import { CreateMangaDto } from './create-manga.dto';
import { Autor } from 'src/modules/autor/entities/autor.entity';
import { IsDate, IsNumber, IsOptional, IsString } from '@nestjs/class-validator';

export class UpdateMangaDto extends PartialType(CreateMangaDto) {
    @IsOptional()
    @IsDate()
    createAt: Date;

    @IsOptional()
    @IsDate()
    updateAt: Date;    
    
    @IsOptional()
    @IsDate()
    deleteAt: Date;

    @IsNumber()
    @IsOptional()
    code: number;

    @IsString()
    @IsOptional()
    nombre: string;

    @IsString()
    @IsOptional()
    edicion:String;

    @IsString()
    @IsOptional()
    editorial:String;

    @IsString()
    @IsOptional()
    precio:number;

    @IsString()
    @IsOptional()
    descripcion:String;

    @IsString()
    @IsOptional()
    images:string;

    @IsOptional()
    autor:Autor
}
