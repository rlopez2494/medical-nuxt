import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  try {
    const authStore = useAuthStore();
    const currentSession = await authStore.getCurrentSession();
    if (!currentSession?.user && to.path !== "/") {
      return navigateTo("/");
    }

    return;
  } catch (error) {
    console.log(error)
    throw error;
  }
});