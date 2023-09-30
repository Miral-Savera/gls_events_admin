import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const host = "https://gls-events.onrender.com/admin/";

export const fetchnotification = createAsyncThunk('fetchnotification', async() => {
    const response = await fetch(`${host}notification/getnotification`);
    return response.json();
});

const eventNotificationSlice = createSlice({
    name : "notification",
    initialState : {
        isLoading : false,
        data : null,
        isError : false,
    },
    extraReducers : (builder) => {
        builder.addCase(fetchnotification.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchnotification.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        builder.addCase(fetchnotification.rejected, (state, action) => {
            console.log('Error',action.payload);
            state.isError = true;
        });
    }
});

export default eventNotificationSlice.reducer;
