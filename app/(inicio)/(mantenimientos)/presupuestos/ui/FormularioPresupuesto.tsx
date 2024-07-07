'use client'

import { InsertarPresupuesto } from "@/acciones"
import { InputNumerico } from "@/components"
import { Presupuesto, Sobre } from "@/interfaces"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { ConvertirPresupuesto } from "@/utils/shared"
import { ErrorDiv } from '@/components';
import { usePresupuestoStore } from "@/almacen"

interface Props {
    sobres: Sobre[]
}

export const FormularioPresupuesto = ({ sobres }: Props) => {

    const { register, handleSubmit, formState: { errors }, control, reset } = useForm<Presupuesto>()
    const [mensaje, setMensaje] = useState('');
    const [ok, setOk] = useState(true)
    const [ocultarMensaje, setOcultarMensaje] = useState(false);
    const almacenamientoPresupuesto = usePresupuestoStore((state) => ({
        presupuestos: state.presupuestos,
        addPresupuesto: state.addPresupuesto
    }));

    const GuardarDatos = async (data: Presupuesto) => {

        const respuesta = await InsertarPresupuesto(ConvertirPresupuesto(data));
        setOk(respuesta.ok);
        setMensaje(respuesta.message);
        if (respuesta.ok) {
            almacenamientoPresupuesto.addPresupuesto(respuesta.data!);
            reset({
                detalle: '',
                montoAsignado: 0,
                montoGastoReal: 0,
                soloPago: false,
                sobre: '',
                fechaVencimiento: null
            });
        }
    }

    useEffect(() => {
        if (mensaje !== '') {
            setOcultarMensaje(true);
            const timer = setTimeout(() => {
                setOcultarMensaje(false);
                setTimeout(() => setMensaje(''), 300);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [mensaje]);



    return (
        <form onSubmit={handleSubmit(GuardarDatos)} >
            <div className="grid w-full place-items-center overflow-x-scroll rounded-lg lg:overflow-visible">
                <ErrorDiv mensaje={mensaje} ok={ok} ocultarMensage={ocultarMensaje} />
            </div>
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
                <Controller
                    name="montoGastoReal"
                    control={control}
                    render={({ field }) => (
                        <InputNumerico field={field} hayError={errors.montoGastoReal} />
                    )}
                />
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
                    {...register("soloPago")}
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
                    {
                        sobres.map((sobre) => (
                            <option key={sobre.id} value={sobre.id}>{sobre.nombre}</option>
                        ))
                    }
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
