import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class SubstitutionPatientDto {
    @IsNotEmpty({
        message: "Nome è obbligatorio"
    })
    @IsString({
        message: "Nome deve essere una stringa"
    })
    nome!: string;
    
    @IsNotEmpty({
        message: "Cognome è obbligatorio"
    })
    @IsString({
        message: "Cognome deve essere una stringa"
    })
    cognome!: string;
}

export class UpdatePatientDto {
    @IsString({
        message: "Nome deve essere una stringa"
    })
    @IsOptional()
    nome?: string;
    @IsString({
        message: "Cognome deve essere una stringa"
    })
    @IsOptional()
    cognome?: string;
}