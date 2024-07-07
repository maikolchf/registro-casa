'use client'

import { InsertarSobre } from "@/acciones"
import { InputNumerico } from "@/components"
import { Sobre } from "@/interfaces"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { ConvertirPresupuesto } from "@/utils/shared"
import { ErrorDiv } from '@/components';
import { usePresupuestoStore } from "@/almacen"


export const FormularioSobre = () => {

    const { register, handleSubmit, formState: { errors }, control, reset } = useForm<Sobre>()
    const [mensaje, setMensaje] = useState('');
    const [ok, setOk] = useState(true)
    const [ocultarMensaje, setOcultarMensaje] = useState(false); 

    const GuardarDatos = async (data: Sobre) => {
        const respuesta = await InsertarSobre(data);
        setOk(respuesta.ok);
        setMensaje(respuesta.message);
        
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
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    className={clsx(
                        "pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200",
                        {
                            "border-red-500": errors.nombre
                        }
                    )}
                    {...register("nombre", { required: true })}
                />
                <span className={clsx(
                    "text-sm text-red-600 ",
                    {
                        "hidden": !errors.nombre
                    }
                )} id="error">Campo requerido</span>
            </div>
            
            <div className="relative z-0 w-full mb-5">
                <label htmlFor="estado">Estado</label>
                <select
                    className={clsx(
                        "pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200",
                        {
                            "border-red-500": errors.estado
                        }
                    )}
                    {...register("estado", { required: true })}
                >
                    <option value="">Seleccione</option>
                    <option value="A">Activo</option>
                    <option value="I">Inactivo</option>
                </select>

                <span className={clsx(
                    "text-sm text-red-600 ",
                    {
                        "hidden": !errors.estado
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
