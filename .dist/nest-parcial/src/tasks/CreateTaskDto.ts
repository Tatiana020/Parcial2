import {IsString, IsEmail, IsBoolean, IsOptional} from 'class-validator';
import {Transform} from 'class-transformer';
export class CreateTaskDto {
    @IsString()
    @Transform(({value})=> (typeof value === 'string'? value.trim():value))
    title: string | undefined;
    @IsOptional()
     @IsString()
     @Transform(({value})=> (typeof value === 'string'? value.trim():value))
    desciption?: string
    @IsBoolean()
    @IsOptional()
    completed?: string;
    @IsString()
    userId?: string ;

    

}
