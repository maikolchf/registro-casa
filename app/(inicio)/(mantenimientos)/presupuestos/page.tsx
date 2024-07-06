import { TablaPresupuesto } from "./ui/TablaPresupuesto";
import { FormularioPresupuesto } from "./ui/FormularioPresupuesto";
import { ObtenerPresupuesto } from "@/Acciones";
import { Presupuesto, Respuesta } from "@/interfaces";

const ObtenerPresupuestos = async () => {
    const presupuestos = await ObtenerPresupuesto("");
    return presupuestos;
}

export default async function PresupuestoPage() {



    const respuesta = await ObtenerPresupuestos();

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-full grid md:grid-cols-2 sm:grid-cols-1">
                <div className="m-6 shadow-lg bg-white">
                    <div className="flex items-center justify-center w-full h-full">
                        <div className="w-full h-full flex items-center justify-center">
                            <TablaPresupuesto respuesta={respuesta as Respuesta<Presupuesto[]>} />
                        </div>
                    </div>
                </div>
                <div className="p-0  m-6">
                    <div className="mx-auto max-w-2xl px-6 py-12 shadow-lg bg-white">
                        <FormularioPresupuesto />
                    </div>
                </div>
            </div>
        </div>
    );
}