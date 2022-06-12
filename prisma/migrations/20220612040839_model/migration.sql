/*
  Warnings:

  - You are about to drop the column `email` on the `patient` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `department` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `doctor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `patient` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phone` to the `patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "doctor" ALTER COLUMN "role" SET DEFAULT E'NORMAL';

-- AlterTable
ALTER TABLE "patient" DROP COLUMN "email",
ADD COLUMN     "phone" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "department_name_key" ON "department"("name");

-- CreateIndex
CREATE UNIQUE INDEX "doctor_email_key" ON "doctor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "patient_phone_key" ON "patient"("phone");
