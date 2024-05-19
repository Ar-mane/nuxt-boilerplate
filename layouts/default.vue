<template>
  <main class="flex">
    <slot />

    <SpeedInsights />
  </main>
</template>

<script lang="ts" setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
</script>
