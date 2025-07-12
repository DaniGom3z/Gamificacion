export class LogroId {
  private constructor(private readonly value: number) {}

  static create(value: number): LogroId {
    if (!value || value <= 0) {
      throw new Error('El ID del logro debe ser un número positivo');
    }
    return new LogroId(value);
  }

  getValue(): number {
    return this.value;
  }

  equals(other: LogroId): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value.toString();
  }
} 