import { Product } from './product.model'

export const products: Product[] = []

export const addProduct = (data: Product) => {
  products.push(data)
}

//update product
//delete
//get
//search

export const updateProduct = (id: string, data: Product): Product => {
  const index = products.findIndex((product) => product.id === id)

  products[index] = {
    ...data,
    id: id,
  }

  return products[index]
}

export const deleteProduct = (id: string): string => {
  const index = products.findIndex((product) => product.id === id)

  const deleted = products.splice(index, 1)

  return deleted[0].id
}

export const getProduct = (id: string): Product => {
  const product = products.filter((product) => product.id === id)

  return product[0]
}
