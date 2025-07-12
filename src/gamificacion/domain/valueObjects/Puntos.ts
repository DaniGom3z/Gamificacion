export class Puntos {
  private constructor(private readonly value: number) {}

  static create(value: number): Puntos {
    if (value < 0) {
      throw new Error('Los puntos no pueden ser negativos');
    }
    
    if (value > 10000) {
      throw new Error('Los puntos no pueden exceder 10000');
    }

    return new Puntos(value);
  }

  getValue(): number {
    return this.value;
  }

  add(other: Puntos): Puntos {
    return Puntos.create(this.value + other.value);
  }

  subtract(other: Puntos): Puntos {
    const result = this.value - other.value;
    if (result < 0) {
      throw new Error('No se pueden restar más puntos de los disponibles');
    }
    return Puntos.create(result);
  }

  equals(other: Puntos): boolean {
    return this.value === other.value;
  }

  isGreaterThan(other: Puntos): boolean {
    return this.value > other.value;
  }

  isLessThan(other: Puntos): boolean {
    return this.value < other.value;
  }

  toString(): string {
    return this.value.toString();
  }
} 