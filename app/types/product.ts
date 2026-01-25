export interface Product {
    id: string,
    availability: boolean
    bestBefore: string
    category: {
        id: string,
        name: string,
        slug: { current: string }
    }
    ingredients: string
    metaContent?: { keywords: string, _type: "metadata", description: string }
    nutritonal_facts: string
    price: number
    slug: { current: string }
    title: string
    weight: string
    img_url: string,
    img_caption: string,
}