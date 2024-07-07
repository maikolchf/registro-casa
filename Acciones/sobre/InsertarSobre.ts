"use server";

import { Sobre } from "@/interfaces"
import prisma from '@/lib/prisma';

export const InsertarSobre = async (data: Sobre) => {
    try {
        console.log(data)
        const dataRespuesta = await prisma.sobre.create({
            data: {
                nombre: data.nombre,
                estado: data.estado,
              }
        })

        return {
            ok: true,
            message: "Sobre insertado correctamente",
            data: dataRespuesta
        }
    } catch (error: any) {
        return {
            ok: false,
            message: "Ocurrio un error al insertar el sobre",
            data: null       
        }
    }
}