import { ChildCategoryResponseDTO } from "@/components/api/interface/childCategory";
import {  OriginalCategoryResponseDTO } from "@/components/api/interface/originalCategoriey";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

    
type headerState = {
    childCategoryList : Array<ChildCategoryResponseDTO>,
    originalCategoryList : Array<OriginalCategoryResponseDTO>,
    finalOriginalCategory : string,
    showOriginalCategoryList : boolean,
    showFinalCategoryWidget : boolean,
    showChildCategoryList : boolean,
    showCategorySelection : boolean,
}
  
   const initialState = {
    childCategoryList : [],
    originalCategoryList : [],
    showOriginalCategoryList : false,
    finalOriginalCategory : "",
    showFinalCategoryWidget : false,
    showChildCategoryList : false,
    showCategorySelection : true
   } as headerState
   


export const categorySlice = createSlice
(
    {
    name : 'product',
    initialState,
    reducers : {
       
       
        
        addChildCategoryList : (state, action: PayloadAction<ChildCategoryResponseDTO []>) => {
            state.childCategoryList = action.payload;
        },

        addOriginalCategoryList : (state, action: PayloadAction<OriginalCategoryResponseDTO[]>) => {
            state.originalCategoryList = action.payload;
        },

        wantToShowChildCategoryList : (state, action : PayloadAction<boolean>) => {
            state.showChildCategoryList = action.payload
        },

        addFinalOriginalCategory : (state, action : PayloadAction<string>) => {
            state.finalOriginalCategory = action.payload
        },

        wantToShowOriginalCategory : (state, action : PayloadAction<boolean>) => {
            state.showOriginalCategoryList = action.payload
        },
        wantToShowOriginalCategoryWidget : (state , action : PayloadAction<boolean>) => {
            state.showFinalCategoryWidget = action.payload
        },

        wantToShowCategorySelection : (state , action : PayloadAction<boolean>) => {
            state.showFinalCategoryWidget = action.payload
        },

        
    }   
})

export const { wantToShowChildCategoryList, addChildCategoryList, addOriginalCategoryList, addFinalOriginalCategory, 
    wantToShowOriginalCategory, wantToShowOriginalCategoryWidget, wantToShowCategorySelection} = categorySlice.actions;

export default  categorySlice.reducer;


