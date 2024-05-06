
// Use-cases
import GetCurrentUser from "@/core/use-cases/auth/getCurrentUser";
import GetCurrentSession from "@/core/use-cases/auth/getCurrentSession";
import Logout from "@/core/use-cases/logout";

// Controllers - Implementations
import AuthController from "@/core/interfaces/controllers/AuthController";
import AuthGatewaySupabaseImpl from "@/infrastructure/gateways/AuthenticationGatewaySupabaseImpl";
import SignUpWithEmailAndPassword from "~/core/use-cases/signUp/signUpWithEmailAndPassword";

const dependencies = {
  signUpWithEmailAndPasswordUseCase: new SignUpWithEmailAndPassword({
    authenticationGateway: new AuthGatewaySupabaseImpl(),
  }),
  getCurrentUserUseCase: new GetCurrentUser({
    authenticationGateway: new AuthGatewaySupabaseImpl(),
  }),
  logoutUseCase: new Logout({
    authenticationGateway: new AuthGatewaySupabaseImpl(),
  }),
  getCurrentSessionUseCase: new GetCurrentSession({
    authenticationGateway: new AuthGatewaySupabaseImpl(),
  }),
}

export default new AuthController(dependencies);