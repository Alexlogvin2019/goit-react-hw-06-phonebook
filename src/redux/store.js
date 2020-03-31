// import { createStore } from "redux";
import { combineReducers } from "redux";
// import { applyMiddleware } from "redux";
import { contacts } from "./reducers";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";

// import logger from "redux-logger";
// import thunk from "redux-thunk";

const rootReducer = combineReducers({
  contacts
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"],
  blacklist: ["_persist"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// const middlewares = [persistedReducer]
// const middlewareEnhancer = applyMiddleware(...middlewares)

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: persistedReducer
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});

// export const store = configureStore({
//   reducer,
//   middleware: getDefaultMiddleware({

//   }),
// })

// export const store = createStore(persistedReducer, devToolsEnhancer());
export const persistor = persistStore(store);
