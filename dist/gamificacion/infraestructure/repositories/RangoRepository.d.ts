import { PrismaClient } from '@prisma/client';
export declare class RangoRepository {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    obtenerRangoPorPuntos(puntosTotales: number): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        puntuacionMinima: number;
        orden: number;
    } | null>;
}
//# sourceMappingURL=RangoRepository.d.ts.map