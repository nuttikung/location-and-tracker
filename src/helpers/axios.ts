import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

type AxiosService = {
  get: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<T>
  put: <T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<T>
  delete: <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ) => Promise<T>
}

export const createAxiosService = (baseURL: string): AxiosService => {
  const instance: AxiosInstance = axios.create({
    baseURL,
  })

  const get = async <T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    const response: AxiosResponse<T> = await instance.get(url, config)
    return response.data
  }

  const post = async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    const response: AxiosResponse<T> = await instance.post(url, data, config)
    return response.data
  }

  const put = async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    const response: AxiosResponse<T> = await instance.put(url, data, config)
    return response.data
  }

  const del = async <T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    const response: AxiosResponse<T> = await instance.delete(url, config)
    return response.data
  }

  return { get, post, put, delete: del }
}

// TODO: replace this by env.
export const getAxiosInstance = () =>
  createAxiosService('http://localhost:3000')
