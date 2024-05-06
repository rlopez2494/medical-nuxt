import type GetCurrentUser from "@/core/use-cases/auth/getCurrentUser";
import type GetCurrentSession from "@/core/use-cases/auth/getCurrentSession";
import type Logout from "@/core/use-cases/logout";
import SignUpWithEmailAndPassword from "@/core/use-cases/signUp/signUpWithEmailAndPassword";
import SignInWithEmailAndPassword from "@/core/use-cases/signIn/signInWithEmailAndPassword";
import type EmailAndPasswordDTO from "~/core/data-transfer-objects/login/EmailAndPasswordDTO";


interface Dependencies {
  getCurrentUserUseCase: GetCurrentUser
  getCurrentSessionUseCase: GetCurrentSession

  // 
  logoutUseCase: Logout,
  signUpWithEmailAndPasswordUseCase: SignUpWithEmailAndPassword
}

export default class AuthController {
  // Use-Cases
  private getCurrentUserUseCase: GetCurrentUser;
  private getCurrentSessionUseCase: GetCurrentSession;
  private logoutUseCase: Logout;
  private signUpWithEmailAndPasswordUseCase: SignUpWithEmailAndPassword;
  private signInWithEmailAndPasswordUseCase: SignInWithEmailAndPassword

  constructor({ getCurrentUserUseCase, logoutUseCase, getCurrentSessionUseCase, signUpWithEmailAndPasswordUseCase, signInWithEmailAndPasswordUseCase }: Dependencies) {
    this.getCurrentUserUseCase = getCurrentUserUseCase;
    this.logoutUseCase = logoutUseCase;
    this.signUpWithEmailAndPasswordUseCase = signUpWithEmailAndPasswordUseCase;
    this.getCurrentSessionUseCase = getCurrentSessionUseCase;
    this.signInWithEmailAndPasswordUseCase = signInWithEmailAndPasswordUseCase
  }

  // 
  async getCurrentUser() {
    return await this.getCurrentUserUseCase.execute();
  }
  async getCurrentSession() {
    return await this.getCurrentSessionUseCase.execute()
  }

  // 
  async signUpWithEmailAndPassword(data: EmailAndPasswordDTO) {
    return await this.signUpWithEmailAndPasswordUseCase.execute({ data })
  }
  async signInWithEmailAndPassword(data: EmailAndPasswordDTO) {
    return await this.signInWithEmailAndPasswordUseCase.execute({ data })
  }

  async logout() {
    return await this.logoutUseCase.execute();
  }
}