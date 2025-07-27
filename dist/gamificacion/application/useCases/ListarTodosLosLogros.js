"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarTodosLosLogros = void 0;
class ListarTodosLosLogros {
    constructor(logroRepo) {
        this.logroRepo = logroRepo;
    }
    async execute() {
        return this.logroRepo.findAll();
    }
}
exports.ListarTodosLosLogros = ListarTodosLosLogros;
//# sourceMappingURL=ListarTodosLosLogros.js.map