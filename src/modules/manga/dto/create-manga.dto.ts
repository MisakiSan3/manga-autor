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

    @IsNotEmptyObject()
    autor:Autor
}