import { PartialType } from '@nestjs/mapped-types';
import { CreateMangaDto } from './create-manga.dto';
import { Autor } from 'src/modules/autor/entities/autor.entity';

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
    autor:Autor
}
