export interface Presupuesto {

    id: number;
    detalle: string,
    montoAsignado: number,
    montoGastoReal: number,
    montoSaldo: number,
    soloPago: boolean,
    sobre: string,
    fechaVencimiento?: Date
    
}