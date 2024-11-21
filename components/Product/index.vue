<script setup  lang="ts">

defineProps<{
  id: string,
  title: string,
  price: string,
  ingredients: string,
  nutritionFacts: string,
  weight: number,
  imgSrc: string,
  shelfLife: string,
  imgDescription: string,
}>();


const numberOfitems = ref<number>(1);

const increase = () => {
  numberOfitems.value++;
};

const decrease = () => {
  if (numberOfitems.value > 0) {
    numberOfitems.value--;
  }
};

const handleClick = () => {
  console.log(numberOfitems.value);
};

</script>



<template>
  <section>
    <NuxtImg
      :src="imgSrc"
      :alt="imgDescription"
    />
    <div>
      <h2>{{ title }}</h2>
      <span>{{ priceToRubles(price) }}</span>
      <p>
        <strong>Состав:</strong>  {{ ingredients }}
      </p>
      <p>
        <strong>Пищевая ценность:</strong> {{ nutritionFacts }}
      </p>
      <p>
        <strong>Вес:</strong> {{ weight }} г
      </p>
      <p>
        <strong>Срок Годности: </strong>
        {{ shelfLife }}
      </p>
      <QuantityPicker
        :is-inline="false"
        :increase="increase"
        :decrease="decrease"
        :number-of-items="numberOfitems"
        :is-label-displayed="true"
      />
      <button @click="handleClick">
        Добавить в корзину
        <Icon
        name="fa6-solid:cart-shopping"
      />
      </button>
    </div>
  </section>
</template>


<style scoped lang="scss">

section {
  display: grid;
  grid-template-columns: 1fr;
  margin: 2rem;
  gap: 2rem;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
    margin-bottom: 4rem;
  }
}

img {
    width: 100%;
}

div {
  width: 100%;

}

span {
  font-weight: 600;
  font-size: 1.4rem;
}

button {
  width: 100%;
  height: 3rem;
  border: none;
  background-color: #004530;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &:hover {
    opacity: 0.8;
  }
}

</style>