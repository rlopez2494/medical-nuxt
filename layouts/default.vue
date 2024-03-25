<template>
  <div class="flex flex-col h-screen overflow-hidden relative">
    <BaseHeader />

    <main class="flex-grow overflow-y-scroll">
      <slot />
    </main>

    <BaseFooter />
  </div>
</template>