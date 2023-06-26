import { Injectable } from '@nestjs/common';
import { CreateMangaDto } from './dto/create-manga.dto';
import { UpdateMangaDto } from './dto/update-manga.dto';

@Injectable()
export class MangaService {
  constructor(
    @InjectRepository(Manga) private mangaRepostory: Repository<Manga>
    ){}
    async create(createmangaDto: CreateMangaDto):Promise<Manga> {
      try {
          const manga: Manga = await this.mangaRepostory.save(createmangaDto);
          return manga;
        } catch (e) {
          throw new Error(e);
      }
    }
  
    async findAll():Promise<Manga[]> {
      try {
          const mangas: Manga[] =await this.mangaRepostory.find();
          if (mangas.length === 0) {
            throw new error({
              type:'BAD_REQUEST',
              message:'No existen registros'
            });
          }
          return mangas
        } catch (e) {
         console.log(e);
         
      }
    }
  
    async findOne(id: string):Promise<Manga> {
      try {
          const manga: Manga = await this.mangaRepostory.createQueryBuilder('maestro').where({id}).getOne()
          if (!manga) {
            throw new error({
              type:'BAD_REQUEST',
              message:'No se ha encontrado el registro'
            });
          }
          return manga;
        } catch (e) {
          console.log(e);
          
      }
    }
    async update(id: string, updateMangaDto: UpdateMangaDto):Promise<UpdateResult | undefined> {
     try {
         const manga: UpdateResult =  await this.mangaRepostory.update(id,updatemangaDto);
         if (manga.affected === 0) {
          throw new error({
            type:'BAD_REQUEST',
            message:'No se ha podido actualizar'
          });
         }
          return manga;
       } catch (e) {
        console.log(e);
        
     }
    }
  
    async remove(id: string):Promise<DeleteResult | undefined> {
      try {
          const manga: DeleteResult =  await this.mangaRepostory.delete(id);
          if (manga.affected === 0) {
            throw new error({
              type:'BAD_REQUEST',
              message:'No se ha podido borrar'
            });
          }
            return manga;
        } catch (e) {
          console.log(e);
          
      }
     }
}
