import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlice";
import { filterReducer } from "./filtersSlice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "contacts",
    storage,
}

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filters: filterReducer,
    },
})

export const persistor = persistStore(store);