/*
  Warnings:

  - Added the required column `brand` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ean` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ncm` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "ean" TEXT NOT NULL,
ADD COLUMN     "ncm" TEXT NOT NULL;
