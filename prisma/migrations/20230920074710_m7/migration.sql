/*
  Warnings:

  - A unique constraint covering the columns `[identifier]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "identifier" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_identifier_key" ON "User"("identifier");
