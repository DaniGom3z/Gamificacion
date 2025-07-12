import { Logro } from "../entities/Logro";
import { LogroId } from "../valueObjects/LogroId";
export interface LogroRepository {
    /**
     * @param id ID del logro
     * @returns El Logro o null si no existe
     */
    findById(id: LogroId): Promise<Logro | null>;
    /**
     * Devuelve todos los logros del sistema.
     * @returns Lista de logros
     */
    findAll(): Promise<Logro[]>;
    /**
     * Busca logros por tipo
     * @param tipo Tipo de logro
     * @returns Lista de logros del tipo especificado
     */
    findByTipo(tipo: string): Promise<Logro[]>;
}
//# sourceMappingURL=LogroRepository.d.ts.map