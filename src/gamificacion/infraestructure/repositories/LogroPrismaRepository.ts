import { Logro } from '../../domain/entities/Logro';
import { LogroRepository } from '../../domain/repositories/LogroRepository';
import { LogroFactory } from '../../domain/factories/LogroFactory';
import { LogroId } from '../../domain/valueObjects/LogroId';
import { PrismaClient } from '@prisma/client';

export class LogroPrismaRepository implements LogroRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findById(id: LogroId): Promise<Logro | null> {
    const logroDb = await this.prisma.logro.findUnique({
      where: { id: id.getValue() },
    });

    if (!logroDb) {
      return null;
    }

    return LogroFactory.reconstruir(
      logroDb.id,
      logroDb.nombre,
      logroDb.descripcion ?? '',
      logroDb.puntosOtorgados,
      logroDb.tipo
    );
  }

  async findAll(): Promise<Logro[]> {
    const logrosDb = await this.prisma.logro.findMany();

    return logrosDb.map((l) =>
      LogroFactory.reconstruir(
        l.id,
        l.nombre,
        l.descripcion ?? '',
        l.puntosOtorgados,
        l.tipo
      )
    );
  }

  async findByTipo(tipo: string): Promise<Logro[]> {
    const logrosDb = await this.prisma.logro.findMany({
      where: { tipo }
    });

    return logrosDb.map((l) =>
      LogroFactory.reconstruir(
        l.id,
        l.nombre,
        l.descripcion ?? '',
        l.puntosOtorgados,
        l.tipo
      )
    );
  }
}
