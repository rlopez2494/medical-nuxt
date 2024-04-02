import type AuthenticationGateway from "@/core/interfaces/gateways/AuthenticationGateway";
import supabase from "@/config/supabase";

export default class AuthGatewaySupabaseImpl implements AuthenticationGateway {
  async getCurrentUser() {
    try {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        throw error;
      }

      const { user } = data;
      return user;
    } catch (error) {
      throw error;
    }
  }

  async signUpWithEmailAndPassword({ email, password }: { email: string; password: string }) {

    try {
      const { data: signUpResponse, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        throw error;
      }

      const { user, session } = signUpResponse;
      return { user, session };
    } catch (error) {
      throw error;
    }
  }
}