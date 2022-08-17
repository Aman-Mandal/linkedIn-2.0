import { createSlice } from '@reduxjs/toolkit'

const initialUserState = { user: null }

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    login(state) {
      state.user = true
    },
    logout(state) {
      state.user = null
    },
  },
})

export const userActions = userSlice.actions

export default userSlice.reducer
