import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../index'
import {
  toggleTheme as toggleThemeAction,
} from './actions'

export function useThemeManager(): [boolean, () => void] {
  const dispatch = useDispatch<AppDispatch>()
  const isRoyal = useSelector<AppState, AppState['user']['isRoyal']>((state) => state.user.isRoyal)

  const toggleTheme = useCallback(() => {
    dispatch(toggleThemeAction())
  }, [dispatch])

  return [isRoyal, toggleTheme]
}

export const useUser = () => {
  const { isLoggedIn, user } = useSelector((state: AppState) => state.user)
  return {
    ...user,
    isLoggedIn
  }
}