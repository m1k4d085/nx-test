import { ApiProperty } from "@nestjs/swagger";


export class ApiError {
    @ApiProperty({
        type: "integer",
    })
    statusCode!: number;

    @ApiProperty({
        type: "string",
    })
    error!: string;

    @ApiProperty({
        type: "array",
        items: {
            type: "string",
        }
    })
    message!: Array<string>[];
}