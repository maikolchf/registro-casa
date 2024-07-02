import React from 'react'
import { Salario } from '@/interfaces'
import { formatoMoneda } from '@/utils';

interface Props {
    salarios: Salario[]
}

export const TablaSalarios = ({ salarios }: Props) => {
    return (
        <table className="w-full">
            <thead>
                <tr className="bg-blue-gray-100 text-gray-700">
                    <th className="py-3 px-4 text-left">Nombre del ingreso</th>
                    <th className="py-3 px-4 text-left">Salario</th>
                    <th className="py-3 px-4 text-left">Acción</th>
                </tr>
            </thead>
            <tbody className="text-blue-gray-900">
                {
                    salarios.map((salario) => (
                        <tr key={salario.id} className="border-b border-blue-gray-200">
                            <td className="py-3 px-4">{salario.detalle}</td>
                            <td className="py-3 px-4">{formatoMoneda(salario.monto)}</td>
                            <td className="py-3 px-4"> <a href="#" className="hover:underline">Editar</a> </td>
                        </tr>
                    ))
                }                
            </tbody>
        </table>
    )
}
