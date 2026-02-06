<script setup lang="ts">
import { useInput } from "~/composables/useInput";

definePageMeta({
  title: "Оформить заказ | Mallakto",
  description: "Оформление заказа",
  middleware: [
    function (to, from) {
      const cartStore = useCartStore();
      const { cartTotal } = toRefs(cartStore);

      if (from.path !== "/cart" || cartTotal.value === 0) {
        return navigateTo("/");
      }
    },
  ],
});

const cartStore = useCartStore();
const { getOrderItems } = toRefs(cartStore);

const name = useInput<string>("", {
  required: "Введите имя",
  pattern: {
    test: /^([^0-9]*)$/,
    message: 'Поле "Имя" может содержать только буквы',
  },
  maxLength: { value: 30, message: "Имя не должно превышать 50 символов" },
  minLength: { value: 2, message: "Имя должно содержать не менее 2 символов" },
});
const phone = useInput<string>("", {
  required: "Введите номер, по которому с Вами можно связаться",
});
const email = useInput<string>("", {
  required: "Введите электронную почту",
  pattern: {
    test: /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})$/,
    message: "Введите корректную электронную почту",
  },
  maxLength: {
    value: 50,
    message: "Электронная почта не должна превышать 50 символов",
  },
});
const delivery = useInput<string>("", {
  required: "Выберите каким образом Вам удобнее всего получить Ваш заказ",
});
const address = useInput<string>("", {
  required: "Если Вы выбрали доставку, то поле адрес является обязательным",
});
const payment = useInput<string>("", { required: "Выберите способ оплаты" });

const showAddressField = computed(() => delivery.value.value === "Доставка");

const areInputsValid = computed(
  () =>
    name.value.inputIsValid &&
    phone.value.inputIsValid &&
    email.value.inputIsValid &&
    delivery.value.inputIsValid &&
    (delivery.value.value === "Доставка" ? address.value.inputIsValid : true) &&
    payment.value.inputIsValid,
);

const onSubmit = async (e: Event) => {
  e.preventDefault();
  if (areInputsValid.value) {
    const data = {
      name: name.value.value,
      phone: phone.value.value,
      email: email.value.value,
      order_type: delivery.value.value,
      payment_type: payment.value.value,
      address: "",
      order_items: getOrderItems.value,
      total: cartStore.totalPrice,
    };
    if (delivery.value.value) {
      data.address = address.value.value;
    }
    try {
      const sendOrder = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (sendOrder.ok) {
        cartStore.clearCart();
        navigateTo("/cart/checkout/submitted");
      }
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<template>
  <main>
    <section>
      <h2 id="form-title">Оформить заказ</h2>
      <form id="checkout-form" aria-labelledby="form-title" @submit="onSubmit">
        <Fieldset id="contact_details" legend="Контактные данные">
          <div>
            <InputField
              id="name"
              v-model="name"
              name="name"
              label="Имя"
              type="text"
            />
            <InputField
              id="phone"
              v-model="phone"
              name="phone"
              type="tel"
              label="Телефон"
              :handle-blur="validateAndMaskPhoneNumber"
              additional-error-msg="Введите корректный номер телефона"
            />
            <InputField
              id="email"
              v-model="email"
              name="email"
              type="email"
              label="Электронная почта"
            />
          </div>
        </Fieldset>

        <Fieldset id="delivery" legend="Способ доставки">
          <div>
            <RadioInput
              id="delivery"
              v-model="delivery"
              label="Доставка"
              name="delivery"
              radio-value="Доставка"
            />

            <RadioInput
              id="no-delivery"
              v-model="delivery"
              label="Самовывоз"
              name="delivery"
              radio-value="Самовывоз"
            />
            <p v-for="(error, index) in delivery.errors" :key="index">
              {{ error }}
            </p>
          </div>
          <div v-if="showAddressField">
            <InputField
              id="address"
              v-model="address"
              name="address"
              label="Адрес"
              type="text"
            />
            <p role="alert">
              Начальная стоимость доставки: 500 &#8381;. 
              Полная стоимость рассчитывается отдельно.
              Стоимость доставки не входит в сумму
              заказа.
            </p>
          </div>
        </Fieldset>

        <Fieldset id="payment" legend="Способ оплаты">
          <RadioInput
            id="payment-transfer"
            v-model="payment"
            label="Перевод на счет"
            name="payment"
            radio-value="Перевод на счет"
          />

          <RadioInput
            id="payment-cash"
            v-model="payment"
            label="Наличные"
            name="payment"
            radio-value="Наличные"
          />
          <p v-for="(error, index) in payment.errors" :key="index">
            {{ error }}
          </p>
        </Fieldset>

        <button type="submit" :disabled="!areInputsValid">Сделать заказ</button>
      </form>
      <NuxtLink to="/cart"> Вернуться назад </NuxtLink>
    </section>
  </main>
</template>

<style scoped lang="scss">
section {
  margin: 1rem;

  @media (min-width: 768px) {
    margin: 2rem;
  }
}

h2 {
  text-align: center;
  color: #004530;
  font-size: 2rem;
}

form {
  background-color: #fbe6de;
  width: 100%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 60%;
  }
}

div {
  display: flex;
  flex-direction: column;
}

button {
  display: block;
  text-align: center;
  width: 60%;
  height: 3rem;
  border: none;
  background-color: #004530;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  padding: 2px;
  margin: 1rem auto;
  border-radius: 10px;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
}

p {
  font-size: 0.9rem;
}
</style>
;
