export interface DesbloquearLogroDto {
  usuarioId: number;
  logroId: number;
}

export interface DesbloquearLogroResponseDto {
  success: boolean;
  message: string;
  puntosOtorgados?: number;
  puntosTotales?: number;
} 