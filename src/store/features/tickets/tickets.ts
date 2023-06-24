import { createSlice } from '@reduxjs/toolkit';

export interface TicketsState {
    tickets: Record<string, number>,
    count: number
}

export const ticketSlice = createSlice({
    name: 'tickets',
    initialState: {
        tickets: {},
        count: 0
    },
    reducers: {
        addTicket: (state: TicketsState, {payload}: {payload: string}) => {
            const count = state.tickets[payload] || 0;
            state.tickets[payload] = count + 1;
            state.count++;
        },
        removeTicket: (state: TicketsState, {payload}: {payload: string}) => {
            if (state.tickets[payload] === undefined) {
                return;
            }
            state.count--;
            if (state.tickets[payload] === 1) {
                delete state.tickets[payload];
                return;
            }
            state.tickets[payload] -= 1;
        },
        removeAllTickets: (state: TicketsState, {payload}: {payload: string}) => {
            if (state.tickets[payload] === undefined) {
                return;
            }
            state.count -= state.tickets[payload];
            delete state.tickets[payload];
        }
    }
});