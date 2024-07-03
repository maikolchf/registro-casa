

export const FormularioPresupuesto = () => {
    return (
        <form id="form" >
            <div className="relative z-0 w-full mb-5">
                <label htmlFor="name">Detalle del presupuestos</label>
                <input
                    type="text"
                    name="name"
                    placeholder=""
                    required
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <span className="text-sm text-red-600 hidden" id="error">Campo requerido</span>
            </div>
            <div className="relative z-0 w-full mb-5">
                <label htmlFor="name">Monto asignado</label>
                <input
                    type="text"
                    name="name"
                    placeholder=""
                    required
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <span className="text-sm text-red-600 hidden" id="error">Campo requerido</span>
            </div>
            <div className="relative z-0 w-full mb-5">
                <label htmlFor="name">Monto pagado</label>
                <input
                    type="text"
                    name="name"
                    placeholder=""
                    required
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <span className="text-sm text-red-600 hidden" id="error">Campo requerido</span>
            </div>
            <div className="relative z-0 w-full mb-5">
                <label htmlFor="name">Monto sobrante</label>
                <input
                    type="text"
                    name="name"
                    placeholder=""
                    required
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <span className="text-sm text-red-600 hidden" id="error">Campo requerido</span>
            </div>
            <div className="relative z-0 w-full mb-5">
                <label htmlFor="name">Es solo un pago? </label>
                <input
                    type="checkbox"
                    name="radio"
                    value="1"
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                />
                <span className="text-sm text-red-600 hidden" id="error">Campo requerido</span>
            </div>
            <div className="relative z-0 w-full mb-5">
                <label htmlFor="name">Sobre al que pertenece</label>
                <select
                    name="name"
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200">
                    <option value=" ">Seleccione</option>
                    <option value="GTF">GTF</option>
                    <option value="CYS">CYS</option>
                    <option value="YITA">YITA</option>
                    <option value="OTROS">OTROS</option>
                </select>

                <span className="text-sm text-red-600 hidden" id="error">Campo requerido</span>
            </div>
            <div className="relative z-0 w-full mb-5">
                <label htmlFor="name">Fecha de vencimiento</label>
                <div className="relative z-0 w-full mb-5">
                    <input
                        type="date"
                        name="ssss"
                        placeholder=" "
                        className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    />
                </div>
                <span className="text-sm text-red-600 hidden" id="error">Campo requerido</span>
            </div>
            
            <button
                id="button"
                type="button"
                className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-700 hover:bg-blue-400 hover:shadow-lg focus:outline-none"
            >
                Guardar
            </button>
        </form>
    )
}
