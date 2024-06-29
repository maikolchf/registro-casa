'use client'
import React from 'react'
import { IoHome } from "react-icons/io5";


export const SideBar = () => {

    return (
        <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">            
            <div className="m-4">
                <ul className="mb-4 flex flex-col gap-1">
                    <li>
                        <a aria-current="page" className="active" href="#">
                            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize" type="button">
                                <IoHome className="w-5 h-5 text-white" /> 
                                <span className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Inicio</span>
                            </button>
                        </a>
                    </li>
                    <li>
                        <a className="" href="#">
                            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                
                                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Monto ahorro</p>
                            </button>
                        </a>
                    </li>
                    <li>
                        <a className="" href="#">
                            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                
                                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Mantenimiento presupuestos</p>
                            </button>
                        </a>
                    </li>                    
                    <li>
                        <a className="" href="#">
                            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                
                                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">notifactions</p>
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
