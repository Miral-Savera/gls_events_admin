import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const host = "https://gls-events.onrender.com/admin/";

export const fetchEventstype = createAsyncThunk('fetchEventstype', async() => {
    const response = await fetch(`${host}eventstype/geteventstype`);
    return response.json();
});

const eventTypeSlice = createSlice({
    name : "eventstype",
    initialState : {
        isLoading : false,
        data : null,
        isError : false,
    },
    extraReducers : (builder) => {
        builder.addCase(fetchEventstype.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchEventstype.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        builder.addCase(fetchEventstype.rejected, (state, action) => {
            console.log('Error',action.payload);
            state.isError = true;
        });
    }
});

export default eventTypeSlice.reducer;
