import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from "nanoid";
import tasksInitialState from "../contacts.json"

const contactsSlice = createSlice({
  name: "contacts",
	initialState: tasksInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: { id: nanoid(5), name, number}};
      },
    },
      deleteContact(state, action) {
          state.items = state.items.filter((item) => item.id !== action.payload)}
    },
    });

export const { addContacts, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts;
export const contactsReducer = contactsSlice.reducer;

