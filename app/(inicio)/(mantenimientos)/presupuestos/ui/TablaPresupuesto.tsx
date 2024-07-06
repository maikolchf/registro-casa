"use client"
import React, { useEffect, useState } from 'react'
import { Presupuesto, Respuesta } from '@/interfaces'
import { formatoMoneda } from '@/utils'
import { usePresupuestoStore } from '@/almacen'
import { Spinner } from '@/components'
import clsx from 'clsx'

interface Props {
    respuesta: Respuesta<Presupuesto[]>
}

export const TablaPresupuesto = ({ respuesta }: Props) => {
    const almacenamientoPresupuesto = usePresupuestoStore((state) => ({
        getStorePresupuesto: state.getStorePresupuesto,
        addPresupuesto: state.addPresupuesto,
        clearPresupuesto: state.clearPresupuesto
    }));
    const [mensage, setMensage] = useState('');
    const [ok, setOk] = useState(true);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        setOk(respuesta.ok);
        setMensage(respuesta.message);
        if (respuesta.ok) {
            almacenamientoPresupuesto.clearPresupuesto();
            respuesta.data!.forEach((item) => {
                almacenamientoPresupuesto.addPresupuesto(item);
            });
        }
    }, [respuesta.ok, respuesta.message]);

    useEffect(() => {
        setCargando(true);
    }, [])
    
    if(!cargando) return <Spinner />;

    return (
        <>           
            <table className="w-full">
                <thead>
                    <tr className={
                        clsx(
                            "bg-blue-gray-100 text-gray-700",
                            {
                                "hidden": almacenamientoPresupuesto.getStorePresupuesto().length === 0 || !ok
                            }
                        )
                    }>
                        <th className="py-3 px-4 text-left">Detalle</th>
                        <th className="py-3 px-4 text-left">Monto asignado</th>
                        <th className="py-3 px-4 text-left">Monto pagado</th>
                        <th className="py-3 px-4 text-left">Acción</th>
                    </tr>
                </thead>
                <tbody className="text-blue-gray-900">
                    {
                        ok &&
                        almacenamientoPresupuesto.getStorePresupuesto().map((item) => (
                            <tr key={item.id} className="border-b border-blue-gray-200">
                                <td className="py-3 px-4">{item.detalle}</td>
                                <td className="py-3 px-4">{formatoMoneda(item.montoAsignado)}</td>
                                <td className="py-3 px-4">{formatoMoneda(item.montoGastoReal)}</td>
                                <td className="py-3 px-4"> <a href="#" className="hover:underline">Editar</a> </td>
                            </tr>
                        ))
                    }
                    {
                        ok && almacenamientoPresupuesto.getStorePresupuesto().length === 0 &&
                        <tr>
                            <td colSpan={6} className="py-3 px-4 text-center">¡No hay datos!</td>
                        </tr>
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
