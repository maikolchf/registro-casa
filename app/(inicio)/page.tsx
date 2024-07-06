import { ObtenerPresupuesto } from "@/Acciones";
import { GridPresupuesto, SalariosCard, CalculosCard, PresupuestoIndividualCard } from "@/components";
import { Respuesta, Presupuesto } from "@/interfaces";

const ObtenerPresupuestos = async () => {
  const presupuestos = await ObtenerPresupuesto("");
  return presupuestos;
}

export default async function Home() {

  const respuesta = await ObtenerPresupuestos();
  return (
    <div className="m-4">
      <div className="mt-12">
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
          <SalariosCard />
          <CalculosCard />
          <PresupuestoIndividualCard />
        </div>
        <div className="">
          <GridPresupuesto respuesta={respuesta as Respuesta<Presupuesto[]>} />
        </div>

      </div>
    </div>
  );
}
