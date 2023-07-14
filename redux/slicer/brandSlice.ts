import { createSlice, PayloadAction } from "@reduxjs/toolkit";



type headerState = {
    brandName           : string;
    approvalRequired    : boolean;
    error               : string;
    wantBrandApproval   : boolean;
    showBrandRequestList: boolean;
    brandApproved       : boolean;
};

const initialState = {
    brandApproved:  false,
    brandName: "",
    approvalRequired : false,
    wantBrandApproval : false,
    showBrandRequestList : false,
    error : "",
} as headerState;

export const brandSlice  = createSlice({
    name : 'brandCheck',
    initialState ,
    reducers : {
            addBrand : (state, action: PayloadAction<string>) =>{
                state.brandName = action.payload;
            },
            isBrandApprove : (state, action:  PayloadAction<boolean>) => {
                state.brandApproved = action.payload;
            },

            approvalRequired : (state, action:  PayloadAction<boolean>) =>{
                 state.approvalRequired = action.payload;
            },

            sellerWantBrandApprove : (state, action:  PayloadAction<boolean>) => {
                state.wantBrandApproval = action.payload;
            },

            sellerWantBrandRequestList : (state, action: PayloadAction<boolean>) =>{
                state.showBrandRequestList = action.payload;
            }



    },
}
)
export const {addBrand, isBrandApprove, approvalRequired, sellerWantBrandApprove, sellerWantBrandRequestList} =  brandSlice.actions;

export default brandSlice.reducer;

