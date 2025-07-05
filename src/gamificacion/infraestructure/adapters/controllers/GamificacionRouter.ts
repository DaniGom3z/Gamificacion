import express from 'express';

import prisma from '../../prisma/client';
import { LogroPrismaRepository } from '../../repositories/LogroPrismaRepository';
import { UsuarioLogroPrismaRepository } from '../../repositories/UsuarioLogroPrismaRepository';
import { DesbloquearLogro } from '../../../application/useCases/DesbloquearLogro';
import { ListarLogrosDeUsuario } from '../../../application/useCases/ListarLogrosDeUsuario';
import { GamificacionController } from './GamificacionController';

const logroRepo          = new LogroPrismaRepository(prisma);
const usuarioLogroRepo   = new UsuarioLogroPrismaRepository(prisma);

const desbloquearUseCase = new DesbloquearLogro(logroRepo, usuarioLogroRepo);
const listarUseCase      = new ListarLogrosDeUsuario(usuarioLogroRepo);

const controller = new GamificacionController(desbloquearUseCase, listarUseCase);
const router = express.Router();

// ← protege la ruta con JWT
router.post('/logros/desbloquear',(req, res) =>
  controller.desbloquear(req, res)
);

// ← ahora sin :idUsuario, se usará req.user.id
router.get('/logros', (req, res) =>
  controller.listarPorUsuario(req, res)
);

export default router;
