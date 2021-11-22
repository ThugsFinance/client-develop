import { createReducer } from '@reduxjs/toolkit'
import {
  toggleTheme,
  login, logout
} from './actions'
import { User } from '../types'

const emptyUser = {
  email: '',
  balance: '',
  username: ''
}

const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("user")) : emptyUser

export interface UserState {
  isLoggedIn: boolean
  user: User
  isRoyal: boolean
}

export const initialState: UserState = {
  isLoggedIn: user ? true : false,
  user: emptyUser,
  isRoyal: false,
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(login, (state, action) => {
      state.user = action.payload
      state.isLoggedIn = true
    })
    .addCase(logout, (state) => {
      state.user = emptyUser
      state.isLoggedIn = false
    })
    .addCase(toggleTheme, (state) => {
      state.isRoyal = !state.isRoyal
    }),
)
