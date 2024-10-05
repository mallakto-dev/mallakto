<script lang="ts" setup>

defineProps({
    legend: {type: String, default: ''},
    id: {type: String, default: ''},
});

</script>

<template>
    <fieldset :aria-labelledby="id">
        <legend :id="id">{{ legend }}</legend>
        <slot />
    </fieldset>
</template>


<style lang="scss">

fieldset {
  display: flex;
  flex-direction: column;
  border: none;
  width: 100%;
  margin: 1rem auto;
  padding-bottom: 1rem;
  border-bottom: 1px solid #808080b3;

  @media (min-width: 500px) {
    width: 60%;
  }
};

legend {
  font-size: 1.4rem;
};

</style>