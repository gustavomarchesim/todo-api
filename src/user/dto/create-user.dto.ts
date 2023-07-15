import { IsEmail, MinLength, MaxLength, Matches } from "class-validator";
import { CreateUserMessagesHelper } from "../helpers/create-user.helper";

export class CreateUserDto{

    @MinLength(2,{message: CreateUserMessagesHelper.CREATE_NAME_NOT_VALID})
    name: string;

    @IsEmail({}, {message: CreateUserMessagesHelper.CREATE_EMAIL_NOT_VALID})
    email: string;

    @MinLength(3, {message: CreateUserMessagesHelper.CREATE_PASSWORD_NOT_VALID})
    @MaxLength(12, {message: CreateUserMessagesHelper.CREATE_PASSWORD_NOT_VALID})
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: CreateUserMessagesHelper.CREATE_PASSWORD_NOT_VALID})
    password: string;
};