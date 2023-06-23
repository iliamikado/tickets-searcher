import { configureStore} from "@reduxjs/toolkit";
import { ticketSlice } from "./features/tickets/tickets";

export const store = configureStore({
    reducer: {
        tickets: ticketSlice.reducer
    }
});