/*
  Warnings:

  - You are about to drop the column `description` on the `ProductImage` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `ProductImage` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductImage" DROP COLUMN "description",
DROP COLUMN "name";
