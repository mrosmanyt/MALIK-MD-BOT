/**
 * MALIK-MD admin panel public API.
 *
 *   import { mountAdmin, upsertUser, registerAdminRoute } from './lib/admin/index.js';
 */
export { mountAdmin, registerAdminRoute } from './routes.js';
export {
  upsertUser,
  listUsers,
  countUsers,
  getUsersStorageMode,
} from './users.js';
export {
  requireAdmin,
  isAdminConfigured,
  validateCredentials,
} from './auth.js';
