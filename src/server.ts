import dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import  prisma  from './gamificacion/infraestructure/prisma/client';
import gamificacionRouter from './gamificacion/infraestructure/adapters/controllers/GamificacionRouter';
import { jwtMiddleware } from './gamificacion/infraestructure/http/middleware/jwtMiddleware';

// Inicializar Express
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Rutas
app.use('/api/gamificacion', jwtMiddleware,gamificacionRouter);

// Ruta de salud
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK' });
});

// Error handler
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});


// Shutdown limpio
process.on('SIGINT', async () => {
  console.log('\nGracefully shutting down...');
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\nGracefully shutting down...');
  await prisma.$disconnect();
  process.exit(0);
});

// Start server
app.listen(port, () => {
  console.log(`Gamificación service running on port ${port}`);
});
