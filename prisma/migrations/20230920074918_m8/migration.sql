/*
  Warnings:

  - Made the column `identifier` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "identifier" SET NOT NULL;
