<script setup lang="ts">
defineProps({
  isNavOpen: Boolean,
})

const emit = defineEmits(['closeNav']);

const isDropdownOpen = ref(false);

const handleDropdownClick = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
}

const { data } = await useFetch<Category[]>('https://mallakto-backend.onrender.com/categories/', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})

</script>
<template>
  <nav id="navigation" role="navigation">
    <ul :class="{mobile: isNavOpen}" class="list">
      <li
class="list-item" 
       @click="emit('closeNav')">
        <NuxtLink tab-index="0" to="/">
          Главная
        </NuxtLink>
      </li>
      <li
class="list-item dropdown" 
 :class="{
        'open':
          isDropdownOpen
      }">
        <button class="dropdown-button" :aria-haspopup="isDropdownOpen" :aria-expanded="isDropdownOpen" @click="handleDropdownClick" @hover="handleDropdownClick">
          Продукция
          <Icon
      size="1em"
        :name="isDropdownOpen ? 'fa6-solid:angle-up' : 'fa6-solid:angle-down'"
      />
        </button>
        <ul class="sublist" role="menu" aria-label="Продукция">
          <li
v-for="category in data" :key="category.id" 
           class="sublist-item">
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
    background-color: #fffdfa;
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
  width: 65%;
  background-color: #faddd4;
  height: 100%;
  z-index: 1;

  &.mobile {
    display: flex;
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    display: flex;
    font-size: 1.1rem;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    line-height: 3;
    position: relative;
    background-color: #fffdfa;;
  }
}

.list-item {
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    width: 8rem;
    text-align: center;
  }

  &.dropdown {

  & ul {
    display: none;
  }

  @media (min-width: 768px) {
    position: relative;
    z-index: 10;

    & ul {
      display: none;
    }

    &:focus-within>ul,
    & ul:hover,
    &:hover ul,
    & ul:focus {
      display: none;
    }
  }

  &.open {

    &:focus-within>ul,
    & ul:hover,
    &:hover ul,
    & ul:focus {
      display: flex;
    }

    @media (min-width: 768px) {
      & ul:focus {
        display: flex;
      }
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
}
}

.sublist {
  @extend .list;
  padding: 1rem 0;
  font-size: 1.2rem;
  margin: 0;
  margin-left: 1rem;

  .sublist-item {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
    flex-direction: column;
    position: absolute;
    left: 1rem;
    background-color: #fffdfa;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    border-top: 2px solid #004530;
    width: 14rem;
    padding: 0;
    height: max-content;

    list-style: none;

    & .sublist-item {
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