import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePatientDto {
    @ApiProperty({
        required: true,
        type: "string",
        nullable: false,
        minLength: 1,
        maxLength: 255,
    })
    @IsNotEmpty({
        message: "label1"
    })
    @IsString({
        message: "Nome deve essere una stringa"
    })
    @MinLength(1)
    @MaxLength(255)
    nome!: string;

    @ApiProperty({
        required: true,
        type: "string",
        nullable: false,
        minLength: 1,
        maxLength: 255,
    })
    @IsNotEmpty({
        message: "label1"
    })
    @IsString({
        message: "Cognome deve essere una stringa"
    })
    @MinLength(1)
    @MaxLength(255)
    cognome!: string;
}