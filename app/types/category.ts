
export interface Category {
    id: number,
    title: string,
    slug: { current: string },
    items: Product[]
}