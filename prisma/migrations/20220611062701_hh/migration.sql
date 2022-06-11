/*
  Warnings:

  - You are about to drop the column `email` on the `department` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `department` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "department" DROP COLUMN "email",
DROP COLUMN "password";
