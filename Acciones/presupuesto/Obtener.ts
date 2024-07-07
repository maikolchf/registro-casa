"use server";

import { Presupuesto } from "@/interfaces";
import prisma from "@/lib/prisma";

export const ObtenerPresupuesto = async (id: string) => {

    try {

        if (id !== "") {
            const presupuesto = await prisma.presupuesto.findMany({
                where: {
                    id: id
                },
                include: {
                    sobre: true
                }
            });

            return {
                ok: true,
                message: "Presupuesto obtenido correctamente",
                data: presupuesto
            }
        }

        const AllPresupuestos = await prisma.presupuesto.findMany({
            orderBy: {
                fechaVencimiento: 'asc'
            },
            include: {
                sobre: true
            }
        });

        return {
            ok: true,
            message: "Presupuestos obtenidos correctamente",
            data: AllPresupuestos
        }




    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: "Error al obtener el/los presupuesto",
            data: null
        }
    }
};
