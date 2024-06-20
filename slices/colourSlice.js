import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  colour: 5,
}

export const colourSlice = createSlice({
  name: 'colour',
  initialState,
  reducers: {
    setColour: (state, action) => {
      console.log({state}, {action})
        return {...state, colour: action.payload}
    },
  },
})

// Action creators are generated for each case reducer function
export const { setColour } = colourSlice.actions;

export const selectColour = state => {console.log('*****', state); return state.colour.colour};

export default colourSlice.reducer