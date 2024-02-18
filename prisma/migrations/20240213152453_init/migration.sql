/*
  Warnings:

  - The `price` column on the `Resources` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Resources" DROP COLUMN "price",
ADD COLUMN     "price" INTEGER;
