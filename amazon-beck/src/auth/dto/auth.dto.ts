import { IsEmail, MinLength, IsString } from 'class-validator';

export class AuthDto {
  @IsEmail()
  email: string;
  @MinLength(6, { message: 'больше 6 символов' })
  @IsString()
  password: string;
}
