import SignUpWithEmailAndPassword from "@/core/use-cases/signUp/signUpWithEmailAndPassword";

// Gateways
import AuthGatewaySupabaseImpl from "@/infrastructure/gateways/AuthenticationGatewaySupabaseImpl";

import SignUpController from "@/core/interfaces/controllers/SignUpController";

const dependencies = {
  signUpWithEmailAndPasswordUseCase: new SignUpWithEmailAndPassword({
    authenticationGateway: new AuthGatewaySupabaseImpl(),
  })
}

export default new SignUpController(dependencies);