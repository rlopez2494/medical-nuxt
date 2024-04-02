
import SignUp from "@/core/entities/SignUp";
import type EmailAndPasswordDTO from "~/core/data-transfer-objects/login/EmailAndPasswordDTO";
import type AuthenticationGateway from "@/core/interfaces/gateways/AuthenticationGateway";

export default class SignUpWithEmailAndPassword {
  private authenticationGateway: AuthenticationGateway;

  constructor({ authenticationGateway }: { authenticationGateway: AuthenticationGateway }) {
    this.authenticationGateway = authenticationGateway;
  }

  async execute({ data }: { data: EmailAndPasswordDTO }) {
    try {
      const signUpInstance = new SignUp(data);
      const validationErrors = signUpInstance.validationErrors({ mode: "emailAndPassword" });
      if (validationErrors) {
        console.log(validationErrors);
        throw new Error('Invalid data');
      }

      const signUpResponse = await this.authenticationGateway.signUpWithEmailAndPassword(data);
      const { user, session } = signUpResponse;
      return { user, session };
    } catch (error) {
      throw new Error(error as any);
    }
  }
}