"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioLogroPrismaRepository = void 0;
const UsuarioLogroFactory_1 = require("../../domain/factories/UsuarioLogroFactory");
class UsuarioLogroPrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async save(usuarioLogro) {
        await this.prisma.usuarioLogro.create({
            data: {
                idUsuario: usuarioLogro.idUsuario.getValue(),
                idLogro: usuarioLogro.idLogro.getValue(),
                fechaObtenido: usuarioLogro.fechaObtenido,
            },
        });
    }
    async findByUsuario(idUsuario) {
        const dbResults = await this.prisma.usuarioLogro.findMany({
            where: { idUsuario: idUsuario.getValue() },
        });
        return dbResults.map((ul) => UsuarioLogroFactory_1.UsuarioLogroFactory.reconstruir(ul.idUsuario, ul.idLogro, ul.fechaObtenido));
    }
    async exists(idUsuario, idLogro) {
        const count = await this.prisma.usuarioLogro.count({
            where: {
                idUsuario: idUsuario.getValue(),
                idLogro: idLogro.getValue(),
            },
        });
        return count > 0;
    }
    async findUsuarioAggregate(_idUsuario) {
        // Por ahora retornamos null, en una implementación completa
        // aquí se cargarían los datos del usuario desde la base de datos
        return null;
    }
    async saveUsuarioAggregate(usuarioAggregate) {
        // Por ahora no hacemos nada, en una implementación completa
        // aquí se guardarían los datos del aggregate en la base de datos
        console.log('Guardando aggregate del usuario:', usuarioAggregate.id.getValue());
    }
}
exports.UsuarioLogroPrismaRepository = UsuarioLogroPrismaRepository;
//# sourceMappingURL=UsuarioLogroPrismaRepository.js.map