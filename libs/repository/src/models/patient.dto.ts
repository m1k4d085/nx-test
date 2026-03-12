import { ApiProperty } from "@nestjs/swagger";

export class PatientDto {
    @ApiProperty({
        type: "integer",
    })
    id!: string;
    @ApiProperty({
        type: "string",
    })
    nome!: string;

    @ApiProperty({
        type: "string",
    })
    cognome!: string;
}