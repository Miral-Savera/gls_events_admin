import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const host = "https://leather-jacket-beetle.cyclic.cloud/admin/";

export const fetchFaculty = createAsyncThunk('fetchFaculty', async() => {
    const response = await fetch(`${host}faculty/getfaculty`);
    return response.json();
});

const facultySlice = createSlice({
    name : "course",
    initialState : {
        isLoading : false,
        data : null,
        isError : false,
    },
    extraReducers : (builder) => {
        builder.addCase(fetchFaculty.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchFaculty.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        builder.addCase(fetchFaculty.rejected, (state, action) => {
            console.log('Error',action.payload);
            state.isError = true;
        });
    }
});

export default facultySlice.reducer;