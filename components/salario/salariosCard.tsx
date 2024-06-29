import React from 'react'
import { GiMoneyStack } from "react-icons/gi";

export const SalariosCard = () => {
    const salarios = [
        {
            id: 1,
            detalle: "Salario de Kim",
            monto: 1044860.00
        },
        {
            id: 1,
            detalle: "Salario de micahel",
            monto: 886425.15
        }
    ]

    const totalSalarios = salarios.reduce((total, salario) => total + salario.monto, 0);

    return (
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mb-7">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-blue-400 text-white
            shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                <GiMoneyStack size={40}/>
            </div>
            {
                salarios.map((salario) => (
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                            {salario.detalle}
                        </p>
                        <span className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                            {salario.monto}
                        </span>
                    </div>
                )
                )
            }
            < div className="border-t border-blue-gray-50 p-4 text-right" >
                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong className="text-green-500">{totalSalarios}</strong>
                </p>
            </div >
        </div >
    )
}
