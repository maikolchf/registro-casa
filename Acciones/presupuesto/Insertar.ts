"use server";

import { Presupuesto } from "@/interfaces"
import prisma from '@/lib/prisma';

export const InsertarPresupuesto = async (data: Presupuesto) => {
    try {
        console.log(data)
        const dataRespuesta = await prisma.presupuesto.create({
            data: {
                detalle: data.detalle,
                montoAsignado: Number.isNaN(data.montoAsignado) ? 0 : data.montoAsignado,
                montoGastoReal: Number.isNaN(data.montoGastoReal)? 0 : data.montoGastoReal,
                montoSaldo: Number.isNaN(data.montoAsignado) ? 0 : data.montoAsignado,
                sobre: data.sobre,
                soloPago: data.soloPago,
                fechaVencimiento: data.fechaVencimiento,
            },
            select: {
                id: true,
                detalle: true,
                montoAsignado: true,
                montoGastoReal: true,
                montoSaldo: true,
                sobre: true,
                soloPago: true,
                fechaVencimiento: true,
            }
        })

        return {
            ok: true,
            message: "Presupuesto insertado correctamente",
            data: dataRespuesta as Presupuesto
        }
    } catch (error: any) {
        return {
            ok: false,
            message: "Ocurrio un error al insertar el presupuesto",
            data: null       
        }
    }
}