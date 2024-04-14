import type AuthenticationGateway from "@/core/interfaces/gateways/AuthenticationGateway";

export default class GetCurrentSession {
  // Dependencies
  private authenticationGateway: AuthenticationGateway;

  constructor({ authenticationGateway }: { authenticationGateway: AuthenticationGateway }) {
    this.authenticationGateway = authenticationGateway;
  }

  async execute() {
    return await this.authenticationGateway.getCurrentSession();
  }
}