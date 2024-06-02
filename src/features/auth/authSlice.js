import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import authservice from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"));
const authSlice = createSlice({

    name : 'auth',
    initialState :{
        user : userExist ? userExist : null,
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : ""
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(register.pending, (state,action) =>{
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.message = ""
        })
        .addCase(register.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.message = ""
            state.user = action.payload;
        })
        .addCase(register.rejected, (state,action) =>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
        })

        .addCase(login.pending, (state,action) =>{
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.message = ""
        })
        .addCase(login.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.message = ""
            state.user = action.payload;
        })
        .addCase(login.rejected, (state,action) =>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
        })

        .addCase(logOut.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.message = ""
            state.user = null;
        })
    }

});

export default authSlice.reducer;

export const register = createAsyncThunk( "REGISTER/USER" ,async (formData ,thunkAPI) =>{
    try {
        return await authservice.registerUser(formData);
    } catch (error) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
    }  
});

export const login = createAsyncThunk( "LOGIN/USER" ,async (formData , thunkAPI) =>{
    try {
        return await authservice.loginUser(formData);
    } catch (error) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
    }     
});

export const logOut = createAsyncThunk("LOGOUT/USER", async() =>{
    return localStorage.removeItem("user")
});