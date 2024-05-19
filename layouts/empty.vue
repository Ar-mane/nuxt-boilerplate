<template>
  <main class="main">
    <slot />
  </main>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.main {
  &.bottom {
    margin-bottom: 73px;
  }
}
</style>
