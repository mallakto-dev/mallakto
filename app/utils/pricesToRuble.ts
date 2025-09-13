export const priceToRubles = (price: string) =>
  new Intl.NumberFormat("ru-Ru", {
    style: "currency",
    currency: "RUB",
  }).format(parseInt(price))