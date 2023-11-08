type product = {
    id: number
    productName: string
    category: number | category<number, string>[] | category<number, string>,
    quantity: number
}

type category<A, B> = {
    id: A
    categoryName: B
}

type productCollectionType = {
    products: product[]
    categories: category<number, string>[]
}

interface AddProductFunctionType {
    (idProduct?: number, productName?: string, category?: number): string
}

interface AddCategoryFunctionType {
    (idCategory?: number, categoryName?: string): string
}

interface EditProductFunctionType {
    (idProduct: number, productName?: string): string | product[]
}

interface EditCategoryFunctionType {
    (idCategory: number, categoryName?: string): string | category<number, string>[]
}

interface ShowItemType {
    (type: ShowType): product[] | category<number, string>[]
}

enum ShowType {
    products,
    categories
}

interface FilterProductByIdCategoryType {
    (idCategory: number): string | product[]
}

const productCollection: productCollectionType = {
    products: [],
    categories: []
}

const addProduct: AddProductFunctionType = (idProduct = 1, productName = 'Oreo', idCategory = 1, quantityProduct = 1) => {
 const isCategoryAvailable = productCollection.categories.filter(value => value.id === idCategory)

 if (isCategoryAvailable.length >= 1) {
     productCollection.products.push({
        id: idProduct,
        productName: productName,
        category: idCategory,
        quantity: quantityProduct
     })
    
     return 'New product created!'
 } else {
    return 'Category doesn\'t exist'
 }
}

const addCategory: AddCategoryFunctionType = (idCategory = 1, categoryName = 'Makanan') => {
 const isCategoryAvailable = productCollection.categories.filter(value => value.id === idCategory || value.categoryName === categoryName)

 if (isCategoryAvailable.length >= 1) {
    return 'Category already exist'
 } else {
     productCollection.categories.push({
        id: idCategory,
        categoryName: categoryName
     })

     return 'New category created!'
 }
}

const editProduct: EditProductFunctionType = (idProduct, productName) => {
    const filterProduct: product[] = productCollection.products.filter(value => value.id === idProduct)
    const updateProducts: product[] = productCollection.products.map((value) => {
        let result: product = value

        if (value.id === idProduct) {
            result = {
                ...value,
                productName: productName || ''
            }
        }

        return result
    })

    return filterProduct.length <= 0 ? 'Product not found!' : updateProducts
}

const editCategory: EditCategoryFunctionType = (idCategory, categoryName) => {
    const filterCategory: category<number, string>[] = productCollection.categories.filter(value => value.id === idCategory)
    const updateCategories: category<number, string>[] = productCollection.categories.map(value => {
        let result: category<number, string> = value

        if (value.id === idCategory) {
            result = {
                ...value,
                categoryName: categoryName || ''
            }
        }

        return result
    })

    return filterCategory.length <= 0 ? 'Category not found!' : updateCategories
}

const showItem: ShowItemType = (type) => {
    const showProducts: product[] = productCollection.products.map(value => {
        return {
            ...value,
            category: productCollection.categories.filter(categoryValue => categoryValue.id === value.category)
        }
    })

    switch (type) {
        case ShowType.products:
            return showProducts
        case ShowType.categories:
            return productCollection.categories
        default:
            return showProducts
    }
}

const filterProductByIdCategory: FilterProductByIdCategoryType = (idCategory) => {
    const filterData: product[] = productCollection.products.filter(value => (
        value.category === idCategory || (value.category as category<number, string>)?.id === idCategory
    ))

    return filterData.length <= 0 ? 'Product by Category ID not found!' : filterData
}

console.log('[*] Add Categories 1: ', addCategory(), productCollection.categories)
console.log('[*] Add Products 1: ', addProduct(), productCollection.products)
// console.log('[*] Add Categories 2: ', addCategory(2, 'Pakaian'), productCollection.categories)
// console.log('[*] Add Products 2: ', addProduct(2, 'Taro', 2), productCollection.products)
// console.log('[*] Add Categories 3: ', addCategory(3, 'Elektronik'), productCollection.categories)
// console.log('[*] Add Products 3: ', addProduct(3, 'Biskuat', 3), productCollection.products)
// console.log('[*] Edit Categories: ', editCategory(1, 'Minuman'))
// console.log('[*] Edit Products: ', editProduct(1, 'Biskuat'))
// console.log('[*] Showing Products / Categories: ', showItem(ShowType.categories))
// console.log('[*] Filtering Products by ID Category: ', filterProductByIdCategory(2))
