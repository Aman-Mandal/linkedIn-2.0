import { createSlice } from '@reduxjs/toolkit'

const initialUserState = { user: false }

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    login(state) {
      state.user = true
    },
    logout(state) {
      state.user = false
    },
  },
})

export const userActions = userSlice.actions

export default userSlice.reducer
