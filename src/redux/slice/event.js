import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEvents = createAsyncThunk('fetchEvents', async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
});

const eventSlice = createSlice({
    name : "event",
    initialState : {
        isLoading : false,
        data : null,
        isError : false,
    },
    extraReducers : (builder) => {
        builder.addCase(fetchEvents.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchEvents.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        builder.addCase(fetchEvents.rejected, (state, action) => {
            console.log('Error',action.payload);
            state.isError = true;
        });
    }
});

export default eventSlice.reducer;