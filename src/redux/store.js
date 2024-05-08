import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from '../redux/filtersSlice';
import { contactsReducer } from '../redux/contactsSlice';
import { persistStore, persistReducer,
  FLUSH, REHYDRATE, PAUSE,  PERSIST, PURGE,  REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';


const ContactsPersistConfig = {
  key: "contactsArray",
  storage, 
  whitelist: ["items"],
}
const persContactsReduces = persistReducer(ContactsPersistConfig, contactsReducer)

export const store = configureStore({
  reducer: {
    contacts: persContactsReduces,
    filters: filtersReducer,
  },
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

});



export const persistor = persistStore(store);