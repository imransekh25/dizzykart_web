"use client"
import React, {useState, useEffect} from 'react'
import { fetchAllCategory } from '@/components/seller/category/fetchAllCategory';
import { CategoryResponse } from '@/components/api/interface/categoryResponse';
import { useDispatch } from 'react-redux';
import { addChildCategoryList } from '@/redux/slicer/categorySlice';
import './addProduct.css';
import Image from 'next/image';

const categorySelection : React.FC = () => {

const[categoryResponse, setCategoryResponse] = useState<CategoryResponse[]>([]);
const dispatch = useDispatch();

 
const getParentCategory = async () => 
fetchAllCategory("product/category/findByAllParents").then(
        (res) => {
            console.log(res);
            setCategoryResponse(res);
         }
    )

    useEffect(() =>
    {
        getParentCategory();
     }, [])
    return (
        <div className="column cat-box scroll">
            <form>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Category</th>
                    </tr>
                </thead> 
                <tbody>
                {
                categoryResponse.map((res : CategoryResponse)=> 
                        {
                return(
                    <tr className='cat-sm-box' key={res.parentCategoryName}>
                        <td>
                            <div className='column'>
                                <Image className='cat-img'
                                src={ res.logoUrl}
                                alt='Category'
                                width={100}
                                />
                            </div>
                            <a className='column align-right '
                             onClick={ 
                                ()=> {dispatch(addChildCategoryList(res.childCategoryResponseDTO))}}>
                                {res.parentCategoryName}
                            </a> 
                          </td>
                    </tr>)
                })
          
         }

                </tbody>
         </table>
         </form>
       </div>
  
    )
}

export default categorySelection