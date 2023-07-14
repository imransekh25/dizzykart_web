import { createSlice, PayloadAction } from "@reduxjs/toolkit"



type headerState = {
    userName            : string;
    emailId             : string;
    password            : string;
    error               : string;
    mobileNo            : string;
    emailOtpVerified    : boolean;
    emailOtpGenerated   : boolean;
    mobileNoVerified    : boolean;
    registerSuccess     : boolean;
};

const initialState = {
            emailOtpVerified:  false,
            emailOtpGenerated : false,
            mobileNoVerified : false,
            mobileNo: "",
            userName: "",
            emailId : "",
            password : "",
            error : "",
            registerSuccess: false
       }  as headerState;


export const registerSlice = createSlice(
    {
        name : 'registerUser',
        initialState ,
        reducers : 
        {
           
            addEmailId : (state, action : PayloadAction<string>) =>{
                state.emailId = action.payload
            },

            addMobileNo : (state, action : PayloadAction<string>) => {
                state.mobileNo = action.payload
            },

            isEmailOtpApproved : (state, action : PayloadAction<boolean>) => {
                state.emailOtpVerified = action.payload
            },

            isEmailOtpGenerated : (state, action : PayloadAction<boolean>) => {
                state.emailOtpGenerated = action.payload; 
            },

            addUserName : (state, action : PayloadAction<string>) => {
                state.userName = action.payload;
            },

            addPassword : (state, action : PayloadAction<string>) => {
                state.password = action.payload
            },

            isRegsiterSucceed : (state, action : PayloadAction<boolean>) => {
                state.registerSuccess = action.payload;
            },

            isMobileNoVerified : (state, action : PayloadAction<boolean>) => {
                state.mobileNoVerified = action.payload
            }

        }
    }
   
)

export const {addEmailId, isEmailOtpGenerated, addUserName, addMobileNo,
     addPassword, isEmailOtpApproved, isRegsiterSucceed, isMobileNoVerified} = registerSlice.actions;
export default registerSlice.reducer;