import { Request, Response } from "express";
import { GamificacionApplicationService } from "../../../application/services/GamificacionApplicationService";
export declare class GamificacionController {
    private readonly gamificacionService;
    constructor(gamificacionService: GamificacionApplicationService);
    desbloquear(req: Request, res: Response): Promise<void>;
    listarPorUsuario(req: Request, res: Response): Promise<void>;
    listarLogros(_: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=GamificacionController.d.ts.map