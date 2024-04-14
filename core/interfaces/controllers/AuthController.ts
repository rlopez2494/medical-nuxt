import type GetCurrentUser from "@/core/use-cases/auth/getCurrentUser";
import type GetCurrentSession from "@/core/use-cases/auth/getCurrentSession";
import type Logout from "@/core/use-cases/logout";

interface Dependencies {
  getCurrentUserUseCase: GetCurrentUser
  getCurrentSessionUseCase: GetCurrentSession

  // 
  logoutUseCase: Logout
}

export default class AuthController {
  // Use-Cases
  private getCurrentUserUseCase: GetCurrentUser;
  private getCurrentSessionUseCase: GetCurrentSession;
  private logoutUseCase: Logout;

  constructor({ getCurrentUserUseCase, logoutUseCase, getCurrentSessionUseCase }: Dependencies) {
    this.getCurrentUserUseCase = getCurrentUserUseCase;
    this.logoutUseCase = logoutUseCase;
    this.getCurrentSessionUseCase = getCurrentSessionUseCase;
  }

  // 
  async getCurrentUser() {
    return await this.getCurrentUserUseCase.execute();
  }
  async getCurrentSession() {
    return await this.getCurrentSessionUseCase.execute()
  }

  // 
  async logout() {
    return await this.logoutUseCase.execute();
  }
}