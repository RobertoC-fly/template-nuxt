import axios from 'axios'

export const $http = axios.create({
  withCredentials: true,
})

$http.interceptors.request.use((config) => {
  const runtimeConfig = useRuntimeConfig()
  config.baseURL = runtimeConfig.public.apiBaseUrl
  return config
})
