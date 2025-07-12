export class UsuarioId {
  private constructor(private readonly value: number) {}

  static create(value: number): UsuarioId {
    if (!value || value <= 0) {
      throw new Error('El ID del usuario debe ser un número positivo');
    }
    return new UsuarioId(value);
  }

  getValue(): number {
    return this.value;
  }

  equals(other: UsuarioId): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value.toString();
  }
} 