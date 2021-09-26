// @flow
import axios from 'axios';
import {SERVER_URL} from '../utils/constants/apiEndpoints';

function baseAxios(options) {
  return axios.create({
    baseURL: SERVER_URL,
    headers: options,
  });
}

function executeRequest(method, pathname, data, options = {}) {
  console.log('Request Data == ', method, pathname, data);

  const body = method === 'get' || !data ? {} : {data};
  const reqObj = options.query
    ? {
        method,
        url: SERVER_URL + pathname,
        params: options.query,
        ...body,
      }
    : {method, url: SERVER_URL + pathname, ...body};

  const baseAxiosRequest = baseAxios(options);
  return new Promise((resolve, reject) => {
    return baseAxiosRequest
      .request(reqObj)
      .then(res => {
        console.log('res ---> ', JSON.stringify(res));
        resolve(res.data);
      })
      .catch(error => {
        console.log('error ---> ', JSON.stringify(error));
        reject(error);
      });
  });
}

export default {
  get(pathname, options) {
    return executeRequest('get', pathname, null, options);
  },

  post(pathname, data, options) {
    return executeRequest('post', pathname, data, options);
  },

  put(pathname, data, options) {
    return executeRequest('put', pathname, data, options);
  },

  patch(pathname, data, options) {
    return executeRequest('patch', pathname, data, options);
  },

  delete(pathname, data, options) {
    return executeRequest('delete', pathname, data, options);
  },

  all(promises) {
    return axios.all(promises);
  },

  handleResponse(response) {
    if (response) {
      if (response && response.code == 200) {
        return {success: true, data: response.data};
      } else {
        let message =
          typeof response.message === 'string'
            ? response.message
            : typeof response.message === 'object'
            ? response.message.denied
              ? this.handleError(response.message.denied)
              : response.message.incorrect_password
              ? this.handleError(response.message.incorrect_password)
              : response.message.invalid_email
              ? this.handleError(response.message.invalid_email)
              : 'Some Error'
            : 'Some Error!';

        return {success: false, data: response.message};
      }
    }
  },

  handleLoginResponse(response) {
    if (response) {
      if (response && response.code == 200) {
        return {success: true, data: response.data};
      } else {
        let message =
          typeof response.message === 'string'
            ? response.message
            : typeof response.message === 'object'
            ? response.message.denied
              ? this.handleError(response.message.denied)
              : response.message.incorrect_password
              ? this.handleError(response.message.incorrect_password)
              : response.message.invalid_email
              ? this.handleError(response.message.invalid_email)
              : 'Some Error'
            : 'Some Error!';

        return {
          success: false,
          data: response.message,
          id:
            response.data &&
            response.data.length > 0 &&
            response.data[0] &&
            response.data[0].id,
        };
      }
    }
  },

  handleResponseForMessage(response) {
    if (response) {
      console.log('handleResponseForMessage==', response.message);
      if (response && response.code == 200) {
        const message = response.message;

        return {success: true, data: message};
      } else {
        let message =
          typeof response.message === 'string'
            ? response.message
            : typeof response.message === 'object'
            ? response.message.denied
              ? this.handleError(response.message.denied)
              : response.message.incorrect_password
              ? this.handleError(response.message.incorrect_password)
              : response.message.invalid_email
              ? this.handleError(response.message.invalid_email)
              : 'Some Error'
            : 'Some Error!';

        return {success: false, data: response.message};
      }
    }
  },

  handleError(message) {
    return typeof message === 'object' &&
      Array.isArray(message) &&
      message.length > 0
      ? message[0]
      : 'Some Error';
  },
};
