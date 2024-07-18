import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInit = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
]

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInit,
    reducers: {
        addTask: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, phoneNum) {
                return {
                    payload: {
                        name,
                        phoneNum,
                        id: nanoid(),
                    }
                }
            }
        },
        deleleContact(state, action) {
            const index = state.findIndex((contact) => contact.id === action.payload);
            state.splice(index, 1);
        },
        
    }
})