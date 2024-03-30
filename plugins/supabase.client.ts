import supabase from '@/config/supabase';

export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      supabase,
    },
  };
});
