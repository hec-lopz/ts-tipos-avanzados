import { faker } from '@faker-js/faker'
import { addProduct, products } from './products/product.service'

for (let index = 0; index < 50; index++) {
  addProduct({
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    tags: faker.helpers.arrayElements(),
    color: faker.color.human(),
    isNew: faker.datatype.boolean(),
    price: parseInt(faker.commerce.price()),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
    updatedAt: faker.date.recent(),
    createdAt: faker.date.recent(),
  })
}

console.log(products)
