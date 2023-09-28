import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const host = "https://leather-jacket-beetle.cyclic.cloud/admin/";

export const fetchCourse = createAsyncThunk('fetchCourse', async() => {
    const response = await fetch(`${host}course/getcourse`);
    return response.json();
});

const courseSlice = createSlice({
    name : "course",
    initialState : {
        isLoading : false,
        data : null,
        isError : false,
    },
    extraReducers : (builder) => {
        builder.addCase(fetchCourse.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchCourse.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        builder.addCase(fetchCourse.rejected, (state, action) => {
            console.log('Error',action.payload);
            state.isError = true;
        });
    }
});

export default courseSlice.reducer;