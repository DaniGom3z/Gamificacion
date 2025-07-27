// application/useCases/ListarTodosLosLogros.ts
import { LogroRepository } from "../../domain/repositories/LogroRepository";

export class ListarTodosLosLogros {
  constructor(private readonly logroRepo: LogroRepository) {}

  async execute() {
    return this.logroRepo.findAll(); 
  }
}
