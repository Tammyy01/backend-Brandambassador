import express from 'express';
import { LogoutController } from '../controllers/logoutController';

const router = express.Router();

// Logout routes
router.post('/logout', LogoutController.logout);
router.post('/logout/all', LogoutController.logoutAllDevices);

export default router;