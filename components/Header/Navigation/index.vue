<script setup lang="ts">
defineProps({
  isNavOpen: Boolean,
})

defineEmits(['closeNav']);

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
  <nav
    v-show="{isNavOpen}"
    id="navigation"
    role="navigation"
  >
    <ul
      class="list"
      role="menubar"
    >
      <li
        class="list-item"
        role="none"
        @click="$emit('closeNav')"
      >
        <NuxtLink
          tab-index="0"
          to="/"
          role="menuitem"
        >
          Главная
        </NuxtLink>
      </li>
      <li
        class="list-item--dropdown"
        role="none"
        :class="{ 'list-item--dropdown--open':
          isDropdownOpen}"
        @click="handleDropdownClick"
      >
        <button
          class="list-item--button"
          :aria-haspopup="isDropdownOpen"
          :aria-expanded="isDropdownOpen"
        >
          Продукция
        </button>
        <ul
          class="sublist"
          role="menu"
          aria-label="Продукция"
        >
<li
            v-for="category in data"
            :key="category.id"
            role="none"
          >
            <NuxtLink
              tab-index="0"
              :to="`/products/${category.slug}`"
              role="menuitem"
              :prefetch=true
            >
              {{ category.name }}
            </NuxtLink>
          </li> 
        </ul>
      </li>
      <li
        role="none"
        @click="$emit('closeNav')"
      >
        <NuxtLink
          tab-index="0"
          to="/about"
          role="menuitem"
        >
          О нас
        </NuxtLink>
      </li>
      <li
        role="none"
        @click="$emit('closeNav')"
      >
        <NuxtLink
          tab-index="0"
          to="/contacts"
          role="menuitem"
        >
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
    width: 100%;
    background-color: rgb(244 185 169);
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;

    @media (min-width: 768px) {
        display: block;
        position: relative;
        background-color: #fffdfa;
    }
}

.list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    color: #004530;

    @media (min-width: 768px) {
        font-size: 1.1rem;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-around;
        line-height: 3;
    }
}

.list-item {
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        margin-bottom: 0;
        width: 8rem;
        text-align: center;
    }
}

.list-item--dropdown {
    @extend .list-item;

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

    &--open {
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
}

.list-item--button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #004530;

    @media (min-width: 768px) {
        width: 8rem;
    }

}

.sublist {
    @extend .list;
    margin-top: 0.5rem;
    list-style: square;
    padding: 1rem;
    transform: translateX(1rem);
    font-size: 1.2rem;

    @media (min-width: 768px) {
        font-size: 0.9rem;
        flex-direction: column;
        position: absolute;
        left: 0rem;
        top: 2rem;
        background-color: #fffdfa;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
        border-top: 2px solid #004530;
        width: 14rem;
        padding: 0;
        list-style: none;

        & li {
            width: 100%;

            &:hover,
            &:focus-within {
                background-color: #004530;

                a {
                    color: white;
                }
            }
        }
    }
}
</style>