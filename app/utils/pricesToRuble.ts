export const priceToRubles = (price: number) =>
  new Intl.NumberFormat("ru-Ru", {
    style: "currency",
    currency: "RUB",
  }).format(price);