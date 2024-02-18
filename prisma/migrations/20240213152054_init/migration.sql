/*
  Warnings:

  - You are about to drop the column `Name` on the `Payment` table. All the data in the column will be lost.
  - Added the required column `code` to the `Resources` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "Name";

-- AlterTable
ALTER TABLE "Products" ALTER COLUMN "stock" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Resources" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "price" TEXT,
ADD COLUMN     "stock" INTEGER;
