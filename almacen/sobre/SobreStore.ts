import { Sobre } from '@/interfaces';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface State {
    sobres: Sobre[],
    addSobre: (sobre: Sobre) => void,
    removeSobre: (id: string) => void,
    updateSobre: (sobre: Sobre) => void,
    clearSobre: () => void;
}

export const useSobreStore = create<State>()(
    persist(
        (set, get) => ({
            sobres: [],
            addSobre: (sobre: Sobre) => {
                const { sobres } = get();
                const existePresupuesto = sobres.some(
                    (item) => item.id === sobre.id
                );

                if (!existePresupuesto) {

                    set(({ sobres: [...sobres, sobre] }));
                    return;
                }

                const actualizarSobre = sobres.map((item) => {
                    if (item.id === sobre.id) {
                        return {
                            ...item,
                            nombre: sobre.nombre,
                            estado: sobre.estado,
                        }
                    }
                    return item;
                });

                set({ sobres: actualizarSobre });
            },
            removeSobre: (id: string) => {
                const { sobres } = get();

                const filter = sobres.filter((item) => item.id !== id);

                set({ sobres: filter });

            },
            updateSobre: (sobre: Sobre) => {
                const { sobres } = get();
                const actualizarSobre = sobres.map((item) => {
                    if (item.id === sobre.id) {
                        return {
                            ...item,
                            nombre: sobre.nombre,
                            estado: sobre.estado
                        }
                    }
                    return item;
                });

                set({ sobres: actualizarSobre });
            },
            clearSobre: () => {
                set({ sobres: [] });
            }

        }),
        {
            name: 'sobre-store'
        }
    )
);