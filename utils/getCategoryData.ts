export type CategorySlug = 'tofu' | 'sejtan' | 'produkty-iz-tofu' | 'zamorozhennye-produkty' | 'suhie-smesi';

export const getCategoryData = (slug: CategorySlug): number => {
    // that's hopefully a temporary solution, mapping of categories to their PKs in the database
    const categories: Record<CategorySlug, number> = {
        tofu: 4,
        sejtan: 5,
        "produkty-iz-tofu": 6,
        "zamorozhennye-produkty": 7,
        "suhie-smesi": 8,
    }
    return categories[slug];
}