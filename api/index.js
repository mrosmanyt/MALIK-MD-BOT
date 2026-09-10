/**
 * Vercel serverless entry — reuses the Express app from index.js.
 * Admin UI + health API only by default (Baileys skipped when VERCEL is set).
 */
import app from '../index.js';

export default app;
