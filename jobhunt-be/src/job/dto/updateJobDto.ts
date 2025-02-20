import { PartialType } from '@nestjs/mapped-types';
import { CreateJobDto } from '../dto/createJobDto';

export class UpdateJobDto extends PartialType(CreateJobDto) {}
