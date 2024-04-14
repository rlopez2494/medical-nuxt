<template>
  <ClientOnly>
    <div class="text-neutral-500 container mx-auto px-4 mt-4">
      <section>
        <h1 class="text-2xl">{{ viewMode }}</h1>
      </section>

      <form v-if="viewMode == 'Sign In'" class="grid grid-cols-1 gap-y-3 mt-2">
        <BaseInput v-model="email" label="Email" type="email" :errors="validationErrors['email']" />
        <BaseInput v-model="password" label="Password" type="password" :errors="validationErrors['password']" />

        <BaseButton class="w-full border-teal-500" @click="signIn({ email, password })">
          Sign In
        </BaseButton>

        <p>Already have an account? <a class="underline text-cyan-500" @click="viewMode = 'Log In'">Log In</a></p>
      </form>

      <form v-else-if="viewMode == 'Log In'" class="grid grid-cols-1 gap-y-3 mt-2">
        <BaseInput v-model="email" label="Email" type="email" :errors="validationErrors['email']" />
        <BaseInput v-model="password" label="Password" type="password" :errors="validationErrors['password']" />

        <BaseButton class="w-full border-teal-500" @click="logIn({ email, password })">
          Log In
        </BaseButton>

        <p>Don't have an account? <a class="underline text-cyan-500" @click="viewMode = 'Sign In'">Sign In</a></p>
      </form>
    </div>
  </ClientOnly>
</template>

<script setup>
import SignUp from "@/core/entities/SignUp";

// Getting auth store
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

// 
const viewMode = ref('Sign In');
const isSubmitted = ref(false);

// 
const email = ref(null);
const password = ref(null);

const validationErrors = computed(() => {
  const loginInstance = new SignUp({ email: email.value, password: password.value });
  return loginInstance.validationErrors() || {};
})

// 
const signIn = async ({ email, password }) => {
  isSubmitted.value = true;

  try {
    await authStore.signUpWithEmailAndPassword({ email, password });
    navigateTo('/appointments');
  } catch (error) {
    throw new Error(error);
  }
}

</script>