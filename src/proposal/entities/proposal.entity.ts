import { Job } from 'src/job/entities/job.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class Proposal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  proposedAmount: number;

  @Column({ type: 'text' })
  coverLetter: string;

  @Column({ type: 'enum', enum: ['pending', 'accepted', 'rejected'], default: 'pending' })
  status: 'pending' | 'accepted' | 'rejected';

  @ManyToOne(() => User, (user) => user.proposals)
  user: User;

  @ManyToOne(() => Job, (job) => job.proposals)
  job: Job;

  @CreateDateColumn()
  createdAt: Date;
}
