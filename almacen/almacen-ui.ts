import { create } from 'zustand'


interface State {
    menuSideAbierto: boolean;
    abrirSideMenu: () => void;
    cerrarSideMenu: () => void;

}

export const useAlmacenUI = create<State>((set) => ({
    menuSideAbierto: false,
    abrirSideMenu: () => set({ menuSideAbierto: true }),
    cerrarSideMenu: () => set({ menuSideAbierto: false })
}))
