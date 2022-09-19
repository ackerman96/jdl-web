import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const categoriesSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    saveCategories: (state, action) => {
      state.data = action.payload
    },
    clearCategories: (state) => {
      state.data = {}
    },

  },
})

// Action creators are generated for each case reducer function
export const { saveCategories, clearCategories } = categoriesSlice.actions

export default categoriesSlice.reducer