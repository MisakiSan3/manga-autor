import { Autor } from "src/modules/autor/entities/autor.entity";
import { PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,DeleteDateColumn,Column,OneToMany, ManyToOne } from "typeorm";

export class Manga {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        name: 'Created_at',
        type: 'timestamp',
        default: ()=> 'CURRENT_TIMESTAMP'
    }
    )
    createAt = Date;

    @UpdateDateColumn({
        name: 'Updated_at',
        type: 'timestamp',
        default: ()=> 'CURRENT_TIMESTAMP'
    })
    updateAt = Date;

    @DeleteDateColumn({
        name: 'Deleted_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAt = Date;

    @Column('integer',{
        name: 'code',
        nullable: false,
        comment: 'Código del Producto',    
    })
    code: string;

    @Column('varchar',{
        name: 'Nombre',
        nullable: false,
        comment: 'Nombre del Producto',
    })
    title: string;

    @Column('integer',{
        name: 'price',
        nullable: false,
        comment: 'Precio del Producto',    
    })
    price: number;

    @Column('varchar',{
        name: 'Description',
        nullable: false,
        comment: 'Descripcion del Producto',
    })
    Description: string;

    @Column('varchar',{
        name: 'images',
        nullable: false,
        comment: 'Imagen del Producto',
    })
    images:string;

    
    @ManyToOne(()=> Manga, manga => manga.autor)
        autor: Manga[];
}
