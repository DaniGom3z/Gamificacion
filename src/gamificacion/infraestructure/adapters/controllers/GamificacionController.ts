import { Request, Response } from "express";
import { GamificacionApplicationService } from "../../../application/services/GamificacionApplicationService";
import { DesbloquearLogroDto } from "../../../application/dtos/DesbloquearLogroDto";

export class GamificacionController {
  constructor(
    private readonly gamificacionService: GamificacionApplicationService
  ) {}

  

  // POST /api/gamificacion/logros/desbloquear
  async desbloquear(req: Request, res: Response): Promise<void> {
    try {
      const idUsuario = Number(req.user?.id);
      const idLogro = Number(req.body.idLogro);

      if (!idUsuario || isNaN(idLogro)) {
        res.status(400).json({ 
          success: false,
          error: "Token sin id o idLogro inválido" 
        });
        return;
      }

      const dto: DesbloquearLogroDto = {
        idUsuario: idUsuario,
        logroId: idLogro
      };

      const resultado = await this.gamificacionService.desbloquearLogro(dto);
      
      if (resultado.success) {
        res.status(201).json(resultado);
      } else {
        res.status(400).json(resultado);
      }
    } catch (error: any) {
      res.status(500).json({ 
        success: false,
        error: error.message 
      });
    }
  }

  // GET /api/gamificacion/logros
  async listarPorUsuario(req: Request, res: Response): Promise<void> {
    try {
      const idUsuario = Number(req.user?.id);
      
      if (!idUsuario) {
        res.status(400).json({ 
          success: false,
          error: "Token sin idUsuario" 
        });
        return;
      }

      const gamificacion = await this.gamificacionService.obtenerGamificacionUsuario(idUsuario);
      res.status(200).json({
        success: true,
        data: gamificacion
      });
    } catch (error: any) {
      res.status(500).json({ 
        success: false,
        error: "Error al obtener logros del usuario" 
      });
    }
  }
}
