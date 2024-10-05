<script setup lang="ts">
const cartStore = useCartStore();

const { decreaseQuantity, increaseQuantity, removeProduct } = cartStore;

defineProps({
  item: {
    type: Object,
    required: true,
  },
});


</script>
<template>
    <div class="product">
        <NuxtImg  
          :src="item.imgSrc"
          :alt="item.title"
        />
        <div class="product__wrapper">
          <div class="product__text-wrap">
            <NuxtLink :to="item.slug.current">
              <p>{{item.title}}</p>
            </NuxtLink>
        </div>
          <span>{{item.weight}} г</span>
          <QuantityPicker
        :is-inline="true"
        :number-of-items="item.quantity"
        :is-label-displayed="true"
        @increase="increaseQuantity(item.id)"
        @decrease="decreaseQuantity(item.id)"
      />
          <span>{{priceToRubles(item.price)}}</span>
        </div>

        <button
          aria-label="Удалить"
          @click="removeProduct(item.id)"
        >
          <Icon name="fa6-solid:trash-can" class="delete"/>
        </button>
      </div>
</template>


<style lang="scss" scoped>

.product {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.8rem;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;
}

img {
    width: 30%;
    object-fit: cover;
    margin-right: 1rem;
}

.product__wrapper {
  display: flex;
  flex-direction: column;
  margin: 0.8rem;

  @media (min-width: 546px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 60%;
    justify-content: space-around;
    align-items: center;
  }
}

p {
  font-size: 1rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
}

.product__total {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

button {
  cursor: pointer;
  background: none;
  border: none;
  flex-grow: 0;
  text-align: center;
}

.delete {
  color: #004530;
} 

</style>