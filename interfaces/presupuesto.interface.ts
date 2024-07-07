import { Sobre } from '@/interface';

export interface Presupuesto {

    id: string;
    detalle: string,
    montoAsignado: number,
    montoGastoReal: number,
    montoSaldo: number,
    soloPago: boolean,
    sobre: Sobre,
    fechaVencimiento?: Date | null
    
}
