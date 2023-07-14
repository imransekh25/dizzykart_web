import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { TypedUseSelectorHook } from "react-redux/es/types";
import categorySlice from "./slicer/categorySlice";
import registerSlice from "./slicer/registerSlice";
import brandSlice from "./slicer/brandSlice";
export const store = configureStore({
   reducer : {
    registerSlice,
    brandSlice,
    categorySlice,

   }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;