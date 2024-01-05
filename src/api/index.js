import { API_URLS, getFormBody, LOCAL_STORAGE_TOKEN_KEY } from '../utils';

//custom fetch methods for all api
const customFetch = async (url, { body, ...customConfig }) => {
  const token = window.localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

  const headers = {
    //'content-type': 'application/x-www-form-urlencoded',
    'Content-Type': 'application/json'
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    //config.body = getFormBody(body);
    config.body =JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);
    console.log("url=",url,"config=",config)
    const data = await response.json();
    console.log("========data=======",data);
    if (data) {
      return {
        data:data,
        success: true,
        // message:"You are successfully Login"
      };
    }

    throw new Error(JSON.stringify(data));
  } catch (error) {
    console.error('error');
    return {
      message: error.message,
      success: false,
    };
  }
};

 //============API for User============================
export const login = (username, password) => {
  return customFetch(API_URLS.login(), {
    method: 'POST',
    body: { username, password },
  });
};

export const signUp = async (name, username, password, confirmPassword) => {
  return customFetch(API_URLS.signup(), {
    method: 'POST',
    body: { name, username, password, confirmPassword: confirmPassword },
  });
};

export const allProducts = async () => {
  return customFetch(API_URLS.allProducts(), {
    method: 'GET',
  });
};

export const searchProduct = async (searchText) => {
  return customFetch(API_URLS.searchProduct(searchText), {
    method: 'GET',
  });
};

export const addProduct = async (product) => {
  return customFetch(API_URLS.addProduct(), {
    method: 'POST',
    body: product,
  });
};

export const updateProduct = async (product,id) => {
  return customFetch(API_URLS.updateProduct(id), {
    method: 'PUT',
    body: product,
  });
};
