// REDUX TOOLKIT
import { configureStore } from '@reduxjs/toolkit'

// REDUCER
import employeesSlice from '../features/employees/employeesSlice'

export const store = configureStore({
  reducer: employeesSlice,
})
