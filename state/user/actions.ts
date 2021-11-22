import { createAction } from '@reduxjs/toolkit'
import { User } from '../types'

export const toggleTheme = createAction<void>('user/toggleTheme')

export const login = createAction<User>('user/login')

export const logout = createAction<User>('user/logout')