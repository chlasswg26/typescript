export type product = {
    id: number
    productName: string
    category: number | category<number, string>[] | category<number, string>,
    quantity: number
}

export type category<A, B> = {
    id: A
    categoryName: B
}

export type productCollectionType = {
    products: product[]
    categories: category<number, string>[]
}

export interface AddProductFunctionType {
    (idProduct?: number, productName?: string, category?: number): string
}

export interface AddCategoryFunctionType {
    (idCategory?: number, categoryName?: string): string
}

export interface EditProductFunctionType {
    (idProduct: number, productName?: string): string | product[]
}

export interface EditCategoryFunctionType {
    (idCategory: number, categoryName?: string): string | category<number, string>[]
}

export interface ShowItemType {
    (type: ShowType): product[] | category<number, string>[]
}

export enum ShowType {
    products,
    categories
}

export interface FilterProductByIdCategoryType {
    (idCategory: number): string | product[]
}
