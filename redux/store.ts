import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./slicer/registerSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { TypedUseSelectorHook } from "react-redux/es/types";
export const store = configureStore({
   reducer : {
    registerSlice,
   }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;