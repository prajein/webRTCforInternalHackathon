import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/AuthSlice";
import { meetingsSlice } from "./auth/MeetingSlice";

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        meetings: meetingsSlice.reducer,
    },
}) 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;