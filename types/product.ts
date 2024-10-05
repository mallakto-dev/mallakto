export interface Product {
    id: string,
    availability: boolean
    bestBefore: string
    category: {
        id: string,
        name: string,
        slug: string
    }
    ingredients: string
    metaContent?: { keywords: string, _type: "metadata", description: string }
    nutrition_facts: string
    price: number
    slug: string
    name: string
    weight: number
    photo_path: string,
    shelf_life: string
}