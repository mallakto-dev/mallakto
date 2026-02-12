<script setup lang="ts">
useHead({
  title: "О нас",
  });
</script>

<template>
  <main>
    <section class="container">
        <img
          src="~/assets/img/cows.jpg"
          alt="Фото
          коров
          на
          лужайке"
        />
        <div class="text-wrapper">
          <h2>Вас приветствует московский веган-кооператив Mallakto!</h2>
          <p>
            Начиная с 2016 года мы занимаемся производством этичных продуктов
            питания, потребность в которых неуклонно растет, и что выгодно
            отличает нас от многих других производителей, наш приоритет — это
            доступные цены.
          </p>
          <p>
            Наше производство удостоилось двух наград “лучший производитель
            веганских продуктов” за 2017 и 2018 гг, а также награды “Лучшая
            марка растительных продуктов 2019”.
          </p>
          <p>
            С нами сотрудничают десятки кафе и магазинов в Москве и регионах
            России, также мы доставляем продукцию до дверей наших частных
            клиентов и осуществляем выдачу заказов на нашем производстве.
          </p>
          <p>Приглашаем к сотрудничеству физ. и юр. лиц.</p>
          <p>Go Vegan!</p>
        </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>

h2 {
  text-align: center;
  color: #004530;
  font-size: 2rem;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
}

img {
  width: 18rem;
  align-self: center;
  clip-path: circle(39%);
}

.text-wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  color: #004530;
}

p {
  font-size: 1.1rem;
  letter-spacing: 1px;
}

@media (min-width: 768px) {

  .container {
    flex-direction: row;
  }

  img {
    width: 25rem;
  }

  .text-wrapper {
    width: 50%;
  }
}

@media (min-width: 998px) {
  .text-wrapper {
    text-align: justify;
  }
}
</style>
