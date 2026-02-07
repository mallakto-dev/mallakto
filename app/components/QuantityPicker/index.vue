<script setup lang="ts">


const props = defineProps<{
    numberOfItems: number,
    isInline: boolean,
    className?: string
}>()

defineEmits(['increase', 'decrease'])


  const handleChange = (e:Event) => {
    (e.target as HTMLInputElement).value = props.numberOfItems.toString();
  };

</script>

<template>
  <div :class="className">
    <button
      aria-label="Уменьшить количество товара в корзине на один"
      @click="$emit('decrease')"
      type="button"
    >
      −
    </button>
    <input
      type="number"
      name="productQuantity"
      :value="numberOfItems"
      aria-label="Количество товара которое будет добавленно в корзину"
      @change="{handleChange}"
    >
    <button
      aria-label="Увеличить количество товара в корзине на один"
      @click="$emit('increase')"
      type="button"
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
}

input {
  width: 2.6rem;
  height: 2.6rem;
  font-size: 1.1rem;
  text-align: center;
  line-height: 2;
  margin: 0;
  appearance: textfield;
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
}



</style>
