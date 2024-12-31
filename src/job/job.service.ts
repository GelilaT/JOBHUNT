import { Injectable } from '@nestjs/common';
import { Job } from './entities/job.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJobDto } from './dto/createJobDto';
import { UpdateJobDto } from './dto/updateJobDto';

@Injectable()
export class JobService {

    constructor(
        @InjectRepository(Job) 
        private readonly jobRepository: Repository<Job>
    ) { }
    
    findAll() {
        return this.jobRepository.find()
    }

    findOne(id: number) {
        return this.jobRepository.findOneBy({id})
    }

    create(createJobDto: CreateJobDto) {
        const job = this.jobRepository.create(createJobDto)
        return this.jobRepository.save(job)
    }

    update(id: number, updateJobDto: UpdateJobDto) {
        return this.jobRepository.update(id, updateJobDto)
    }

    delete(id: number) {
        return this.jobRepository.delete(id)
    }
}
