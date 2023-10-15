import { Auth } from 'aws-amplify';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';


interface RequestOptions extends RequestInit {
    headers?: Record<string, string>;
  }

  async function fetchAuthToken() {
    try {
        const currentUser = await Auth.currentAuthenticatedUser();
        const token = currentUser.getSignInUserSession().getIdToken().getJwtToken();
        return token;
    } catch (error) {
        console.error('Error fetching auth token', error);
        throw error;
    }
}

// Redefine expected input to just a function that takes AxiosRequestConfig and returns a promise
type SimpleAxiosInstance = (config: AxiosRequestConfig) => Promise<AxiosResponse<any>>;

// Generic function to handle axios instance with authentication
function withAuthAxios(axiosInstance: SimpleAxiosInstance) {
  return async function (config: AxiosRequestConfig) {
      const token = await fetchAuthToken();
      const newConfig = {
          ...config,
          headers: {
              ...config.headers,
              'Authorization': token
          }
      };
      return axiosInstance(newConfig);
  };
}

type AxiosMethod = (
url: string,
dataOrConfig?: any | AxiosRequestConfig,
config?: AxiosRequestConfig
) => Promise<AxiosResponse<any>>;

function withAuthAxiosMethod(axiosMethod: AxiosMethod): AxiosMethod {
  return function (url: string, dataOrConfig?: any | AxiosRequestConfig, config?: AxiosRequestConfig) {
      // Convert AxiosMethod to SimpleAxiosInstance format
      const instance: SimpleAxiosInstance = (config: AxiosRequestConfig) => {
          const { data, ...restConfig } = config;
          return axiosMethod(config.url!, data, restConfig);
      };

      const authInstance = withAuthAxios(instance);
      
      if (typeof dataOrConfig === 'object' && !Array.isArray(dataOrConfig) && dataOrConfig !== null) {
          return authInstance({ url, ...dataOrConfig });
      } else {
          return authInstance({ url, data: dataOrConfig, ...config });
      }
  };
}


export const authenticatedAxios = withAuthAxios(axios);
/*USAGE:
  const authenticatedAxios = withAuthAxios(axios);

  // Now you can use `authenticatedAxios` just like you would use Axios
  authenticatedAxios({
      method: 'get',
      url: '/api/my-endpoint'
  }).then(response => {
      // Handle response
  });
 */


export const authenticatedAxiosGet = withAuthAxiosMethod(axios.get);
/*USAGE:
  authenticatedAxiosGet('/api/my-endpoint').then(response => {
      // Handle response
  });
*/

export const authenticatedAxiosPost = withAuthAxiosMethod(axios.post);
/*USAGE:
  authenticatedAxiosPost('/api/my-endpoint', {
      data: {
          foo: 'bar'
      }
  }).then(response => {
      // Handle response
  });
*/

export const authenticatedAxiosPut = withAuthAxiosMethod(axios.put);
/*USAGE:
  authenticatedAxiosPut('/api/my-endpoint', {
      data: {
          foo: 'bar'
      }
  }).then(response => {
      // Handle response
  });
*/

export const authenticatedAxiosDelete = withAuthAxiosMethod(axios.delete);
/*USAGE:
  authenticatedAxiosDelete('/api/my-endpoint').then(response => {
      // Handle response
  }
*/