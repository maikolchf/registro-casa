import React from 'react'
import { Presupuesto } from '@/interfaces'
import { formatoMoneda } from '@/utils'

interface Props {
    presupuestos: Presupuesto[]
}

export const TablaPresupuesto = ({ presupuestos }: Props) => {
    return (
        <table className="w-full">
            <thead>
                <tr className="bg-blue-gray-100 text-gray-700">
                    <th className="py-3 px-4 text-left">Detalle</th>
                    <th className="py-3 px-4 text-left">Monto asignado</th>
                    <th className="py-3 px-4 text-left">Monto pagado</th>
                    <th className="py-3 px-4 text-left">Monto sobrante</th>
                    <th className="py-3 px-4 text-left">Fecha vencimiento</th>
                    <th className="py-3 px-4 text-left">Acción</th>
                </tr>
            </thead>
            <tbody className="text-blue-gray-900">
                {
                    presupuestos.map((item) => (
                        <tr key={item.id} className="border-b border-blue-gray-200">
                            <td className="py-3 px-4">{item.detalle}</td>
                            <td className="py-3 px-4">{formatoMoneda(item.montoAsignado)}</td>
                            <td className="py-3 px-4">{formatoMoneda(item.montoGastoReal)}</td>
                            <td className="py-3 px-4">{formatoMoneda(item.montoSaldo)}</td>
                            <td className="py-3 px-4">{item.fechaVencimiento ? item.fechaVencimiento.toLocaleDateString() : new Date().toLocaleDateString()}</td>
                            <td className="py-3 px-4"> <a href="#" className="hover:underline">Editar</a> </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
