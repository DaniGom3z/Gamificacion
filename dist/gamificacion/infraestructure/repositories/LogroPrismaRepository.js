"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogroPrismaRepository = void 0;
const LogroFactory_1 = require("../../domain/factories/LogroFactory");
class LogroPrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findById(id) {
        const logroDb = await this.prisma.logro.findUnique({
            where: { id: id.getValue() },
        });
        if (!logroDb) {
            return null;
        }
        return LogroFactory_1.LogroFactory.reconstruir(logroDb.id, logroDb.nombre, logroDb.descripcion ?? '', logroDb.puntosOtorgados, logroDb.tipo);
    }
    async findAll() {
        const logrosDb = await this.prisma.logro.findMany();
        return logrosDb.map((l) => LogroFactory_1.LogroFactory.reconstruir(l.id, l.nombre, l.descripcion ?? '', l.puntosOtorgados, l.tipo));
    }
    async findByTipo(tipo) {
        const logrosDb = await this.prisma.logro.findMany({
            where: { tipo }
        });
        return logrosDb.map((l) => LogroFactory_1.LogroFactory.reconstruir(l.id, l.nombre, l.descripcion ?? '', l.puntosOtorgados, l.tipo));
    }
}
exports.LogroPrismaRepository = LogroPrismaRepository;
//# sourceMappingURL=LogroPrismaRepository.js.map