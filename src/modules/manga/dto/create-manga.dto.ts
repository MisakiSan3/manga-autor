import { IsDate, IsNotEmpty, IsNotEmptyObject, IsNumber, IsOptional, IsString } from "@nestjs/class-validator";
import { Autor } from "src/modules/autor/entities/autor.entity";

export class CreateMangaDto {

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
    @IsNotEmpty()
    code: number;

    @IsString()
    @IsNotEmpty()
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

    @IsNotEmptyObject()
    autor:Autor
}