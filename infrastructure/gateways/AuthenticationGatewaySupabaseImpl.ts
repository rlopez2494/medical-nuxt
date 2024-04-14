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

  async getCurrentSession() {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        throw error;
      }

      return session;
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
        console.log("The error: ", { ...error });
        throw error;
      }

      const { access_token, refresh_token } = signUpResponse.session as any; // some typescript caveats I need to fix
      await supabase.auth.setSession({ access_token, refresh_token })
      const { user, session } = signUpResponse;
      return { user, session };
    } catch (error) {
      throw error;
    }
  }

  // 
  async logout(): Promise<void> {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      throw error;
    }
  }
}