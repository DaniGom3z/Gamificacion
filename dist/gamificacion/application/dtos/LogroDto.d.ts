export interface LogroDto {
    id: number;
    nombre: string;
    descripcion: string;
    puntosOtorgados: number;
    tipo: string;
}
export interface UsuarioLogroDto {
    idUsuario: number;
    idLogro: number;
    fechaObtenido: string;
    logro?: LogroDto;
}
export interface UsuarioGamificacionDto {
    idUsuario: number;
    idRango: number;
    nombreRango: string;
    puntosTotales: number;
    cantidadLogros: number;
    logros: UsuarioLogroDto[];
}
//# sourceMappingURL=LogroDto.d.ts.map