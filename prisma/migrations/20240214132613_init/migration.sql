/*
  Warnings:

  - You are about to drop the `Resources` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoryToProducts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductsToResources` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToProducts" DROP CONSTRAINT "_CategoryToProducts_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToProducts" DROP CONSTRAINT "_CategoryToProducts_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProductsToResources" DROP CONSTRAINT "_ProductsToResources_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductsToResources" DROP CONSTRAINT "_ProductsToResources_B_fkey";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "productId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Resources";

-- DropTable
DROP TABLE "_CategoryToProducts";

-- DropTable
DROP TABLE "_ProductsToResources";

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
