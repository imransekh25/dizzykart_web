"use client"
import Header from '@/components/seller/header'
import Image from 'next/image'
import { AppDispatch, useAppSelector } from '@/redux/store'
import {useDispatch} from "react-redux";
import { addUserName } from '@/redux/slicer/registerSlice';
import App from 'next/app';



export default function Home() {

  const dispatch = useDispatch<AppDispatch>()

  const userName = useAppSelector((state)=> state.registerSlice.userName)
 const setUserName = () => {
      dispatch(addUserName("Sekh"))
 }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div onClick={setUserName} >
             React APP fragment
              <h1>{userName}</h1>
        </div>
    </main>
  )
}
