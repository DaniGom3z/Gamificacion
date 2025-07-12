import express from 'express';
import { di } from '../../config/DependencyInjection';

const router = express.Router();

// Obtener el controlador desde la inyección de dependencias
const controller = di.getGamificacionController();

// POST /api/gamificacion/logros/desbloquear
router.post('/logros/desbloquear', (req, res) =>
  controller.desbloquear(req, res)
);

// GET /api/gamificacion/logros
router.get('/logros', (req, res) =>
  controller.listarPorUsuario(req, res)
);

export default router;
