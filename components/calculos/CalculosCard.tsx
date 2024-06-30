import React from 'react'
import { GiMoneyStack } from 'react-icons/gi'
import { formatoMoneda } from '@/utils'
import  {salarios} from '../../seed/seed'

export const CalculosCard = () => {
    
    const salario = salarios;

    const entradas = salario.reduce((total, salario) => total + salario.monto, 0);
    const presupuestoGasto = 1277683.03;
    const diferencias = 653602.12;
    return (
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mb-7">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-blue-400 text-white
            shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                <GiMoneyStack size={40} />
            </div>
            <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                    <span>Entradas</span>
                </p>
                <span className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                    {formatoMoneda(entradas)}
                </span>
            </div>
            <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                    <span>Presupuesto gasto</span>
                </p>
                <span className="text-red-600 block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                    {formatoMoneda(presupuestoGasto)}
                </span>
            </div>
            < div className="border-t border-blue-gray-50 p-4 text-right" >
                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong className="">{formatoMoneda(diferencias)}</strong>
                </p>
            </div >
        </div >
    )
}
