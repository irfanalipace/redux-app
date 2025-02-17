import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({

  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
  
      state.value += 1
    },
    decreament: (state)=>{
      state.value -= 1;
    },
    reset(state){
      state.value = 0
    }
   
  },
  
})


export const { increment , decreament, reset} = counterSlice.actions

export default counterSlice.reducer