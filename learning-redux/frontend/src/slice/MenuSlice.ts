import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export  interface Menu {
    id:number,
    name:String,
    price:number,
}

export interface MenuSlice{
    menus:Menu[],
    isloading:false,
    error:Error | null
}

const initialState:MenuSlice ={
    menus:[], 
    isloading:false,
    error:null
}

export const menuSlice = createSlice({
    name:"menu",
    initialState,
    reducers:{
        setMenu:(state,action:PayloadAction<Menu[]>) => {
            state.menus=action.payload
        },
        addMenu:(state,action:PayloadAction<Menu>) => {
            state.menus=[...state.menus,action.payload]
        },
        removeMenu:(state,action:PayloadAction<Menu>) =>{
           state.menus = state.menus.filter(menu => menu.id != action.payload.id)
        }
    },
    extraReducers:(builder) => {
    
    }
})

export const {setMenu,addMenu,removeMenu} = menuSlice.actions

export default menuSlice.reducer