import { TicketsState } from "./tickets";

const selectTicketsModule = (state: {tickets: TicketsState}) => state.tickets;

export const selectTicketsCount = (state: {tickets: TicketsState}, movieId: string) => selectTicketsModule(state).tickets[movieId] || 0;
export const selectAllTicketsCount = (state: {tickets: TicketsState}) => selectTicketsModule(state).count;
export const selectMoviesIds = (state: {tickets: TicketsState}) => Object.keys(selectTicketsModule(state).tickets);