import React from 'react'
import { TablaSobre } from './ui/TablaSobre'
import { FormularioSobre } from './ui/FormularioSobre'
import { ObtenerSobre } from '@/acciones'
import { Respuesta, Sobre } from '@/interfaces';

export default async function SobrePage() {

    const respuesta = await ObtenerSobre("");
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-full grid md:grid-cols-2 sm:grid-cols-1">
                <div className="m-6 shadow-lg bg-white">
                    <div className="flex items-center justify-center w-full h-full">
                        <div className="w-full h-full flex items-center justify-center">
                            <TablaSobre respuesta={respuesta as Respuesta<Sobre[]>} />
                        </div>
                    </div>
                </div>
                <div className="p-0  m-6">
                    <div className="mx-auto max-w-2xl px-6 py-12 shadow-lg bg-white">
                        <FormularioSobre />
                    </div>
                </div>
            </div>
        </div>
    )
}

