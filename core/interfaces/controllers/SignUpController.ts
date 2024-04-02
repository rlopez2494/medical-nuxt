// Use-cases
import SignUpWithEmailAndPassword from "@/core/use-cases/signUp/signUpWithEmailAndPassword";

// Data Transfer Objects
import type EmailAndPasswordDTO from "@/core/data-transfer-objects/login/EmailAndPasswordDTO";

// Dependencies interface
interface UseCaseDependencies {
  signUpWithEmailAndPasswordUseCase: SignUpWithEmailAndPassword;
}

export default class SignUpController {
  private signUpWithEmailAndPasswordUseCase: SignUpWithEmailAndPassword;

  constructor(dependencies: UseCaseDependencies) {
    this.signUpWithEmailAndPasswordUseCase = dependencies.signUpWithEmailAndPasswordUseCase;
  }

  async signUpWithEmailAndPassword(data: EmailAndPasswordDTO) {
    return await this.signUpWithEmailAndPasswordUseCase.execute({ data });
  }
}