import { Injectable } from '@nestjs/common';
import { Proposal } from './entities/proposal.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProposalDto } from './dto/createProposal.dto';
import { User } from 'src/user/entities/user.entity';
import { Job } from 'src/job/entities/job.entity';
import { UpdateProposalDto } from './dto/updateProposal.dto';

@Injectable()
export class ProposalService {

    constructor(
        @InjectRepository(Proposal)
        private readonly proposalRepository: Repository<Proposal>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Job)
        private readonly jobRepository: Repository<Job>,
    ) { }
    
    findAll() {
        return this.proposalRepository.find()
    }

    findOne(id: number) {
        return this.proposalRepository.findOneBy({ id })
    }

    async create(createProposalDto: CreateProposalDto) {

        const { userId, jobId, ...proposalData } = createProposalDto
        
        const user = await this.userRepository.findOne({ where: { id: userId } })
        if (!user) throw new Error("User not found")
        
        const job = await this.jobRepository.findOne({ where: { id: jobId } })
        if (!job) throw new Error("Job not found")
        
        const proposal = this.proposalRepository.create({
            ...proposalData,
            user, 
            job
        })

        return this.proposalRepository.save(proposal)
        
    }

    async update(id: number, updateProposalDto: UpdateProposalDto) {
        const { userId, jobId, ...proposalData } = updateProposalDto
        
        const user = await this.userRepository.findOne({ where: { id: userId } })
        if (!user) throw new Error("User not found")
        
        const job = await this.jobRepository.findOne({ where: { id: jobId } })
        if (!job) throw new Error("Job not found")
        
        return this.proposalRepository.update(id, {
            ...proposalData,
            user,
            job
        })
    }

    delete(id: number) {
        return this.proposalRepository.delete(id)
    }


}
