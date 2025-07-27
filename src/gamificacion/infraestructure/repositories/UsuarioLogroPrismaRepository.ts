import { PrismaClient } from '@prisma/client';
import { UsuarioLogro } from '../../domain/entities/UsuarioLogro';
import { UsuarioLogroRepository } from '../../domain/repositories/UsuarioLogroRepository';
import { UsuarioLogroFactory } from '../../domain/factories/UsuarioLogroFactory';
import { UsuarioId } from '../../domain/valueObjects/UsuarioId';
import { LogroId } from '../../domain/valueObjects/LogroId';
import { UsuarioAggregate } from '../../domain/aggregates/UsuarioAggregate';

export class UsuarioLogroPrismaRepository implements UsuarioLogroRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async save(usuarioLogro: UsuarioLogro): Promise<void> {
    await this.prisma.usuarioLogro.create({
      data: {
        idUsuario: usuarioLogro.idUsuario.getValue(),
        idLogro: usuarioLogro.idLogro.getValue(),
        idRango: usuarioLogro.idRango.getValue(), 
        fechaObtenido: usuarioLogro.fechaObtenido,
      },
    });
  }

  async findByUsuario(idUsuario: UsuarioId): Promise<UsuarioLogro[]> {
    const dbResults = await this.prisma.usuarioLogro.findMany({
      where: { idUsuario: idUsuario.getValue() },
    });

    return dbResults.map((ul) =>
      UsuarioLogroFactory.reconstruir(
        ul.idUsuario,
        ul.idLogro,
        ul.idRango || 0, 
        ul.fechaObtenido
      )
    );
  }

  async exists(idUsuario: UsuarioId, idLogro: LogroId): Promise<boolean> {
    const count = await this.prisma.usuarioLogro.count({
      where: {
        idUsuario: idUsuario.getValue(),
        idLogro: idLogro.getValue(),
      },
    });

    return count > 0;
  }

  async findUsuarioAggregate(_idUsuario: UsuarioId): Promise<UsuarioAggregate | null> {

    return null;
  }

  async saveUsuarioAggregate(usuarioAggregate: UsuarioAggregate): Promise<void> {
  console.log('Guardando aggregate del usuario:', usuarioAggregate.id.getValue());

  for (const logro of usuarioAggregate.logrosObtenidos) {
    const existe = await this.exists(logro.idUsuario, logro.idLogro);
    if (!existe) {
      await this.save(logro);
    }
  }
}

}
