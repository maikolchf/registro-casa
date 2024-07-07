import { Presupuesto } from '@/interfaces';


export const ConvertirPresupuesto =(data: any): Presupuesto => {
    return {
        id: data.id,
        detalle: data.detalle,
        montoAsignado: parseFloat(data.montoAsignado),
        montoGastoReal: parseFloat(data.montoGastoReal),
        montoSaldo: parseFloat(data.montoSaldo),
        soloPago: data.soloPago,
        sobre: data.sobre,
        fechaVencimiento: data.fechaVencimiento ? new Date(data.fechaVencimiento) : null,
    };
}
