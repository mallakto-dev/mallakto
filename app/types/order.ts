export interface Order {
    name: string,
    order_items: {
        price: number,
        title: string,
        quantity: number
    }[],
    payment_type: string,
    order_type: string,
    address?: string,
    phone: string,
    email: string,
}