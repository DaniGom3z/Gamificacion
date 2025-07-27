import { LogroRepository } from "../../domain/repositories/LogroRepository";
export declare class ListarTodosLosLogros {
    private readonly logroRepo;
    constructor(logroRepo: LogroRepository);
    execute(): Promise<import("../../domain").Logro[]>;
}
//# sourceMappingURL=ListarTodosLosLogros.d.ts.map