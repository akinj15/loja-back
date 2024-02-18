/*
  Warnings:

  - Added the required column `key` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "key" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "fone" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "cgccpf" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "key" INTEGER NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ClientToOrder" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClientToOrder_AB_unique" ON "_ClientToOrder"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientToOrder_B_index" ON "_ClientToOrder"("B");

-- AddForeignKey
ALTER TABLE "_ClientToOrder" ADD CONSTRAINT "_ClientToOrder_A_fkey" FOREIGN KEY ("A") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClientToOrder" ADD CONSTRAINT "_ClientToOrder_B_fkey" FOREIGN KEY ("B") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
