import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from 'src/models/user.entity';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Users)
    private userModel: typeof Users,
  ) {}

  getAllUser() {
    return this.userModel.findAll();
  }

  getUserById(id: number) {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  registerUser(createUserDto: CreateUserDto) {
    return this.userModel.findOrCreate({
      where: {
        username: createUserDto.username,
      },
      defaults: {
        ...createUserDto,
      },
    });
  }
}
