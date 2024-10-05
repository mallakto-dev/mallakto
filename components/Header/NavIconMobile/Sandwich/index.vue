<script setup lang="ts">
defineProps({
  isClose: Boolean,
})
</script>

<template>
  <div
    class="sandwich" 
    :class="{ close: isClose }"
  />
</template>

<style scoped lang="scss">
.sandiwich {
  cursor: pointer;
  width: 2rem;
  height: 0.4rem;
  background-color: #004530;
  transition: all ease-out 0.3s;
  transform:  none;

  &::before,
  &::after {
    content: "";
    width: 2rem;
    height: 0.4rem;
    background-color: #004530;
    transition: all ease-out 0.3s;
  }

  &::before {
    display: block;
    transform: translate(0,-.7rem);
  }

  &::after {
    transform: translate(0, 0.3rem);
    display: block;
  }

  &.close {
    transform: rotate(45deg) translate(-.1rem,-.4rem);

    &::before {
      transform: rotate(-90deg) translate(0,0);
    }

    &::after {
      display: none;
    }
  }
}
</style>