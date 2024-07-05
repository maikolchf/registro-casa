-- CreateTable
CREATE TABLE "Presepuesto" (
    "id" TEXT NOT NULL,
    "detalle" TEXT NOT NULL,
    "montoAsignado" DOUBLE PRECISION NOT NULL,
    "montoGastoReal" DOUBLE PRECISION NOT NULL,
    "montoSaldo" DOUBLE PRECISION NOT NULL,
    "soloPago" BOOLEAN NOT NULL,
    "sobre" TEXT NOT NULL,
    "fechaVencimiento" TIMESTAMP(3),

    CONSTRAINT "Presepuesto_pkey" PRIMARY KEY ("id")
);
