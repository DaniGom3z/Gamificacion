export class LogroNombre {
  private constructor(private readonly value: string) {}

  static create(value: string): LogroNombre {
    if (!value || !value.trim()) {
      throw new Error('El nombre del logro es obligatorio');
    }
    
    const trimmedValue = value.trim();
    if (trimmedValue.length < 3) {
      throw new Error('El nombre del logro debe tener al menos 3 caracteres');
    }
    
    if (trimmedValue.length > 255) {
      throw new Error('El nombre del logro no puede exceder 255 caracteres');
    }

    return new LogroNombre(trimmedValue);
  }

  getValue(): string {
    return this.value;
  }

  equals(other: LogroNombre): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
} 