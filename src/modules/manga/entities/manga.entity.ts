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
        name: 'Título',
        nullable: false,
        comment: 'Título del Manga',
    })
    title: string;

    @Column('varchar',{
        name: 'Edición',
        nullable: false,
        comment: 'Edición del Manga',
    })
    edicion: string;

    @Column('varchar',{
        name: 'Editorial',
        nullable: true,
        comment: 'Editorial del Manga',
    })
    editorial: string;

    @Column('integer',{
        name: 'price',
        nullable: false,
        comment: 'Precio del manga',    
    })
    price: number;

    @Column('varchar',{
        name: 'Description',
        nullable: false,
        comment: 'Descripcion del manga',
    })
    Description: string;

    @Column('varchar',{
        name: 'images',
        nullable: false,
        comment: 'Imagen del manga',
    })
    images:string;

    
    @ManyToOne(()=> Manga, manga => manga.autor)
        autor: Manga[];
}
