import { Request, Response } from "express";
import { DesbloquearLogro } from "../../../application/useCases/DesbloquearLogro";
import { ListarLogrosDeUsuario } from "../../../application/useCases/ListarLogrosDeUsuario";

export class GamificacionController {
  constructor(
    private readonly desbloquearLogro: DesbloquearLogro,
    private readonly listarLogrosDeUsuario: ListarLogrosDeUsuario
  ) {}

  // POST /api/gamificacion/logros/desbloquear
  async desbloquear(req: Request, res: Response): Promise<void> {
    try {
      const idUsuario = Number(req.user?.id);          // ← viene del JWT
      const idLogro   = Number(req.body.idLogro);  // ← solo recibimos idLogro

      if (!idUsuario || isNaN(idLogro)) {
        res
          .status(400)
          .json({ error: "Token sin id o idLogro inválido" });
        return;
      }

      await this.desbloquearLogro.execute(idUsuario, idLogro);
      res.status(201).json({ message: "Logro desbloqueado con éxito" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // GET /api/gamificacion/logros
  async listarPorUsuario(req: Request, res: Response): Promise<void> {
    try {
     const idUsuario = Number(req.user?.id);
     
      if (!idUsuario) {
        res.status(400).json({ error: "Token sin idUsuario" });
        return;
      }

      const logros = await this.listarLogrosDeUsuario.execute(idUsuario);
      res.status(200).json(logros);
    } catch (error: any) {
      res.status(500).json({ error: "Error al obtener logros del usuario" });
    }
  }
}
