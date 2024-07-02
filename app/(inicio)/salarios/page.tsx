import { salarios } from "@/seed/seed";
import { TablaSalarios } from "./ui/tabla-Salarios";

const listaSalarios = salarios;
export default function NamePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-full grid md:grid-cols-2 sm:grid-cols-1">
                <div className="m-6 shadow-lg bg-white">
                    <div className="flex items-center justify-center w-full h-full">
                        <div className="w-full h-full flex items-center justify-center">
                            <TablaSalarios salarios={listaSalarios} />
                        </div>
                    </div>
                </div>
                <div className="p-0  m-6">
                    <div className="mx-auto max-w-2xl px-6 py-12 shadow-lg bg-white">
                        <form id="form" >
                            <div className="relative z-0 w-full mb-5">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Ingrese el nombre de la persona"
                                    required
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                            </div>

                            <div className="relative z-0 w-full mb-5">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Ingrese el monto del salario"
                                    required
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                            </div>
                            <button
                                id="button"
                                type="button"
                                className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-700 hover:bg-blue-400 hover:shadow-lg focus:outline-none"
                            >
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}