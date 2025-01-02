import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProposalDto {
  @IsString()
  description: string;

  @IsNumber()
  amount: number;

  @IsNumber()
  jobId: number; 

  @IsOptional()
  @IsNumber()
  userId?: number;
}
