import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from './dto/createJob.dto';
import { UpdateJobDto } from './dto/updateJob.dto';

@Controller('job')
export class JobController {

    constructor(private readonly jobService: JobService) { }
    
    @Get()
    findAll() {
        return this.jobService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.jobService.findOne(+id)
    }

    @Post()
    create(@Body() createJobDto: CreateJobDto) {
        return this.jobService.create(createJobDto)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto) {
        return this.jobService.update(+id, updateJobDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.jobService.delete(+id)
    }

}
