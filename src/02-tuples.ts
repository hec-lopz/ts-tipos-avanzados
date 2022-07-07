const prices: (number | string)[] = ['as', 1, 2, 3, 4]
prices.push('boo')

let user: [string, number]

user = ['hect', 25]
user = ['hola', 12]
user.push(32)

const [userName, age] = user
console.log(userName, age)
