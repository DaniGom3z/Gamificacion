import { UsuarioLogro } from '../entities/UsuarioLogro';
export declare class UsuarioLogroFactory {
    static crearNuevo(idUsuario: number, idLogro: number, idRango?: number): UsuarioLogro;
    static reconstruir(idUsuario: number, idLogro: number, idRango: number, fechaObtenido: Date, logro?: {
        id: number;
        nombre: string;
        descripcion: string | null;
        puntosOtorgados: number;
        tipo: string;
    }): UsuarioLogro;
}
//# sourceMappingURL=UsuarioLogroFactory.d.ts.map