import React from 'react'
import { GiPayMoney } from 'react-icons/gi'
import { formatoMoneda } from '@/utils'
import { presupuestos } from '../../seed/seed'
const presupuesto = presupuestos;

export const GridPresupuesto = () => {
    return (
        presupuesto.map((item) => (
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white 
            text-gray-700 shadow-md">
                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr
                 from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg 
                 absolute -mt-4 grid h-9 w-9 sm:h-12 sm:w-12 place-items-center">
                    <GiPayMoney size={40} />
                </div>
                <div className="p-4 text-right">
                    <p className="block antialiased font-sans text-sm leading-normal font-normal 
                            text-blue-gray-600 whitespace-pre-line">
                        {item.detalle}
                    </p>

                    <span className="block antialiased tracking-normal font-sans text-2xl 
                    font-semibold leading-snug text-blue-gray-900">
                        {formatoMoneda(item.montoAsignado)}
                    </span>
                    <span>
                        {formatoMoneda(item.montoGastoReal)}
                    </span>
                </div>
                <div className="text-right border-t border-blue-gray-50 p-4">
                    <p className="block antialiased font-sans text-base leading-relaxed 
                    font-normal text-blue-gray-600">
                        <strong className="text-green-500">{formatoMoneda(item.montoSaldo)}</strong>
                    </p>
                </div>
            </div>
        ))
    )
}
