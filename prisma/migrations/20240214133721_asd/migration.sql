/*
  Warnings:

  - You are about to drop the column `title` on the `Products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `Products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Products_code_key" ON "Products"("code");
