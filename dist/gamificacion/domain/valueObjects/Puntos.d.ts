export declare class Puntos {
    private readonly value;
    private constructor();
    static create(value: number): Puntos;
    getValue(): number;
    add(other: Puntos): Puntos;
    subtract(other: Puntos): Puntos;
    equals(other: Puntos): boolean;
    isGreaterThan(other: Puntos): boolean;
    isLessThan(other: Puntos): boolean;
    toString(): string;
}
//# sourceMappingURL=Puntos.d.ts.map