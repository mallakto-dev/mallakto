<script setup lang="ts">
 useHead({
  title: "Контакты",
  meta: [
    {
      name: "description",
      content:
        "Контактная информация для связи с Mallakto, адрес,телефон и электронная почта.",
    },
  ],
  });
</script>

<template>
<main>
  <section>
      <div>
        <p>
          <span>Самовывоз:</span> Мы находимся в 9 минутах ходьбы
          от
          <a
            title="Ссылка на Яндекс карту, откроется в новой вкладке"
            target="_blank"
            rel="noopener noreferrer"
            href="https://yandex.ru/maps/-/CCQt6Xt4gB"
          >
            <span>м. Шоссе Энтузиастов, Электродная улица, 2с23</span>
          </a>. Работаем каждый день с 11:00 до 17:00. Самовывоз производится по
          предварительному согласованию, номер для связи
          <a href="tel:+7 916 423 03 77">
            <span>+7 916 423 03 77</span>
          </a>.
        </p>
        <p>
          <span>Доставка:</span> На сайте вы можете оформить
          доставку по Москве, или в любое другое место планеты. Доставка по
          Москве осуществляется нашими курьерами, стоимость доставки от 500р.
          Доставка в другие регионы производится транспортной компанией,
          стоимость рассчитывается индивидуально.
        </p>
        <div>
          <p>По вопросам сотрудничества пишите:</p>
          <p>
            <a href="mailto:chefirkin@gmail.com">chefirkin@gmail.com</a>
          </p>
        </div>
        <SocialLinks width="5.2rem" />
      </div>
    </section>
</main>
</template>


<style lang="scss" scoped>
section {
  width: 100%;
  font-size: 1.1rem;
  margin: 2rem auto;

  @media (min-width: 520px) {
    width: 60%;
    font-size: 1.2rem;
  }
}

div {
  margin: 2rem;

  @media (min-width: 520px) {
    margin: 0;
  }
}

span {
  font-weight: 600;
  margin-right: 0.6rem;
}
</style>