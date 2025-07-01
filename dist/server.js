"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const client_1 = __importDefault(require("../src/gamificacion/infraestructure/prisma/client"));
const GamificacionRouter_1 = __importDefault(require("../src/gamificacion/infraestructure/adapters/controllers/GamificacionRouter"));
// Inicializar Express
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
// Rutas
app.use('/api/gamificacion', GamificacionRouter_1.default);
// Ruta de salud
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});
// Error handler
app.use((err, req, res, _next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});
// Shutdown limpio
process.on('SIGINT', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\nGracefully shutting down...');
    yield client_1.default.$disconnect();
    process.exit(0);
}));
process.on('SIGTERM', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\nGracefully shutting down...');
    yield client_1.default.$disconnect();
    process.exit(0);
}));
// Start server
app.listen(port, () => {
    console.log(`Gamificación service running on port ${port}`);
});
