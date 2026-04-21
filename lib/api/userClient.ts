import axios, {
	type AxiosInstance,
	type AxiosResponse,
	type AxiosError,
	type InternalAxiosRequestConfig,
	type AxiosRequestConfig,
} from 'axios'
import { getAcceptLanguageHeader } from '@/lib/utils'
import {
	clearAuthToken,
	clearPasswordResetBearerToken,
	getAuthToken,
	getPasswordResetBearerToken,
} from '@/lib/api/client'

const USER_API_BASE_URL = process.env.NEXT_PUBLIC_USER_API_BASE_URL

const userAxios: AxiosInstance = axios.create({
	baseURL: USER_API_BASE_URL,
	timeout: 15000,
	headers: {
		'Content-Type': 'application/json',
	},
})

const handleApiError = (error: AxiosError): void => {
	if (error.response?.status === 401) {
		clearAuthToken()
		clearPasswordResetBearerToken()
	} else if (error.response?.status === 403) {
		console.error('Access forbidden')
	} else if (error.response && error.response.status >= 500) {
		console.error('Server error:', error.response.status)
	}
}

userAxios.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const token = getAuthToken() || getPasswordResetBearerToken()
		if (token && config.headers) {
			config.headers.Authorization = `Bearer ${token}`
		}

		if (config.data instanceof FormData && config.headers) {
			delete config.headers['Content-Type']
		}

		if (config.headers) {
			const configLocale = config.params?.locale || config.headers['X-Locale']
			if (configLocale) {
				config.headers['Accept-Language'] = getAcceptLanguageHeader(String(configLocale))
			} else {
				config.headers['Accept-Language'] = getAcceptLanguageHeader('az')
			}
		}

		return config
	},
	(error: AxiosError) => Promise.reject(error)
)

userAxios.interceptors.response.use(
	(response: AxiosResponse) => response,
	(error: AxiosError) => {
		handleApiError(error)
		return Promise.reject(error)
	}
)

export const userGet = async <T>(
	url: string,
	config?: AxiosRequestConfig & { locale?: string }
): Promise<T> => {
	const requestConfig: AxiosRequestConfig = {
		...config,
		params: {
			...config?.params,
			...(config?.locale && { locale: config.locale }),
		},
	}
	const response = await userAxios.get<T>(url, requestConfig)
	return response.data
}

export const userPost = async <T>(
	url: string,
	data?: unknown,
	config?: AxiosRequestConfig
): Promise<T> => {
	const response = await userAxios.post<T>(url, data, config)
	return response.data
}
