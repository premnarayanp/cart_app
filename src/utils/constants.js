const API_ROOT = 'https://dummyjson.com';

export const API_URLS = {
  //API URL for User
  login: () => `${API_ROOT}/auth/login`,
  signup: () => `${API_ROOT}/auth/login`,
  allProducts:()=>`${API_ROOT}/products`,
  searchProduct:(searchBy)=>`${API_ROOT}/products/search?q=${searchBy}`,
};

export const LOCAL_STORAGE_TOKEN_KEY = '__MY_CART_APP_TOKEN__';
