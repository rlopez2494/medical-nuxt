import AuthController from "@/core/interfaces/controllers/AuthController";
import GetCurrentUser from "@/core/use-cases/auth/getCurrentUser";
import AuthGatewaySupabaseImpl from "@/infrastructure/gateways/AuthenticationGatewaySupabaseImpl";

const dependencies = {
  getCurrentUserUseCase: new GetCurrentUser({
    authenticationGateway: new AuthGatewaySupabaseImpl(),
  })
}

export default new AuthController(dependencies);