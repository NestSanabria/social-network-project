// Importaciones
import { Router } from "express";
import { testPublication } from "../controllers/publications.js";

const router = Router();

// Definir las rutas
router.get('/test-publication', testPublication);

// Exportar el Router
export default router;