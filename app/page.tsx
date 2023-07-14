"use client"
import { AppDispatch, useAppSelector } from '@/redux/store'
import {useDispatch} from "react-redux";
import { addUserName } from '@/redux/slicer/registerSlice';
import App from 'next/app';
import Link from 'next/link';
import { Console } from 'console';



export default function Home() {

  // const dispatch = useDispatch<AppDispatch
 
const test = ()  =>
{
  console.log("My name");
}
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div >
             React APP fragment
            
              <Link href="/dizzykart/">Product</Link>
              <p onClick={test}>Test</p>
        </div>
    </main>
  )
}
