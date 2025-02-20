import { IsString, IsEnum, IsOptional, IsDecimal } from 'class-validator';

export class CreateJobDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsDecimal()
  budget: number;

  @IsString()
  category: string;

  @IsOptional()
  @IsEnum(['open', 'in-progress', 'completed', 'cancelled'])
  status?: 'open' | 'in-progress' | 'completed' | 'cancelled';

  
}
