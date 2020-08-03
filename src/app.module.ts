import { TagModule } from './tag/tag.module';
import { ProfileModule } from './profile/profile.module';
import { ArticleModule } from './article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as ormconfig from '../ormconfig';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    ArticleModule,
    UserModule,
    ProfileModule,
    TagModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

export class ApplicationModule {
  constructor(private readonly connection: Connection) { }
}
