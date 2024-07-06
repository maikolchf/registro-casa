import clsx from 'clsx'
import React from 'react'

interface Props {
    ocultarMensage: boolean;
    mensaje: string;
    ok: boolean;
}
export const ErrorDiv = ({ ocultarMensage, mensaje, ok }: Props) => {
    return (
        <div role="alert" className={
            clsx(
                "relative w-full text-base font-regular px-4 py-4 rounded-lg text-white flex mb-3 transition-opacity duration-300",
                {
                    "opacity-0": !ocultarMensage,
                    "opacity-100": ocultarMensage,
                    "hidden": mensaje === '',
                    "bg-red-500": !ok,
                    "bg-green-500": ok
                }
            )
        }>
            <div className=" mr-12">
                <p className="font-bold text-white">
                    {mensaje}
                </p>
            </div>
        </div>
    )
}
