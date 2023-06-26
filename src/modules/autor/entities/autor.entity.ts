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
    createAt : Date;

    @UpdateDateColumn({
        name: 'Updated_at',
        type: 'timestamp',
        default: ()=> 'CURRENT_TIMESTAMP'
    })
    updateAt : Date;
    
    @DeleteDateColumn({
        name: 'Deleted_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAt : Date;

   
    @Column('varchar',{
        name: 'nombre',
        nullable: false,
        comment: 'nombre del autor'
    })
    nombre: string;

    @Column('varchar',{
        name: 'apellido',
        nullable: false,
        comment: 'apellido del autor'
    })
    apellido: string;
    
    @Column('varchar',{
        name: 'email',
        nullable: false,
        comment: 'email del autor'
    })
    email: string;

    @Column('varchar',{
        name: 'identificacion',
        nullable: false,
        comment: 'identificacion del autor'
    })
    identificacion: string;

    @Column('varchar',{
        name: 'description',
        nullable: false,
        comment: 'descripción del autor'
    })
    description: string;

    @OneToMany(()=>Autor, autor=> autor.manga)
        manga: Manga

}
