"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DependencyInjection_1 = require("../../config/DependencyInjection");
const router = express_1.default.Router();
// Obtener el controlador desde la inyección de dependencias
const controller = DependencyInjection_1.di.getGamificacionController();
// POST /api/gamificacion/logros/desbloquear
router.post('/logros/desbloquear', (req, res) => controller.desbloquear(req, res));
// GET /api/gamificacion/logros
router.get('/logros', (req, res) => controller.listarPorUsuario(req, res));
// GET /api/gamificacion/logros
router.get('/logro', (req, res) => controller.listarLogros(req, res));
exports.default = router;
//# sourceMappingURL=GamificacionRouter.js.map