import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    saveData: (state, action) => {
      state.data = action.payload
    },
    clearData: (state) => {
      state.data = {}
    },

  },
})

// Action creators are generated for each case reducer function
export const { saveData, clearData } = productSlice.actions

export default productSlice.reducer