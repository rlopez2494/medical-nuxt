export default interface AuthenticationGateway {
  // 
  getCurrentUser(): Promise<any>;
  getCurrentSession(): Promise<any>;

  // 
  signUpWithEmailAndPassword({ email, password }: { email: string; password: string }): Promise<any>;
  signInWithEmailAndPassword({ email, password }: { email: string; password: string }): Promise<any>

  // 
  logout(): Promise<void>;
}