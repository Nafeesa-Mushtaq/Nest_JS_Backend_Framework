import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { MongooseModule } from '@nestjs/mongoose';
import {Project, ProjectSchema } from './schemas/project.schema';
import {Developers, DeveloperSchema } from './schemas/developer.schema';

@Module({
  imports: [
  MongooseModule.forFeature([
    {name: Project.name, schema: ProjectSchema},
    {name: Developers.name, schema: DeveloperSchema}
  ]),
  
],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
