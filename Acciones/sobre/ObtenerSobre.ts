"use server";

import { Sobre } from "@/interfaces";
import prisma from "@/lib/prisma";

export const ObtenerSobre = async (id: string) => {

    try {

        if (id !== "") {
            const sobre = await prisma.sobre.findMany({
                where: {
                    id: id
                }
            });

            return {
                ok: true,
                message: "Sobre obtenido correctamente",
                data: sobre as Sobre
            }
        }

        const AllSobre = await prisma.sobre.findMany({
            orderBy: {
                id: 'asc'
            }
        });

        return {
            ok: true,
            message: "Sobres obtenidos correctamente",
            data: AllSobre as Sobre[]
        }




    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: "Error al obtener el/los sobre/s",
            data: null
        }
    }
};
