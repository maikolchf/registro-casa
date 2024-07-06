
export interface Respuesta<T>  {
    ok: boolean,
    message: string,
    data: T
}