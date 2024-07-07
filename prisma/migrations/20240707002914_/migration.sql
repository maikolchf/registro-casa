/*
  Warnings:

  - You are about to drop the column `sobre` on the `Presupuesto` table. All the data in the column will be lost.
  - You are about to drop the column `presupuestoId` on the `Sobre` table. All the data in the column will be lost.
  - Added the required column `sobreId` to the `Presupuesto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Sobre" DROP CONSTRAINT "Sobre_presupuestoId_fkey";

-- AlterTable
ALTER TABLE "Presupuesto" DROP COLUMN "sobre",
ADD COLUMN     "sobreId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Sobre" DROP COLUMN "presupuestoId";

-- AddForeignKey
ALTER TABLE "Presupuesto" ADD CONSTRAINT "Presupuesto_sobreId_fkey" FOREIGN KEY ("sobreId") REFERENCES "Sobre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
