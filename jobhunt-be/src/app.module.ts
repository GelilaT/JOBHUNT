import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule  } from './user/user.module';
import { JobModule } from './job/job.module';
import { AuthModule } from './auth/auth.module';
import { ProposalModule } from './proposal/proposal.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'Jobhunt',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    JobModule,
    ProposalModule,
    AuthModule,
    ProposalModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
