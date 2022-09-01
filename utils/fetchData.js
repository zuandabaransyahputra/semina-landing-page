import axios from '../configs';
import Cookies from 'js-cookie';

export function getData(url, params, token) {
  return axios.get(`${process.env.NEXT_PUBLIC_API}${url}`, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function postData(url, payload, token) {
  return await axios.post(`${process.env.NEXT_PUBLIC_API}${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function putData(url, payload, token) {
  return await axios.put(`${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
