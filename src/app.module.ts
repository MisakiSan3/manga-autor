import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutorModule } from './modules/autor/autor.module';
import { MangaModule } from './modules/manga/manga.module';

@Module({
  imports: [AutorModule, MangaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
