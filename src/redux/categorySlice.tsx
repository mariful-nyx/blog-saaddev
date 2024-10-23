import { createSlice } from "@reduxjs/toolkit";
import useApi from "../utils/api";


interface Categories{
    results: any[];
}

const initialState: Categories = {
    results: []
}


const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.results = action.payload
        }
    }
})


export const { setCategory } = categorySlice.actions 

export const fetchCategory = () => async (dispatch:any) => {
    const api = useApi()
    try {
        const response:any = await api.getCategories()
        dispatch(setCategory(response?.data[0]?.category))
    }catch{
        console.log('Error fetch category.')
    }
}


export default categorySlice.reducer