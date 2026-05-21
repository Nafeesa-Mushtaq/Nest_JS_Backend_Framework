import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Developers } from './schemas/developer.schema';
import { Project } from './schemas/project.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel(Developers.name) private developerModel: Model<Developers>,
        @InjectModel(Project.name) private projectModel: Model<Project>
    ) {}

    async seed(): Promise<{dev1 : Developers, dev2 : Developers}>{
        const [project1, project2] = await Promise.all([
            this.projectModel.create({title: 'Supabase Project'}),
            this.projectModel.create({title: 'MongoDB Project'})
        ]);

        const [dev1, dev2] = await Promise.all([
            this.developerModel.create({name: 'Nafeesa', projects:[ project1._id, project2._id] }),
            this.developerModel.create({name: 'Maham', projects: [project2._id]})
        ]);

        await Promise.all([
            this.projectModel.findByIdAndUpdate(project1._id, {$set: {developers: dev1._id}}),
            this.projectModel.findByIdAndUpdate(project2._id, {$set: {developers: [dev1._id, dev2._id]}})
        ]); 

        return {dev1, dev2};
    }

    async getDevelopers(): Promise<Developers[]> {
        return this.developerModel.find().populate('projects').lean();
    }

    async getProjects(): Promise<Project[]> {
        return this.projectModel.find().populate('developers').lean();
    }
}
