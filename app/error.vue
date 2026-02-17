<script setup lang="ts">
definePageMeta({
  robots: false,
})
</script>

<template>
    <Header />
    <main>
        <section>
            <h3>Кажется... такой страницы не существует</h3>
            <p>
                Попробуйте вернуться на <NuxtLink to="/">главную</NuxtLink>
            </p>
        </section>
</main>
    <Footer />
</template>

<style scoped>
    section {
        margin: 5rem auto 0 auto;
        padding: 1.5rem;
    }

    h3 {
        font-size: 1.8rem;
        font-weight: 600;
    }
    p {
        font-size: 1.4rem;
        font-weight: 600;
    }
    a {
        border-bottom: 2px solid #004530;
    }
</style>`;