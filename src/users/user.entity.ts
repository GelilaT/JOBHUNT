import { Job } from 'src/jobs/jobs.entity';
import { Proposal } from 'src/proposal/proposal.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ default: null })
  avatarUrl: string;

  @Column({ type: 'enum', enum: ['freelancer', 'client', 'admin'], default: 'client' })
  role: 'freelancer' | 'client' | 'admin';

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Job, (job) => job.client)
  jobsPosted: Job[];

  @OneToMany(() => Proposal, (proposal) => proposal.freelancer)
  proposals: Proposal[];
}
