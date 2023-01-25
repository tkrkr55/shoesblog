import { configureStore,createSlice } from "@reduxjs/toolkit";
import user from '../store/userSlice.js';






let list = createSlice({
  
  name:'list',
  initialState:[
    {id : 0, name : 'White and Black', count : 0},
    {id : 1, name : 'Grey Yordan', count : 0}],

    reducers:{
      changeage(state,action){
       let 번호 =  state.findIndex((a)=>{return a.id === action.payload })
        state[번호].count ++
      }
    }
})

export let {changeage} = list.actions

export default configureStore({
  reducer :{
    user : user.reducer,
    list : list.reducer
  }
})