/*
  Warnings:

  - You are about to drop the `Presepuesto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Presepuesto";

-- CreateTable
CREATE TABLE "Presupuesto" (
    "id" TEXT NOT NULL,
    "detalle" TEXT NOT NULL,
    "montoAsignado" DOUBLE PRECISION NOT NULL,
    "montoGastoReal" DOUBLE PRECISION NOT NULL,
    "montoSaldo" DOUBLE PRECISION NOT NULL,
    "soloPago" BOOLEAN NOT NULL,
    "sobre" TEXT NOT NULL,
    "fechaVencimiento" TIMESTAMP(3),

    CONSTRAINT "Presupuesto_pkey" PRIMARY KEY ("id")
);
