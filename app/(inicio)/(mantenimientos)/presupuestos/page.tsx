import { TablaPresupuesto } from "./ui/TablaPresupuesto";
import { FormularioPresupuesto } from "./ui/formularioPresupuesto";
import { presupuestos } from '../../../../seed/seed';

const listaPresupuestos = presupuestos;

export default function PresupuestoPage() {
    return (
        <div>
            <div className="p-0  m-6">
                <div className="mx-auto max-w-2xl px-6 py-12 shadow-lg bg-white">
                    <FormularioPresupuesto />
                </div>
                <div className="m-6 shadow-lg bg-white">
                    <div className="flex items-center justify-center w-full h-full">
                        <div className="w-full h-full flex items-center justify-center">
                        <TablaPresupuesto presupuestos={listaPresupuestos} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}