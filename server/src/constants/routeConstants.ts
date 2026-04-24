export const usersPath = {
  root: '/users',
  login: '/login',
  register: '/register',
  logout: '/logout',
  me: '/me',
  getAll: '',
  changeRole: '/role/:userId',
  deleteUser: '/delete/:userId',
};

export const artworksPath = {
  root: '/artworks',
  getById: '/:artworkId',
  getAll: '',
  create: '/create',
  edit: '/edit/:artworkId',
  delete: '/delete/:artworkId',
  like: '/like/:artworkId',
  unlike: '/unlike/:artworkId',
};

export const stylesPath = {
  root: '/styles',
  getAll: '',
  getById: '/:styleId',
  create: '/create',
  edit: '/edit/:styleId',
  delete: '/delete/:styleId',
};

export const mediumsPath = {
  root: '/mediums',
  getAll: '',
  getById: '/:mediumId',
  create: '/create',
  edit: '/edit/:mediumId',
  delete: '/delete/:mediumId',
};
