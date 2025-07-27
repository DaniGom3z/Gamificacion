// RangoRepository.ts
import { PrismaClient } from '@prisma/client';

export class RangoRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async obtenerRangoPorPuntos(puntosTotales: number) {
      console.log('aqui esta el problema');

    return this.prisma.rango.findFirst({
      where: {
        puntuacionMinima: {
          lte: puntosTotales
        }
      },
      orderBy: {
        puntuacionMinima: 'desc'
      }
    });
    
  }
}
