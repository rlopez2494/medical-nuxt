
import SignIn from "@/core/entities/SignUp";
import type EmailAndPasswordDTO from "~/core/data-transfer-objects/login/EmailAndPasswordDTO";
import type AuthenticationGateway from "@/core/interfaces/gateways/AuthenticationGateway";

export default class SignInWithEmailAndPassword {
  private authenticationGateway: AuthenticationGateway;

  constructor({ authenticationGateway }: { authenticationGateway: AuthenticationGateway }) {
    this.authenticationGateway = authenticationGateway;
  }

  async execute({ data }: { data: EmailAndPasswordDTO }) {
    try {
      const signInInstance = new SignIn(data);
      const validationErrors = signInInstance.validationErrors({ mode: "emailAndPassword" });
      if (validationErrors) {
        throw new Error('Invalid data');
      }

      const signInResponse = await this.authenticationGateway.signInWithEmailAndPassword(data);
      const { user, session } = signInResponse;
      return { user, session };
    } catch (error) {
      throw new Error(error as any);
    }
  }
}