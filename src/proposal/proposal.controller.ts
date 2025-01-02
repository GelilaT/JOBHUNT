import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProposalService } from './proposal.service';
import { CreateProposalDto } from './dto/createProposal.dto';
import { UpdateProposalDto } from './dto/updateProposal.dto';

@Controller('proposal')
export class ProposalController {

    constructor(private readonly proposalService: ProposalService) { }
    
    @Get()
    findAll() {
        return this.proposalService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.proposalService.findOne(+id)
    }

    @Post()
    create(@Body() createProposalDto: CreateProposalDto) {
        return this.proposalService.create(createProposalDto)
    }

    @Put(':id')
    update(@Param('id') id: string, updateProposalDto: UpdateProposalDto) {
        return this.proposalService.update(+id, updateProposalDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.proposalService.delete(+id)
    }

}
