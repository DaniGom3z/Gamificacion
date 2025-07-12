"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = exports.di = exports.DependencyInjection = exports.InMemoryEventBus = exports.UsuarioLogroPrismaRepository = exports.LogroPrismaRepository = exports.GamificacionRouter = exports.GamificacionController = void 0;
// Controllers
var GamificacionController_1 = require("./adapters/controllers/GamificacionController");
Object.defineProperty(exports, "GamificacionController", { enumerable: true, get: function () { return GamificacionController_1.GamificacionController; } });
var GamificacionRouter_1 = require("./adapters/controllers/GamificacionRouter");
Object.defineProperty(exports, "GamificacionRouter", { enumerable: true, get: function () { return __importDefault(GamificacionRouter_1).default; } });
// Repositories
var LogroPrismaRepository_1 = require("./repositories/LogroPrismaRepository");
Object.defineProperty(exports, "LogroPrismaRepository", { enumerable: true, get: function () { return LogroPrismaRepository_1.LogroPrismaRepository; } });
var UsuarioLogroPrismaRepository_1 = require("./repositories/UsuarioLogroPrismaRepository");
Object.defineProperty(exports, "UsuarioLogroPrismaRepository", { enumerable: true, get: function () { return UsuarioLogroPrismaRepository_1.UsuarioLogroPrismaRepository; } });
// Events
var InMemoryEventBus_1 = require("./events/InMemoryEventBus");
Object.defineProperty(exports, "InMemoryEventBus", { enumerable: true, get: function () { return InMemoryEventBus_1.InMemoryEventBus; } });
// Configuration
var DependencyInjection_1 = require("./config/DependencyInjection");
Object.defineProperty(exports, "DependencyInjection", { enumerable: true, get: function () { return DependencyInjection_1.DependencyInjection; } });
Object.defineProperty(exports, "di", { enumerable: true, get: function () { return DependencyInjection_1.di; } });
// Prisma
var client_1 = require("./prisma/client");
Object.defineProperty(exports, "prisma", { enumerable: true, get: function () { return __importDefault(client_1).default; } });
//# sourceMappingURL=index.js.map