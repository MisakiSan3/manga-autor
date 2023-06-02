import { Manga } from "src/modules/manga/entities/manga.entity";
import { PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,DeleteDateColumn,Column,OneToMany } from "typeorm";

export class Autor {
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

    @Column('varchar',{
        name: 'nombre',
        nullable: false,
        comment: 'nombre de la categoria'
    })


    @Column('varchar',{
        name: 'nombre',
        nullable: false,
        comment: 'nombre de la categoria'
    })
    name: string;

    @Column('varchar',{
        name: 'description',
        nullable: false,
        comment: 'descripción de la categoria'
    })
    description: string;

    @OneToMany(()=>Autor, autor=> autor.manga)
        manga: Manga

}
