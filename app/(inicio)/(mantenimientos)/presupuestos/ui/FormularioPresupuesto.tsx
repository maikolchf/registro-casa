'use client'

import { InputNumerico } from "@/components"
import { Presupuesto } from "@/interfaces"
import clsx from "clsx"
import { forwardRef } from "react"
import { Controller, set, useForm } from "react-hook-form"
import { NumericFormat } from "react-number-format"


export const FormularioPresupuesto = () => {

    const { register, handleSubmit, formState: { errors }, setValue, control } = useForm<Presupuesto>()

    const GuardarDatos = async (data: Presupuesto) => {
        console.log('data', data)
    }

    return (
        <form onSubmit={handleSubmit(GuardarDatos)} >
            <div className="relative z-0 w-full mb-5">
                <label htmlFor="detalle">Detalle del presupuestos</label>
                <input
                    type="text"
                    className={clsx(
                        "pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200",
                        {
                            "border-red-500": errors.detalle
                        }
                    )}
                    {...register("detalle", { required: true })}
                />
                <span className={clsx(
                    "text-sm text-red-600 ",
                    {
                        "hidden": !errors.detalle
                    }
                )} id="error">Campo requerido</span>
            </div>
            <div className="relative z-0 w-full mb-5">
                <label htmlFor="montoAsignado">Monto asignado</label>
                <Controller
                    name="montoAsignado"
                    control={control}
                    render={({ field }) => (
                       <InputNumerico field={field} hayError={errors.montoAsignado} />
                    )}
                    rules={{ required: true }}
                />
                <span className={clsx(
                    "text-sm text-red-600 ",
                    {
                        "hidden": !errors.montoAsignado
                    }
                )} id="error">Campo requerido</span>
            </div>

            <div className="relative z-0 w-full mb-5">
                <label htmlFor="montoGastoReal">Monto pagado</label>
                <input
                    type="number"
                    className={clsx(
                        "pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200",
                        {
                            "border-red-500": errors.montoGastoReal
                        }
                    )}
                    {...register("montoGastoReal", { required: true })}
                />
                <span className={clsx(
                    "text-sm text-red-600 ",
                    {
                        "hidden": !errors.montoGastoReal
                    }
                )} id="error">Campo requerido</span>
            </div>
            <div className="relative z-0 w-full mb-5">
                <label htmlFor="montoSaldo">Monto sobrante</label>
                <input
                    type="number"
                    className={clsx(
                        "pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200",
                        {
                            "border-red-500": errors.montoSaldo
                        }
                    )}
                    {...register("montoSaldo", { required: true })}
                />
                <span className={clsx(
                    "text-sm text-red-600 ",
                    {
                        "hidden": !errors.montoSaldo
                    }
                )} id="error">Campo requerido</span>
            </div>
            <div className="relative z-0 w-full mb-5">
                <label htmlFor="name">Es solo un pago? </label>
                <input
                    type="checkbox"
                    className={clsx(
                        "mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black",
                        {
                            "border-red-500": errors.soloPago
                        }
                    )}
                    {...register("soloPago", { required: true })}
                />
                <span className={clsx(
                    "text-sm text-red-600 ",
                    {
                        "hidden": !errors.soloPago
                    }
                )} id="error">Campo requerido</span>
            </div>
            <div className="relative z-0 w-full mb-5">
                <label htmlFor="name">Sobre al que pertenece</label>
                <select
                    className={clsx(
                        "pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200",
                        {
                            "border-red-500": errors.sobre
                        }
                    )}
                    {...register("sobre", { required: true })}
                >
                    <option value="">Seleccione</option>
                    <option value="GTF">GTF</option>
                    <option value="CYS">CYS</option>
                    <option value="YITA">YITA</option>
                    <option value="OTROS">OTROS</option>
                </select>

                <span className={clsx(
                    "text-sm text-red-600 ",
                    {
                        "hidden": !errors.sobre
                    }
                )} id="error">Campo requerido</span>
            </div>
            <div className="relative z-0 w-full mb-5">
                <label htmlFor="fechaVencimiento">Fecha de vencimiento</label>
                <input
                    type="date"
                    className={clsx(
                        "pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200",
                        {
                            "border-red-500": errors.fechaVencimiento
                        }
                    )}
                    {...register("fechaVencimiento", { required: true })}
                />
                <span className={clsx(
                    "text-sm text-red-600 ",
                    {
                        "hidden": !errors.fechaVencimiento
                    }
                )} id="error">Campo requerido</span>
            </div>

            <button
                className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-700 hover:bg-blue-400 hover:shadow-lg focus:outline-none"
            >
                Guardar
            </button>
        </form>
    )
}
