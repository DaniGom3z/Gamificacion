import { Logro } from "../entities/Logro";

export interface LogroRepository{
     /**
   * @param id ID del logro
   * @returns El Logro o null si no existe
   */
  findById(id: number): Promise<Logro | null>;

  /**
   * Devuelve todos los logros del sistema.
   * @returns Lista de logros
   */
  findAll(): Promise<Logro[]>;
}
