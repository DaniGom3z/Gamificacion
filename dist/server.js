"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const client_1 = __importDefault(require("./gamificacion/infraestructure/prisma/client"));
const GamificacionRouter_1 = __importDefault(require("./gamificacion/infraestructure/adapters/controllers/GamificacionRouter"));
const jwtMiddleware_1 = require("./gamificacion/infraestructure/http/middleware/jwtMiddleware");
const logroConsumer_1 = require("./gamificacion/infraestructure/consumers/logroConsumer");
// Inicializar Express
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
(0, logroConsumer_1.iniciarConsumidorLogros)().catch(console.error);
// Middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
// Rutas
app.use('/api/gamificacion', jwtMiddleware_1.jwtMiddleware, GamificacionRouter_1.default);
// Ruta de salud
app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'OK' });
});
// Error handler
app.use((err, _req, res, _next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});
// Shutdown limpio
process.on('SIGINT', async () => {
    console.log('\nGracefully shutting down...');
    await client_1.default.$disconnect();
    process.exit(0);
});
process.on('SIGTERM', async () => {
    console.log('\nGracefully shutting down...');
    await client_1.default.$disconnect();
    process.exit(0);
});
// Start server
app.listen(port, () => {
    console.log(`Gamificación service running on port ${port}`);
});
//# sourceMappingURL=server.js.map