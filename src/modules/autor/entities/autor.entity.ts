/* eslint-disable prettier/prettier */
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

    @Column('integer',{
        name: 'code',
        nullable: false,
        comment: 'Id del autor',    
    })

    @Column('varchar',{
        name: 'nombre',
        nullable: false,
        comment: 'Nombre del autor'
    })


    @Column('integer',{
        name: 'Age',
        nullable: false,
        comment: 'Edad del Autor'
    })
    name: string;

    @Column('date',{
        name: 'Birthday',
        nullable: false,
        comment: 'Cumpleanios autor'
    })
    description: string;

    @OneToMany(()=>Autor, autor=> autor.manga)
        manga: Manga

}
