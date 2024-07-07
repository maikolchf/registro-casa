/*
  Warnings:

  - You are about to drop the column `sobreId` on the `Presupuesto` table. All the data in the column will be lost.
  - Added the required column `sobre` to the `Presupuesto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `presupuestoId` to the `Sobre` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Presupuesto" DROP CONSTRAINT "Presupuesto_sobreId_fkey";

-- AlterTable
ALTER TABLE "Presupuesto" DROP COLUMN "sobreId",
ADD COLUMN     "sobre" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Sobre" ADD COLUMN     "presupuestoId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Sobre" ADD CONSTRAINT "Sobre_presupuestoId_fkey" FOREIGN KEY ("presupuestoId") REFERENCES "Presupuesto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
