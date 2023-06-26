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
    autor:Autor
}