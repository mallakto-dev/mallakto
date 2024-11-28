import { defineStore } from "pinia";

export interface CartProduct {
    id: string,
    categorySlug: string,
    imgSrc: string,
    ingredients?: string
    metaContent?: { keywords: string, description: string }
    nutriton_facts?: string
    price: string
    slug: string
    title: string
    weight: number
    quantity: number
}

export const useCartStore = defineStore(
    "cart",
    () => {
        const cart = ref<CartProduct[]>([]);
        const cartTotal = computed(() => {
            return cart.value.reduce((acc, product) => acc + product.quantity, 0);
        });
        const totalPrice = computed(() => {
            return cart.value.reduce((acc, product) => acc + parseInt(product.price) * product.quantity, 0);
        });
        const getOrderItems = computed(() => {
            return cart.value.map((product) => {
                return {
                    product: product.id,
                    quantity: product.quantity
                }
            });
        },);
        function addProduct(product: CartProduct) {
            cart.value.push(product);
        };
        function removeProduct(id: string) {
            cart.value = cart.value.filter((p) => p.id !== id);
        };
        function increaseQuantity(id: string){
            const product = cart.value.find((p) => p.id === id);
            console.log(product)
            if (product) {
                product.quantity++;
            }
        }
        function decreaseQuantity (id: string) {
            const product = cart.value.find((p) => p.id === id);
            if (product && product.quantity > 1) {
                product.quantity--;
            }
        }
        function clearCart() {
            cart.value = [];
        }
        return { cart, addProduct, removeProduct, totalPrice, cartTotal, increaseQuantity, decreaseQuantity, getOrderItems, clearCart };
    },
    {
        persist: true,
    },
    );