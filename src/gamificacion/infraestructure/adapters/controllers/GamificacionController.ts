import { Request, Response } from 'express';
import { DesbloquearLogro } from '../../../application/useCases/DesbloquearLogro'; 
import { ListarLogrosDeUsuario } from '../../../application/useCases/ListarLogrosDeUsuario'; 

export class GamificacionController {
  constructor(
    private readonly desbloquearLogro: DesbloquearLogro,
    private readonly listarLogrosDeUsuario: ListarLogrosDeUsuario
  ) {}

  async desbloquear(req: Request, res: Response): Promise<void> {
    try {
      const idUsuario = Number(req.body.idUsuario);
      const idLogro = Number(req.body.idLogro);

      if (isNaN(idUsuario) || isNaN(idLogro)) {
        res.status(400).json({ error: 'idUsuario y idLogro deben ser numéricos' });
        return;
      }

      await this.desbloquearLogro.execute(idUsuario, idLogro);

      res.status(201).json({ message: 'Logro desbloqueado con éxito' });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async listarPorUsuario(req: Request, res: Response): Promise<void> {
    try {
      const idUsuario = Number(req.params.idUsuario);

      if (isNaN(idUsuario)) {
        res.status(400).json({ error: 'idUsuario debe ser numérico' });
        return;
      }

      const logros = await this.listarLogrosDeUsuario.execute(idUsuario);

      res.status(200).json(logros);
    } catch (error: any) {
      res.status(500).json({ error: 'Error al obtener logros del usuario' });
    }
  }
}
