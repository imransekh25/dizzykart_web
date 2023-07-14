"use client"
import React from 'react'
import CategorySelection from './categorySelection'
import { useAppSelector } from '@/redux/store'


const page = () => {
  
  const showCategorySection = useAppSelector((state)=> state.categorySlice.showCategorySelection);

    return (
    <div> 
      { showCategorySection &&
        <CategorySelection/>
      }
        

    </div>
  )
}

export default page