export class RangoId{
    private constructor(private readonly value: number) {}
    
    static create(value: number): RangoId {
        if (!value || value <= 0) {
        throw new Error('El ID del rango debe ser un número positivo');
        }
        return new RangoId(value);
    }
    
    getValue(): number {
        return this.value;
    }
    
    equals(other: RangoId): boolean {
        return this.value === other.value;
    }
    
    toString(): string {
        return this.value.toString();
    }
}