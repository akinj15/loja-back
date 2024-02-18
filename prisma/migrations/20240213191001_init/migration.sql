/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Resources` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Resources_code_key" ON "Resources"("code");
