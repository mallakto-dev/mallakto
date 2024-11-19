<script setup lang="ts">

import { useMediaQuery } from '@vueuse/core'

defineProps({
  isNavOpen: Boolean,
})

const isMobile = useMediaQuery('(max-width: 767px)');

const emit = defineEmits(['closeNav']);

const isDropdownOpen = ref(false);

const handleDropdownClick = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
}

const closeDropdown = () => {
  isDropdownOpen.value = false;
}

onMounted(() => {
  window.addEventListener('click', closeDropdown);
})

onUnmounted(() => {
  window.removeEventListener('click', closeDropdown);
})

watch(() => isMobile, () => {
  if (!isMobile.value) {
    emit('closeNav');
  }
})

const { data } = await useFetch<Category[]>('https://mallakto-backend.onrender.com/categories/', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})

</script>
<template>
  <nav id="navigation" role="navigation">
    <ul class="list" :class="{'mobile': isNavOpen && isMobile}" >
      <li
class="list-item" 
       @click="emit('closeNav')">
        <NuxtLink tab-index="0" to="/">
          Главная
        </NuxtLink>
      </li>
      <li
class="list-item">
        <button class="dropdown-button" :aria-haspopup="isDropdownOpen" :aria-expanded="isDropdownOpen" @click.stop="handleDropdownClick">
          Продукция
          <Icon
      size="1em"
        :name="isDropdownOpen ? 'fa6-solid:angle-up' : 'fa6-solid:angle-down'"
      />
        </button>
        <ul
class="dropdown" :class="{
        'open':
          isDropdownOpen
      }" role="menu" aria-label="Продукция">
          <li
v-for="category in data" :key="category.id" 
           class="dropdown-item">
            <Icon size="1em" name="fa6-solid:angle-right" />
            <NuxtLink tab-index="0" :to="`/products/${category.slug}`" :prefetch=true>
              {{ category.name }}
            </NuxtLink>
          </li>
        </ul>
      </li>
      <li 
       class="list-item" @click="emit('closeNav')">
        <NuxtLink tab-index="0" to="/about">
          О нас
        </NuxtLink>
      </li>
      <li 
       class="list-item" @click="emit('closeNav')">
        <NuxtLink tab-index="0" to="/contacts">
          Контакты
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  position: relative;
  grid-area: navigation;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.list {
  display: none;
  flex-direction: column;
  list-style: none;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  font-size: 1.4rem;
  color: #004530;
  background-color: #faddd4;
  height: 100%;
  z-index: 1;
  gap: 1rem;

  &.mobile {
    display: flex;
    padding: 3rem 1rem;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: flex;
    font-size: 1.1rem;
    flex-direction: row;
    width: 100%;
    gap: 0;
    align-items: center;
    justify-content: space-around;
    line-height: 3;
    position: relative;
    background-color: #fffdfa;;
  }
}

.list-item {
  @media (min-width: 768px) {
    width: 8rem;
    text-align: center;
    position: relative;
  }
}

.dropdown-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #004530;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: .4rem;
}

.dropdown {
  @extend .list;
  padding: 1rem 0;
  font-size: 1.2rem;
  margin: 0;
  margin-left: 1rem;
  display: none;

  &.open {
    display: flex;
    gap: .2rem;
  }

  .dropdown-item {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
    flex-direction: column;
    position: fixed;
    background-color: #fffdfa;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    border-top: 2px solid #004530;
    width: 14rem;
    padding: 0;
    height: max-content;
    z-index: 10;

    list-style: none;

    & .dropdown-item {
      width: 100%;
        span {
          margin-left: .5rem;
        }

      &:hover,
      &:focus-within {
        background-color: #004530;
        color: white;
        a {
          color: white;
        }
      }
    }
  }
}
</style>