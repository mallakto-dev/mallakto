<template>
  <section>
    <div class="container">
      <div>
        <img src="~/assets/img/cows.jpg" alt="Фото коров на лужайке" />
      </div>
      <div class="text-wrapper">
        <h1>Вас приветствует московский веган-кооператив Mallakto!</h1>
        <p>
          Начиная с 2016 года мы занимаемся производством этичных продуктов
          питания, потребность в которых неуклонно растет, и что выгодно
          отличает нас от многих других производителей, наш приоритет — это
          доступные цены.
        </p>
        <p>Go Vegan!</p>
        <NuxtLink to="/about"> Читать далее... </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

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
