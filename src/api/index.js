import { API_URLS, getFormBody, LOCAL_STORAGE_TOKEN_KEY } from '../utils';

//custom fetch methods for all api
const customFetch = async (url, { body, ...customConfig }) => {
  const token = window.localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

  const headers = {
    'content-type': 'application/x-www-form-urlencoded',
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
    config.body = getFormBody(body);
  }

  try {
    const response = await fetch(url, config);
    console.log("url=",url,"config=",config)
    const data = await response.json();
    console.log("========data=======",data);
    if (data.success) {
      return {
        data: data.data,
        success: true,
        message:data.msg
      };
    }

    throw new Error(data.msg);
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