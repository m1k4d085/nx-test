-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cognome" TEXT NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Examination" (
    "id" SERIAL NOT NULL,
    "exam" TEXT NOT NULL,
    "doctor" TEXT NOT NULL,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "Examination_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Examination" ADD CONSTRAINT "Examination_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
