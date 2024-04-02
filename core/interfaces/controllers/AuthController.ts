import type GetCurrentUser from "@/core/use-cases/auth/getCurrentUser";

export default class AuthController {
  // Use-Cases
  private getCurrentUserUseCase: GetCurrentUser;

  constructor({ getCurrentUserUseCase }: { getCurrentUserUseCase: GetCurrentUser }) {
    this.getCurrentUserUseCase = getCurrentUserUseCase;
  }

  async getCurrentUser() {
    return await this.getCurrentUserUseCase.execute();
  }
}