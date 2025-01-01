import { Proposal } from 'src/proposal/proposal.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  budget: number;

  @Column()
  category: string;

  @Column({ type: 'enum', enum: ['open', 'in-progress', 'completed', 'cancelled'], default: 'open' })
  status: 'open' | 'in-progress' | 'completed' | 'cancelled';

  @ManyToOne(() => User, (user) => user.jobsPosted)
  client: User;

  @OneToMany(() => Proposal, (proposal) => proposal.job)
  proposals: Proposal[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
