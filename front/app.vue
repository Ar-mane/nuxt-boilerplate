<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <DevOnly>
      <DevelopmentCheckerRuntime />
    </DevOnly>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: '%s | Armane.dev'
});
</script>
