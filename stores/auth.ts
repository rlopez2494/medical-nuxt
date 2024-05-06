// Domain
import SignUp from "@/core/entities/SignUp";
import AuthController from "@/infrastructure/controllers/AuthControllerNuxtImpl";

// External
import { defineStore } from "pinia";
import type { User } from "@supabase/supabase-js";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: null,
    currentUser: null as User | null,
    expiresIn: null,
  }),
  actions: {
    async signUpWithEmailAndPassword({ email, password }: any) {
      try {
        const signUpInstance = new SignUp({ email, password });
        const validationErrors = signUpInstance.validationErrors();
        if (validationErrors) {
          console.log("Invalid Data: ", validationErrors);
          return;
        }

        await AuthController.signUpWithEmailAndPassword({ email, password });
      } catch (error) {
        throw error;
      }
    },
    async getCurrentUser() {
      try {
        const user = await AuthController.getCurrentUser();
        this.currentUser = user;
        return user;
      } catch (error) {
        throw error;
      }
    },
    async getCurrentSession() {
      try {
        const session = await AuthController.getCurrentSession();
        this.currentUser = session?.user;
        return session;
      } catch (error) {
        throw error;
      }
    },
    async logout() {
      try {
        await AuthController.logout();
        this.currentUser = null;
        navigateTo("/");
      } catch (error) {
        throw error;
      }
    }
  }

})