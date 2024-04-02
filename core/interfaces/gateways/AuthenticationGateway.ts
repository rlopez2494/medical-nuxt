export default interface AuthenticationGateway {
  // 
  getCurrentUser(): Promise<any>;

  // 
  signUpWithEmailAndPassword({ email, password }: { email: string; password: string }): Promise<any>;
}