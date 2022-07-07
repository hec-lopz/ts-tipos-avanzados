// Los enums facilitan la creacion de documentacion porque otorga una lista de opciones que evitan los errores
// Me pregunto si la ventaja de usarlo asi en lugar de crear un objeto key-value es el uso en memoria de la aplicacion
enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  username: string
  role: ROLES
}

const hectUser: User = {
  username: 'HectLopz',
  role: ROLES.ADMIN,
}

console.log(hectUser)
