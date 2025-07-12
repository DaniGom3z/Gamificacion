import { PrismaClient } from '@prisma/client';
import { UsuarioLogro } from '../../domain/entities/UsuarioLogro';
import { UsuarioLogroRepository } from '../../domain/repositories/UsuarioLogroRepository';
import { UsuarioId } from '../../domain/valueObjects/UsuarioId';
import { LogroId } from '../../domain/valueObjects/LogroId';
import { UsuarioAggregate } from '../../domain/aggregates/UsuarioAggregate';
export declare class UsuarioLogroPrismaRepository implements UsuarioLogroRepository {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    save(usuarioLogro: UsuarioLogro): Promise<void>;
    findByUsuario(idUsuario: UsuarioId): Promise<UsuarioLogro[]>;
    exists(idUsuario: UsuarioId, idLogro: LogroId): Promise<boolean>;
    findUsuarioAggregate(_idUsuario: UsuarioId): Promise<UsuarioAggregate | null>;
    saveUsuarioAggregate(usuarioAggregate: UsuarioAggregate): Promise<void>;
}
//# sourceMappingURL=UsuarioLogroPrismaRepository.d.ts.map