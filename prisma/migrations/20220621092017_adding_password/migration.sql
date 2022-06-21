/*
  Warnings:

  - Added the required column `password` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "student" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "teacher" ADD COLUMN     "password" TEXT NOT NULL;
