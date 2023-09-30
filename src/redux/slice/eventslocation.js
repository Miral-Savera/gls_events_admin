import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const host = "https://gls-events.onrender.com/admin/";

export const fetcheventlocation = createAsyncThunk('fetcheventlocation', async() => {
    const response = await fetch(`${host}eventlocation/geteventlocation`);
    return response.json();
});

const eventLocationSlice = createSlice({
    name : "eventlocation",
    initialState : {
        isLoading : false,
        data : null,
        isError : false,
    },
    extraReducers : (builder) => {
        builder.addCase(fetcheventlocation.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(fetcheventlocation.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        builder.addCase(fetcheventlocation.rejected, (state, action) => {
            console.log('Error',action.payload);
            state.isError = true;
        });
    }
});

export default eventLocationSlice.reducer;