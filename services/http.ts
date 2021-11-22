// import jwtDecode from 'jwt-decode'
import { isWindow } from "utils";

export const tokenKey = "authorization";

const isAbsoluteUrl = (urlString) => urlString.indexOf("http://") === 0 || urlString.indexOf("https://") === 0;

export const baseUrl = isWindow ? process.env.NEXT_PUBLIC_BASE_API_URL : process.env.NEXT_PUBLIC_BASE_API_URL;

const attachHeaders = () => ({
  [tokenKey]: typeof window !== "undefined" ? `Bearer ${window.localStorage.getItem(tokenKey)}` : "",
  "Content-Type": "application/json"
});

const handleErrors = async (response) => {
  if ([200, 201].includes(response.status)) {
    return response.json();
  }
  if (response.status === 401) {
    window.localStorage.removeItem(tokenKey);
    window.location.href = "/";
  }

  const error = await response.json();
  throw error;
};

// export const getUser = () => {
//   const token = window.localStorage.getItem(tokenKey)
//   if (!token) {
//     return {}
//   }
//   return jwtDecode(token)
// }

export const get = async ({ path, body }: { path: string; body?: any }) => {
  const url = isAbsoluteUrl(path) ? path : baseUrl + path;
  const queryString = body ? new URLSearchParams(body) : "";
  const response = await fetch(`${url}${queryString && "?"}${queryString}`, {
    headers: attachHeaders()
  });
  const responseHandledError = await handleErrors(response);
  return responseHandledError;
};

export const post = async ({ path, body }: { path: string; body: any }) => {
  const url = baseUrl + path;
  const response = await fetch(url, {
    body: JSON.stringify(body),
    headers: attachHeaders(),
    method: "POST"
  });
  const responseHandledError = await handleErrors(response);
  return responseHandledError;
};
export const put = async ({ path, body }: { path: string; body: any }) => {
  const url = baseUrl + path;
  const response = await fetch(url, {
    body: JSON.stringify(body),
    headers: attachHeaders(),
    method: "PUT"
  });
  const responseHandledError = await handleErrors(response);
  return responseHandledError;
};

export const apiRequest = async (url: string, method: string, bodyParams?: any): Promise<any> => {
  const response = await fetch(url, {
    body: bodyParams ? JSON.stringify(bodyParams) : undefined,
    method
  });

  const payload = await response.json();
  if (!response.ok) {
    throw payload;
  }
  return payload;
};
