import { PrismaClient } from '@prisma/client';
import { UsuarioLogro } from '../../domain/entities/UsuarioLogro';
import { UsuarioLogroRepository } from '../../domain/repositories/UsuarioLogroRepository';
import { UsuarioLogroFactory } from '../../domain/factories/UsuarioLogroFactory';

export class UsuarioLogroPrismaRepository implements UsuarioLogroRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async save(usuarioLogro: UsuarioLogro): Promise<void> {
    await this.prisma.usuarioLogro.create({
      data: {
        idUsuario: usuarioLogro.idUsuario,
        idLogro: usuarioLogro.idLogro,
        fechaObtenido: usuarioLogro.fechaObtenido,
      },
    });
  }

  async findByUsuario(idUsuario: number): Promise<UsuarioLogro[]> {
    const dbResults = await this.prisma.usuarioLogro.findMany({
      where: { idUsuario },
    });

    return dbResults.map((ul) =>
      UsuarioLogroFactory.reconstruir(
        ul.idUsuario,
        ul.idLogro,
        ul.fechaObtenido
      )
    );
  }

  async exists(idUsuario: number, idLogro: number): Promise<boolean> {
    const count = await this.prisma.usuarioLogro.count({
      where: {
        idUsuario,
        idLogro,
      },
    });

    return count > 0;
  }
}
