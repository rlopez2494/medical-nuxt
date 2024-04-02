import type AuthenticationGateway from "~/core/interfaces/gateways/AuthenticationGateway";
export default class GetCurrentUser {
  private authenticationGateway: AuthenticationGateway;

  constructor({ authenticationGateway }: { authenticationGateway: AuthenticationGateway }) {
    this.authenticationGateway = authenticationGateway;
  }

  async execute() {
    try {
      const user = await this.authenticationGateway.getCurrentUser();
      return user;
    } catch (error) {
      throw error;
    }
  }
}