-- CreateEnum
CREATE TYPE "department_names" AS ENUM ('Dermatology', 'Pediatrics', 'Psychiatry', 'Emergency_medicine', 'Family_medicine');

-- CreateEnum
CREATE TYPE "doctor_role" AS ENUM ('ADMIN', 'NORMAL');

-- CreateTable
CREATE TABLE "doctor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "doctor_role" NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "department" (
    "id" SERIAL NOT NULL,
    "name" "department_names" NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_doctorTopatient" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_departmentTopatient" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_doctorTopatient_AB_unique" ON "_doctorTopatient"("A", "B");

-- CreateIndex
CREATE INDEX "_doctorTopatient_B_index" ON "_doctorTopatient"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_departmentTopatient_AB_unique" ON "_departmentTopatient"("A", "B");

-- CreateIndex
CREATE INDEX "_departmentTopatient_B_index" ON "_departmentTopatient"("B");

-- AddForeignKey
ALTER TABLE "doctor" ADD CONSTRAINT "doctor_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_doctorTopatient" ADD CONSTRAINT "_doctorTopatient_A_fkey" FOREIGN KEY ("A") REFERENCES "doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_doctorTopatient" ADD CONSTRAINT "_doctorTopatient_B_fkey" FOREIGN KEY ("B") REFERENCES "patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_departmentTopatient" ADD CONSTRAINT "_departmentTopatient_A_fkey" FOREIGN KEY ("A") REFERENCES "department"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_departmentTopatient" ADD CONSTRAINT "_departmentTopatient_B_fkey" FOREIGN KEY ("B") REFERENCES "patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
