import React from 'react'
import { GiPayMoney } from 'react-icons/gi'

const presupuestos = [
    {
        id: 1,
        detalle: "Prestamo",
        montoAsignado: '₡500,000.00',
        montoGastoReal: '₡0.00',
        montoSaldo: '₡500,000.00',
    },
    {
        id: 2,
        detalle: "Internet",
        montoAsignado: '₡30,000.00',
        montoGastoReal: '₡0.00',
        montoSaldo: '₡30,000.00',
    },
    {
        id: 3,
        detalle: "Telefono Kim",
        montoAsignado: '₡14,000.00',
        montoGastoReal: '₡0.00',
        montoSaldo: '₡14,000.00',
    },
    {
        id: 4,
        detalle: "Netflix",
        montoAsignado: '₡7,708.27',
        montoGastoReal: '₡0.00',
        montoSaldo: '₡7,708.27',
    },
    {
        id: 5,
        detalle: "Spotify",
        montoAsignado: '₡7,708.27',
        montoGastoReal: '₡0.00',
        montoSaldo: '₡7,708.27',
    },
    {
        id: 6,
        detalle: "Compras mensuales",
        montoAsignado: '₡7,708.27',
        montoGastoReal: '₡0.00',
        montoSaldo: '₡7,708.27',
    },
    {
        id: 7,
        detalle: "Luz",
        montoAsignado: '₡7,708.27',
        montoGastoReal: '₡0.00',
        montoSaldo: '₡7,708.27',
    },
    {
        id: 8,
        detalle: "Agua",
        montoAsignado: '₡7,708.27',
        montoGastoReal: '₡0.00',
        montoSaldo: '₡7,708.27',
    },
    {
        id: 9,
        detalle: "Yita",
        montoAsignado: '₡7,708.27',
        montoGastoReal: '₡0.00',
        montoSaldo: '₡7,708.27',
    },
    {
        id: 10,
        detalle: "Cursos",
        montoAsignado: '₡7,708.27',
        montoGastoReal: '₡0.00',
        montoSaldo: '₡7,708.27',
    },
    {
        id: 11,
        detalle: "Salud",
        montoAsignado: '₡7,708.27',
        montoGastoReal: '₡0.00',
        montoSaldo: '₡7,708.27',
    },
    {
        id: 12,
        detalle: "Cuota condominal",
        montoAsignado: '₡7,708.27',
        montoGastoReal: '₡0.00',
        montoSaldo: '₡7,708.27',
    }
]

export const GridPresupuesto = () => {
    return (        
        presupuestos.map((presupuesto) => (
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white
             shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                    <GiPayMoney size={40} />
                </div>
                <div className="p-4 text-right">
                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                        {presupuesto.detalle}
                    </p>
                    <span className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                        {presupuesto.montoAsignado}
                    </span>
                    <span>
                        {presupuesto.montoGastoReal}
                    </span>
                </div>
                <div className="border-t border-blue-gray-50 p-4">
                    <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                        <strong className="text-green-500">{presupuesto.montoSaldo}</strong>
                    </p>
                </div>
            </div>
        ))
    )
}
