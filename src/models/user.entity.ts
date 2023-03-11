import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  CreatedAt,
  UpdatedAt,
  Default,
  BeforeSave,
} from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';

@Table({
  tableName: 'Users',
})
export class Users extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column({
    unique: true,
  })
  username: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  phoneNumber: string;

  @Column({
    unique: true,
  })
  email: string;

  @CreatedAt
  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
  })
  updatedAt: Date;

  @Default('USER')
  @Column({
    type: DataType.ENUM('ADMIN', 'USER'),
  })
  role: 'ADMIN' | 'USER';

  @Column
  password: string;

  @BeforeSave
  static async hashPassword(user: Users) {
    if (user.changed('password')) {
      user.password = await bcrypt.hash(user.password, await bcrypt.genSalt());
    }
  }
}
