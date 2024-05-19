<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    v-if="name"
    class="icon"
    :class="{ fill, stroke, width, height }"
    :style="`--i-fill: ${fill}; --i-stroke: ${stroke}; --i-width: ${width}; --i-height: ${height};`"
    @click="emit('click', $event)"
    v-html="icon"
  />
  <!-- eslint-enable vue/no-v-html -->
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string;
  fill?: string;
  stroke?: string;
  height?: string;
  width?: string;
}>();

const emit = defineEmits<(event: 'click', e: MouseEvent) => void>();

const icon = ref<string>('');

async function getIcon() {
  const iconsImport = import.meta.glob('assets/icons/**/**.svg', {
    as: 'raw',
    eager: false
  });
  try {
    const iconImport = iconsImport[`/assets/icons/${props.name}.svg`];
    if (iconImport) {
      icon.value = await iconImport();
    }
  } catch {
    const placeholderImport = iconsImport[`/assets/icons/placeholder.svg`];
    if (placeholderImport) {
      icon.value = await placeholderImport();
    }
  }
}

await getIcon();

watch(() => props.name, getIcon);
</script>

<style lang="scss" scoped>
.icon {
  align-items: center;
  justify-content: center;

  &:deep(svg) {
    vertical-align: baseline !important;
  }

  &.width:deep(svg) {
    width: var(--i-width) !important;
  }

  &.height:deep(svg) {
    height: var(--i-height) !important;
  }

  &.fill:deep(svg) {
    fill: var(--i-fill) !important;

    & > * {
      fill: inherit !important;
    }
  }

  &.stroke:deep(svg) {
    stroke: var(--i-stroke) !important;

    & > * {
      stroke: inherit !important;
    }
  }
}
</style>
