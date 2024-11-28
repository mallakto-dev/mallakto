export interface Order {
    id: string,
    username?: string,
    name: string,
    order_tems: {
        product: string,
        quantity: number
    }[],
    payment_type: string,
    order_type: string,
    address?: string,
    phone: string,
    email: string,
}