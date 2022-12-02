import { configureStore } from "@reduxjs/toolkit";
import { workerReducer } from "../reducers/workerReducer";

const reducer = {
    worker: workerReducer,
};

const store = configureStore({
    reducer,
    devTool: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export default store;