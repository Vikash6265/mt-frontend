import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { crudService } from "./crudService";

const d = localStorage.getItem("crud") != null ? JSON.parse(localStorage.getItem("crud")) : [];

const crudSlice = createSlice({

    name : "crud",
    initialState :{
        allData : d,
        edit :{
            editData : {},
            isEdit : false,
        },
        archivedData: [],
        isLoading : false,
        isError : false,
        isSuccess : false,
    },
    reducers :{
        edit : (state,action) =>{
            return {
               ...state,
               edit : {
                  editData : action.payload,
                  isEdit : true,
               }
            }
         },

         archiveData: (state, action) => {
            const index = state.allData.findIndex(data => data._id === action.payload);
            if (index !== -1) {
              const dataToArchive = state.allData.splice(index, 1)[0];
              state.archivedData.push(dataToArchive);
            }
          },
          unarchiveData: (state, action) => {
            const index = state.archivedData.findIndex(data => data._id === action.payload);
            if (index !== -1) {
              const dataToUnarchive = state.archivedData.splice(index, 1)[0];
              state.allData.push(dataToUnarchive);
            }
          },

    },
    extraReducers : (builder) =>{
        builder

        .addCase(readData.pending,(state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
         })
         .addCase(readData.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.allCard = action.payload;
         })
         .addCase(readData.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
         })

        .addCase(createData.pending,(state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        })
        .addCase(createData.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.allData = [...state.allData,action.payload];
            localStorage.setItem("crud",JSON.stringify(state.allData))
        })
        .addCase(createData.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
        })

        .addCase(deleteData.pending,(state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        })
        .addCase(deleteData.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.allData = state.allData.filter(data => data._id !== action.meta.arg );
            localStorage.setItem("crud",JSON.stringify(state.allData));
            window.location.reload();
        })
        .addCase(deleteData.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
        })

        .addCase(updateData.pending,(state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        })
        .addCase(updateData.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.allData = state.allData.map(item => item._id === action.payload._id ? action.payload : item);
            state.edit = {editData : {} , isEdit : false};
        })
        .addCase(updateData.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
        })
    }
});

export const {edit,archiveData,unarchiveData} = crudSlice.actions;
export default crudSlice.reducer;

export const readData = createAsyncThunk("CRUD/GET", async()=>{
    try {
        return await crudService.getData();
    } catch (error) {
       console.log(error);
    }
}) 

export const createData = createAsyncThunk("CRUD/ADD", async(title)=>{
    try {
        return await crudService.addData(title);
    } catch (error) {
        console.log(error);
    }
}) 

export const deleteData = createAsyncThunk("CRUD/DELETE", async(_id)=>{
    try {
        return await crudService.removeData(_id);
    } catch (error) {
        console.log(error);
    }
}) 

export const updateData = createAsyncThunk("CRUD/UPDATE", async(updateItem)=>{
    try {
        return await crudService.updatedData(updateItem);
    } catch (error) {
        console.log(error);
    }
}) 
