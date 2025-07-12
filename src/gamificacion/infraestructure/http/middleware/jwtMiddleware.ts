import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  id: string | number;
  email?: string;
}

export function jwtMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ error: "No token" });
    return;
  }

  const token = authHeader.split(" ")[1];
  const secret = process.env.JWT_SECRET;
  
  if (!secret) {
    res.status(500).json({ error: "JWT_SECRET no definido en variables de entorno" });
    return;
  }

  try {
    // @ts-ignore
    const payload = jwt.verify(token, secret) as unknown as JwtPayload;
    req.user = { id: Number(payload.id) };
    next();
  } catch (err) {
    res.status(401).json({ error: "Token inválido" });
  }
}