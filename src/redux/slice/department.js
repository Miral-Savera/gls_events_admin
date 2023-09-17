import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const host = "https://gls-events.onrender.com/admin/";

export const fetchDepts = createAsyncThunk('fetchDepts', async() => {
    const response = await fetch(`${host}department/getdepartment`);
    return response.json();
});

const deptSlice = createSlice({
    name : "department",
    initialState : {
        isLoading : false,
        data : null,
        isError : false,
    },
    extraReducers : (builder) => {
        builder.addCase(fetchDepts.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchDepts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        builder.addCase(fetchDepts.rejected, (state, action) => {
            console.log('Error',action.payload);
            state.isError = true;
        });
    }
});

export default deptSlice.reducer;
