import { Injectable } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { Autor } from './entities/autor.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(Autor) private autorRepostory: Repository<Autor>
    ){}
    async create(createautorDto: CreateAutorDto):Promise<Autor> {
      try {
          const autor: Autor = await this.autorRepostory.save(createautorDto);
          return autor;
        } catch (e) {
          throw new Error(e);
      }
    }
  
    async findAll():Promise<Autor[]> {
      try {
          const autors: Autor[] =await this.autorRepostory.find();
          if (autors.length === 0) {
            throw new error({
              type:'BAD_REQUEST',
              message:'No existen registros'
            });
          }
          return autors
        } catch (e) {
         console.log(e);
         
      }
    }
  
    async findOne(id: string):Promise<Autor> {
      try {
          const autor: Autor = await this.autorRepostory.createQueryBuilder('maestro').where({id}).getOne()
          if (!autor) {
            throw new error({
              type:'BAD_REQUEST',
              message:'No se ha encontrado el registro'
            });
          }
          return autor;
        } catch (e) {
          console.log(e);
          
      }
    }
    async update(id: string, updateeventDto: UpdateAutorDto):Promise<UpdateResult | undefined> {
     try {
         const autor: UpdateResult =  await this.autorRepostory.update(id,updateeventDto);
         if (autor.affected === 0) {
          throw new error({
            type:'BAD_REQUEST',
            message:'No se ha podido actualizar'
          });
         }
          return autor;
       } catch (e) {
        console.log(e);
        
     }
    }
  
    async remove(id: string):Promise<DeleteResult | undefined> {
      try {
          const autor: DeleteResult =  await this.autorRepostory.delete(id);
          if (autor.affected === 0) {
            throw new error({
              type:'BAD_REQUEST',
              message:'No se ha podido borrar'
            });
          }
            return autor;
        } catch (e) {
          console.log(e);
          
      }
     }
}
