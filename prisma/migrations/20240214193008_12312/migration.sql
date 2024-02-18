/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `class` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_productId_fkey";

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "class" TEXT NOT NULL;

-- DropTable
DROP TABLE "Category";
