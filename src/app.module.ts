import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from "@nestjs/graphql";
import { join } from 'path';
import { LaunchModule } from './launch/launch.module';

@Module({
  imports: [GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql'],
    definitions: { path: join(process.cwd(), 'src/graphql.ts') },
  }), LaunchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
