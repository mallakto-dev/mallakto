<script setup lang="ts">


const props = defineProps<{
    numberOfItems: number,
    isLabelDisplayed: boolean,
    isInline: boolean,
}>()

defineEmits(['increase', 'decrease'])


  const handleChange = (e:Event) => {
    (e.target as HTMLInputElement).value = props.numberOfItems.toString();
  };

</script>

<template>
  <div>
    <p v-if="isLabelDisplayed">
      Количество
    </p>
    <button
      aria-label="Уменьшить количество товара в корзине на один"
      @click="$emit('decrease')"
    >
      −
    </button>
    <input
      type="number"
      :value="numberOfItems"
      aria-label="Количество товара которое будет добавленно в корзину"
      @change="{handleChange}"
    >
    <button
      aria-label="Увеличить количество товара в корзине на один"
      @click="$emit('increase')"
    >
      +
    </button>
  </div>
</template>

  <style scoped lang="scss">

div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .4rem;
}

button {
  width: 2.6rem;
  height: 2.6rem;
  font-size: 1.1rem;
  text-align: center;
}

p {
  line-height: 1;
  margin-right: 1rem;
}

input {
  width: 2.6rem;
  height: 2.6rem;
  font-size: 1.1rem;
  text-align: center;
  line-height: 2;
  margin: 0;
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0;
  }
}



</style>
