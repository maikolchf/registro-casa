import { create } from 'zustand'


interface State {
    menuSideAbierto: boolean;
    abiertoSideMenu: () => void;
    cerradoSideMenu: () => void;

}

export const useAlmacenUI = create<State>((set) => ({
    menuSideAbierto: false,
    abiertoSideMenu: () => set({ menuSideAbierto: true }),
    cerradoSideMenu: () => set({ menuSideAbierto: false })
}))
