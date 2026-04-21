import type { AxiosRequestConfig } from 'axios'
import { getAcceptLanguageHeader } from '@/lib/utils'
import { userGet, userPost } from '@/lib/api/userClient'

const localeHeaders = (locale?: string): Pick<AxiosRequestConfig, 'headers'> => ({
	headers: locale ? { 'Accept-Language': getAcceptLanguageHeader(locale) } : undefined,
})

/** POST /register — form-data: name, email, mobile, password */
export async function postRegister(formData: FormData, locale?: string) {
	return userPost<unknown>('/register', formData, { ...localeHeaders(locale) })
}

/** POST /verify-code — form-data: email, code (CASIO ilə eyni məntiq; qeydiyyat və ya şifrə bərpası) */
export async function postVerifyCode(formData: FormData, locale?: string) {
	return userPost<unknown>('/verify-code', formData, { ...localeHeaders(locale) })
}

/** POST /login — form-data: email, password */
export async function postLogin(formData: FormData, locale?: string) {
	return userPost<unknown>('/login', formData, { ...localeHeaders(locale) })
}

/** GET /logout */
export async function getLogout(locale?: string) {
	return userGet<unknown>('/logout', { locale })
}

/** POST /forgot-password — form-data: value (e-poçt) */
export async function postForgotPassword(formData: FormData, locale?: string) {
	return userPost<unknown>('/forgot-password', formData, { ...localeHeaders(locale) })
}

/**
 * POST /password/reset — form-data: token (verify OTP), password, password_confirmation; e-poçt üçün value.
 * Bearer verify-cavabı userClient interceptor ilə; Postman Change password ilə eyni sahə adları.
 */
export async function postPasswordReset(formData: FormData, locale?: string) {
	return userPost<unknown>('/password/reset', formData, { ...localeHeaders(locale) })
}

/**
 * Cari istifadəçi — GET Bearer (userClient interceptor).
 * Postman: Get user info → GET /get-user
 */
export async function getUserInfo(locale?: string) {
	return userGet<unknown>('/get-user', { locale })
}

/** POST /update — form-data: name, email, mobile; image fayl (opsional). */
export async function postUpdateUser(formData: FormData, locale?: string) {
	return userPost<unknown>('/update', formData, { ...localeHeaders(locale) })
}

/** POST /password/change — form-data: old_password, password, password_confirmation */
export async function postPasswordChange(formData: FormData, locale?: string) {
	return userPost<unknown>('/password/change', formData, { ...localeHeaders(locale) })
}
