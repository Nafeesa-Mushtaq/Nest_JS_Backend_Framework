import { Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
    constructor( 
        private readonly projectService: ProjectService
    ) {}    

    @Post('seed')
    async seed() {
        return this.projectService.seed();
    }

    @Get('developers') 
    async getDevelopers() {
        return this.projectService.getDevelopers();
    }

    @Get('projects')
    async getProjects() {
        return this.projectService.getProjects();
    }
}
