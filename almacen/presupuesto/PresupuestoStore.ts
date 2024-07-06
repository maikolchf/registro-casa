import { Presupuesto } from '@/interfaces';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
    presupuestos: Presupuesto[],
    addPresupuesto: (presupuestos: Presupuesto) => void,
    removePresupuesto: (id: string) => void,
    updatePresupuesto: (presupuesto: Presupuesto) => void,
    getStorePresupuesto: () => Presupuesto[],
    clearPresupuesto: () => void;
}

export const usePresupuestoStore = create<State>()(
    persist(
        (set, get) => ({
            presupuestos: [],
            addPresupuesto: (presupuesto: Presupuesto) => {

                const { presupuestos } = get();
                const existePresupuesto = presupuestos.some(
                    (item) => item.id === presupuesto.id
                );

                if (!existePresupuesto) {

                    set(({ presupuestos: [...presupuestos, presupuesto] }));
                    return;
                }

                const actualizarPresupuesto = presupuestos.map((item) => {
                    if (item.id === presupuesto.id) {
                        return {
                            ...item, detalle: presupuesto.detalle,
                            montoAsignado: presupuesto.montoAsignado,
                            montoGastoReal: presupuesto.montoGastoReal,
                            fechaVencimiento: presupuesto.fechaVencimiento,
                            soloUnPago: presupuesto.soloPago,
                            sobre: presupuesto.sobre
                        }
                    }
                    return item;
                });

                set({ presupuestos: actualizarPresupuesto });
            },
            removePresupuesto: (id: string) => {
                const { presupuestos } = get();

                const filter = presupuestos.filter((presupuesto) => presupuesto.id !== id);

                set({ presupuestos: filter });

            },
            updatePresupuesto: (presupuesto: Presupuesto) => {
                const { presupuestos } = get();
                const actualizarPresupuesto = presupuestos.map((item) => {
                    if (item.id === presupuesto.id) {
                        return {
                            ...item, detalle: presupuesto.detalle,
                            montoAsignado: presupuesto.montoAsignado,
                            montoGastoReal: presupuesto.montoGastoReal,
                            fechaVencimiento: presupuesto.fechaVencimiento,
                            soloUnPago: presupuesto.soloPago,
                            sobre: presupuesto.sobre,
                            id: presupuesto.id
                        }
                    }
                    return item;
                });

                set({ presupuestos: actualizarPresupuesto });
            },
            getStorePresupuesto: () => {
                const { presupuestos } = get();
                const listaOrdenada = presupuestos.sort((a, b) => {
                    const fechaA = a.fechaVencimiento ? new Date(a.fechaVencimiento) : null;
                    const fechaB = b.fechaVencimiento ? new Date(b.fechaVencimiento) : null;
                    if (!fechaA) return 1;
                    if (!fechaB) return -1;
                    return fechaA.getTime() - fechaB.getTime();
                });
                return listaOrdenada;
            },
            clearPresupuesto: () => {
                set({ presupuestos: [] });
            }
        }),
        {
            name: 'presupuesto-store',
        }
    )
);