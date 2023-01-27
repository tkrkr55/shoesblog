import { configureStore,createSlice } from "@reduxjs/toolkit";
import user from '../store/userSlice.js';






let list = createSlice({
  
  name:'list',
  initialState:[
    ],

    reducers:{
      changeage(state,action){
   let 번호 = state.findIndex((a)=> a.id == action.payload)
   state[번호].count++
      },
      addItem(state,action){
       let number = state.findIndex((a)=> a.id === action.payload.id)
        console.log(number)
        if(number >= 0 ){
          state[number].count++;
        }else{
          state.push(action.payload)
        }
      },
      deletItem(state,action){
    let 번호 = state.findIndex((a)=> a.id === action.payload)
    if(번호 >= 0){
     state[번호].count--
    }else if(번호 <=0){
    alert("수량이 없습니다.")
    }
  
      }
    }
})

export let {changeage,addItem,deletItem} = list.actions

export default configureStore({
  reducer :{
    user : user.reducer,
    list : list.reducer
  }
})