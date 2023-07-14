"use client"
import { AuthHeader } from '@/components/api/authHeader'
import { CategoryResponse } from '@/components/api/interface/categoryResponse';
import axios , {AxiosResponse} from 'axios'


const tokenCode = localStorage.getItem("TOKEN");

const config : AuthHeader = {
        baseUrl : "http://localhost:8080/",
        headers : 
            {
                "Authorization" : tokenCode,
            },
        method : 'get'
}
export const fetchAllCategory = async (url: string) : Promise<CategoryResponse[]> =>{
try{
   const response  = await axios.get(config.baseUrl+url, config.headers);
   console.log(response);
   return response.data.parenCategoryList;
  } catch (error) 
  {
    console.error(error);
    return [];
  }
}
 