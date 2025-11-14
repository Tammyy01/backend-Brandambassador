import { Request, Response } from 'express';
import {
  sendSuccessResponse,
  sendServerErrorResponse
} from '../helpers/responses/httpResponses';

export class LogoutController {
  // Handle user logout
  static async logout(req: Request, res: Response): Promise<Response> {
    try {
      const { userId, applicationId } = req.body;

      console.log(`🚪 User logout requested - User: ${userId}, Application: ${applicationId}`);

      // In a real system, you might:
      // 1. Invalidate JWT tokens
      // 2. Clear session data from database
      // 3. Log logout activity for security
      // 4. Clear any active connections

      // For now, we'll just log the logout and return success
      // Since we're using OTP-based auth without persistent sessions,
      // the frontend just needs to clear local storage

      console.log(`✅ User logged out successfully - User: ${userId}`);

      return sendSuccessResponse(res, 'Logout successful', {
        logoutSuccess: true,
        timestamp: new Date().toISOString()
      });
    } catch (error: any) {
      console.error('❌ Logout error:', error);
      return sendServerErrorResponse(res, 'Failed to process logout: ' + error.message);
    }
  }

  // Optional: Logout from all devices (future enhancement)
  static async logoutAllDevices(req: Request, res: Response): Promise<Response> {
    try {
      const { userId } = req.body;

      console.log(`🚪 Logout from all devices requested for user: ${userId}`);

      // This would invalidate all active sessions/tokens for the user
      // Implementation depends on your session/token strategy

      return sendSuccessResponse(res, 'Logged out from all devices', {
        logoutAllSuccess: true,
        timestamp: new Date().toISOString()
      });
    } catch (error: any) {
      console.error('❌ Logout all devices error:', error);
      return sendServerErrorResponse(res, 'Failed to logout from all devices: ' + error.message);
    }
  }
}