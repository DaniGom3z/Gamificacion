"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangoRepository = void 0;
class RangoRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async obtenerRangoPorPuntos(puntosTotales) {
        return this.prisma.rango.findFirst({
            where: {
                puntuacionMinima: {
                    lte: puntosTotales
                }
            },
            orderBy: {
                puntuacionMinima: 'desc'
            }
        });
    }
}
exports.RangoRepository = RangoRepository;
//# sourceMappingURL=RangoRepository.js.map