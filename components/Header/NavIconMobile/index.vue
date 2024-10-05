<script setup lang="ts">
import Sandwich from './Sandwich/index.vue'

defineProps({
  showClose: Boolean,
})
defineEmits(['toggle'])
</script>
<template>
  <button
    :class="{ close: showClose }" 
    aria-label="Menu"
    aria-controls="navigation"
    :aria-expanded="showClose"
    @click="$emit('toggle')"
  >
    <Sandwich show-close="{showClose}" />
  </button>
</template>

<style scoped lang="scss">
button {
  display: block;
  position: absolute;
  z-index: 1;
  top: 15px;
  right: 10px;
  background: none;
  border: none;
  width: 3rem;
  height: 2.8rem;
  margin: 0;

  @media (min-width: 768px) {
    display: none;
  }

  .close {
    position: fixed;
  }
}

</style>