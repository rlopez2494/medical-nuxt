import type AuthenticationGateway from "@/core/interfaces/gateways/AuthenticationGateway";

export default class Logout {
  private authenticationGateway: AuthenticationGateway;
  constructor({ authenticationGateway }: { authenticationGateway: AuthenticationGateway }) {
    this.authenticationGateway = authenticationGateway;
  }

  async execute() {
    try {
      await this.authenticationGateway.logout();
    } catch (error) {
      throw error;
    }
  }
}