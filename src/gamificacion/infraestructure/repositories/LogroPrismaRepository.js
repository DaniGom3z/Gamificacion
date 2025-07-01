"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogroPrismaRepository = void 0;
const LogroFactory_1 = require("../../domain/factories/LogroFactory");
class LogroPrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const logroDb = yield this.prisma.logro.findUnique({
                where: { id },
            });
            if (!logroDb) {
                return null;
            }
            return LogroFactory_1.LogroFactory.reconstruir(logroDb.id, logroDb.nombre, (_a = logroDb.descripcion) !== null && _a !== void 0 ? _a : '', logroDb.puntosOtorgados, logroDb.tipo);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const logrosDb = yield this.prisma.logro.findMany();
            return logrosDb.map((l) => {
                var _a;
                return LogroFactory_1.LogroFactory.reconstruir(l.id, l.nombre, (_a = l.descripcion) !== null && _a !== void 0 ? _a : '', l.puntosOtorgados, l.tipo);
            });
        });
    }
}
exports.LogroPrismaRepository = LogroPrismaRepository;
