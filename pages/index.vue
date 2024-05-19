<template>
  <div
    id="home"
    class="header flex h-full w-full flex-col items-center justify-center gap-10 bg-primary p-12 text-white"
  >
    <div class="flex text-lg">This is a boilerplate for Nuxtjs</div>
    <div class="flex">
      <NuxtLink
        class="flex w-auto flex-row gap-3"
        href="https://github.com/Ar-mane/nuxt-boilerplate"
        ><Icon name="github" stroke="white" height="24px" />
        contribute ?
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: () => 'Hello Armane'
});
</script>

<style lang="scss" scoped>
@use '$/breakpoints.scss';

#home {
  .header {
    /* example of style */
    margin-bottom: 24px;
  }
}

@include breakpoints.mobile() {
  /* example of mobile style */
  #home {
    .header {
      margin-bottom: 24px;
    }
  }
}
</style>
