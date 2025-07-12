import { Logro } from '../../domain/entities/Logro';
import { LogroRepository } from '../../domain/repositories/LogroRepository';
import { LogroId } from '../../domain/valueObjects/LogroId';
import { PrismaClient } from '@prisma/client';
export declare class LogroPrismaRepository implements LogroRepository {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    findById(id: LogroId): Promise<Logro | null>;
    findAll(): Promise<Logro[]>;
    findByTipo(tipo: string): Promise<Logro[]>;
}
//# sourceMappingURL=LogroPrismaRepository.d.ts.map