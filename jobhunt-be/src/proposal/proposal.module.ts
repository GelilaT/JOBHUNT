import { Module } from '@nestjs/common';
import { ProposalController } from './proposal.controller';
import { ProposalService } from './proposal.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proposal } from './entities/proposal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Proposal])],
  controllers: [ProposalController],
  providers: [ProposalService]
})
export class ProposalModule {}
