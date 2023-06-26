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
    createAt : Date;

    @UpdateDateColumn({
        name: 'Updated_at',
        type: 'timestamp',
        default: ()=> 'CURRENT_TIMESTAMP'
    })
<<<<<<< HEAD
    updateAt : Date;
=======
    updateAt = Date;    
>>>>>>> d0fec66bd550c7e29d5030bd619630d6a93609d4
    
    @DeleteDateColumn({
        name: 'Deleted_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAt : Date;

<<<<<<< HEAD
   
    @Column('varchar',{
        name: 'nombre',
        nullable: false,
        comment: 'nombre del autor'
=======
    @Column('integer',{
        name: 'code',
        nullable: false,
        comment: 'Id del autor',    
    })

    @Column('varchar',{
        name: 'nombre',
        nullable: false,
        comment: 'Nombre del autor'
>>>>>>> d0fec66bd550c7e29d5030bd619630d6a93609d4
    })
    nombre: string;

<<<<<<< HEAD
    @Column('varchar',{
        name: 'apellido',
        nullable: false,
        comment: 'apellido del autor'
=======
    @Column('integer',{
        name: 'Age',
        nullable: false,
        comment: 'Edad del Autor'
>>>>>>> d0fec66bd550c7e29d5030bd619630d6a93609d4
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

    @Column('date',{
        name: 'Birthday',
        nullable: false,
<<<<<<< HEAD
        comment: 'descripción del autor'
=======
        comment: 'Cumpleanios autor'
>>>>>>> d0fec66bd550c7e29d5030bd619630d6a93609d4
    })
    description: string;

    @OneToMany(()=>Autor, autor=> autor.manga)
        manga: Manga

}
