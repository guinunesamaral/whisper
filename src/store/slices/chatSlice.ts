import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    value: {
      id: 0,
      userOne: 0,
      userTwo: 0,
      createdAt: new Date(),
    },
  },
  reducers: {
    select: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { select } = chatSlice.actions

export default chatSlice.reducer
