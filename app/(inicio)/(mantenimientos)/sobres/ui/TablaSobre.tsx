"use client"
import React, { useEffect, useState } from 'react'
import { Sobre, Respuesta } from '@/interfaces'
import { useSobreStore } from '@/almacen'
import { NohayDatos, Spinner } from '@/components'
import clsx from 'clsx'

interface Props {
    respuesta: Respuesta<Sobre[]>
}

export const TablaSobre = ({ respuesta }: Props) => {
    const almacenamientoSobre = useSobreStore((state) => ({
        sobres: state.sobres,
        addSobre: state.addSobre,
        clearSobre: state.clearSobre,
    }));
    const [mensage, setMensage] = useState('');
    const [ok, setOk] = useState(true);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        setOk(respuesta.ok);
        setMensage(respuesta.message);
        if (respuesta.ok) {
            almacenamientoSobre.clearSobre();
            respuesta.data!.forEach((item) => {
                almacenamientoSobre.addSobre(item);
            });
        }
    }, [respuesta.ok, respuesta.message]);

    useEffect(() => {
        setCargando(true);
    }, [])
    
    if(!cargando) return <Spinner />;

    if (almacenamientoSobre.sobres.length === 0) return <NohayDatos />;

    return (
        <>           
            <table className="w-full">
                <thead>
                    <tr className={
                        clsx(
                            "bg-blue-gray-100 text-gray-700",
                            {
                                "hidden": almacenamientoSobre.sobres.length === 0 || !ok
                            }
                        )
                    }>
                        <th className="py-3 px-4 text-left">Nombre</th>
                        <th className="py-3 px-4 text-left">Estado</th>
                        <th className="py-3 px-4 text-left">Acción</th>
                    </tr>
                </thead>
                <tbody className="text-blue-gray-900">
                    {
                        ok &&
                        almacenamientoSobre.sobres.map((item) => (
                            <tr key={item.id} className="border-b border-blue-gray-200">
                                <td className="py-3 px-4">{item.nombre}</td>
                                <td className="py-3 px-4">{item.estado === "A" ? "Activo" : "Inactivo" }</td>
                                <td className="py-3 px-4"> <a href="#" className="hover:underline">Editar</a> </td>
                            </tr>
                        ))
                    }
                    {
                        ok === false &&
                        <tr>
                            <td colSpan={6} className="py-3 px-4 text-center">{mensage}</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}
