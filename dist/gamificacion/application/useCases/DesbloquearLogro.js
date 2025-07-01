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
exports.DesbloquearLogro = void 0;
const UsuarioLogroFactory_1 = require("../../domain/factories/UsuarioLogroFactory");
const GamificacionService_1 = require("../../domain/services/GamificacionService");
class DesbloquearLogro {
    constructor(logroRepo, usuarioLogroRepo) {
        this.logroRepo = logroRepo;
        this.usuarioLogroRepo = usuarioLogroRepo;
    }
    execute(idUsuario, idLogro) {
        return __awaiter(this, void 0, void 0, function* () {
            // Verificar que el logro existe
            const logro = yield this.logroRepo.findById(idLogro);
            if (!logro) {
                throw new Error(`El logro con id ${idLogro} no existe`);
            }
            // Verificar si ya tiene el logro
            const yaTiene = yield this.usuarioLogroRepo.exists(idUsuario, idLogro);
            if (yaTiene) {
                throw new Error(`El usuario ${idUsuario} ya tiene el logro ${idLogro}`);
            }
            // Verificar reglas del negocio (opcional: aquí puedes añadir lógica adicional)
            if (!GamificacionService_1.GamificacionService.esLogroElegible(logro.tipo)) {
                throw new Error(`El logro tipo ${logro.tipo} no es elegible para ser otorgado`);
            }
            // Crear la entidad
            const usuarioLogro = UsuarioLogroFactory_1.UsuarioLogroFactory.crearNuevo(idUsuario, idLogro);
            // Guardar en el repositorio
            yield this.usuarioLogroRepo.save(usuarioLogro);
            // Aquí podrías publicar un evento: LogroDesbloqueadoEvent
            // Por ahora lo dejamos como parte del dominio
        });
    }
}
exports.DesbloquearLogro = DesbloquearLogro;
