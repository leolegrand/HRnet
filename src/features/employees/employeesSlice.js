import { createSlice } from '@reduxjs/toolkit'
import { employeeDatabase } from '../../services/employeeDatabase'

// By default, mockup data contains a small list of employees,
// later these mockups will be replaced by data from the API
const initialState = employeeDatabase

const employeesSlice = createSlice({
  name: 'employeesReducer',

  initialState: initialState,

  reducers: {
    employeesAddition(state, action) {
      state = state.push(action.payload)
    },
  },
})

export const { employeesAddition } = employeesSlice.actions
export default employeesSlice.reducer
