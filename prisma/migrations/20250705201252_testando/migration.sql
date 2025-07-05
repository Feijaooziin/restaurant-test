/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Mesa` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Mesa_slug_key" ON "Mesa"("slug");
