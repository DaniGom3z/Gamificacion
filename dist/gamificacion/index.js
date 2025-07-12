"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DDD_STRUCTURE = void 0;
// Exportar todo el dominio
__exportStar(require("./domain"), exports);
// Exportar toda la aplicación
__exportStar(require("./application"), exports);
// Exportar toda la infraestructura
__exportStar(require("./infraestructure"), exports);
// Exportar configuración DDD
var DDDConfig_1 = require("./domain/config/DDDConfig");
Object.defineProperty(exports, "DDD_STRUCTURE", { enumerable: true, get: function () { return DDDConfig_1.DDD_STRUCTURE; } });
//# sourceMappingURL=index.js.map