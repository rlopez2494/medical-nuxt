import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

export default defineNuxtRouteMiddleware(async () => {
  const currentUser = await authStore.getCurrentUser();
  if (!currentUser) {
    return navigateTo("/");
  }
})