import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/updateUserDto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }
    
    findAll() {
        return this.userRepository.find()
    }

    findOne(id: number) {
        return this.userRepository.findOneBy({ id })
    }

    create(createUserDto:CreateUserDto) {
        const user = this.userRepository.create(createUserDto)
        return this.userRepository.save(user)
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.userRepository.update(id, updateUserDto)
    }

    delete(id: number) {
        return this.userRepository.delete(id)
    }
}
