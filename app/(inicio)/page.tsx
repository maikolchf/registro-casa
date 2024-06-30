import { GridPresupuesto, SalariosCard, CalculosCard, PresupuestoIndividualCard } from "@/components";

export default function Home() {
  return (
    <div className="m-4">
      <div className="mt-12">
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
          <SalariosCard />
          <CalculosCard />
          <PresupuestoIndividualCard />
        </div>
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <GridPresupuesto />
        </div>

      </div>
    </div>
  );
}
