'use client'
import { useState, useEffect, useRef } from 'react';

const Header = () => {
const[authenticated, setAuthenticated] = useState<Boolean>(false);
let loggedInUserDetails = useRef(String);

useEffect(()=> {  
        loggedInUserDetails.current.apply(localStorage.getItem('IS_AUTHENTICATED')); 
      if( loggedInUserDetails != null)
      {
          setAuthenticated(true);
      }
      else 
      {
        setAuthenticated(false);
      }

   }, []);

   return (
   <div>
        <div className='row'>  
            <nav className='navbar font-link bg-lime-50' style= {{backgroundColor : '#ffffff'}} >
                <div className='container'>
                     <a className='navbar-brand' href="/"> 
                        <img 
                        src= {require('../../public/dizzyLog.webp')}
                        height= "55"
                        width="100"

                        /> 
         </a>
         </div>
         <b className='navbar-toggler' aria-controls='basic-navbar-nav'/>
         <div className='collapse navbar-collapse' id= 'basic-navbar-nav'>
      
            <nav className= "me-auto " style={{color : 'black'}}>
               <div className='col-sm-2'>
               <b className='nav-link' ref={"/"} style={{color : 'blue'}} >Home</b>
               </div>
              
            { authenticated == true &&
           
               <a className='ms-1 ml-1'>
                    <div className='dropdown-menu' style={{color : 'black'}}>Products
                            <b className='dropdown-item' style={{color : "#000000"}} >My Products</b>
                            <b className='dropdown-item'> Add Product</b>
                            <b className='dropdown-item'> Apply Brand Approval </b>
                            <b className='dropdown-item'>Track Brand Approval Request</b>
                     </div>
               </a>}
               { authenticated == true &&
               <a className='ms-1 ml-1'>
                    <div className='dropdown-menu' style={{color : 'black'}}>Products
                            <b className='dropdown-item' style={{color : "#000000"}} >My Products</b>
                            <b className='dropdown-item'> Add Product</b>
                            <b className='dropdown-item'> Apply Brand Approval </b>
                            <b className='dropdown-item'>Track Brand Approval Request</b>
                    </div>
               </a>}
               { authenticated == true &&
               <a className='ms-1 ml-1'>
                    <div className='dropdown-menu' style={{color : 'black'}}>Products
                        <b className='dropdown-item' style={{color : "#000000"}} >My Products</b>
                        <b className='dropdown-item'> Add Product</b>
                        <b className='dropdown-item'> Apply Brand Approval </b>
                        <b className='dropdown-item'>Track Brand Approval Request</b>
                     </div>
               </a>} 
         
         { authenticated == true &&
            <>
            <a className='ms-1 ml-1'>
               <div className='dropdown-menu' style={{color : 'black'}}>Products
               <b className='dropdown-item' style={{color : "#000000"}} >My Products</b>
               <b className='dropdown-item'> Add Product</b>
               <b className='dropdown-item'> Apply Brand Approval </b>
               <b className='dropdown-item'>Track Brand Approval Request</b>
               </div>
               </a>

            </>
         }
        
        { authenticated == true &&    
            <a className='ms-1 ml-1'>
               <div className='dropdown-menu' style={{color : 'black'}}>Products
                    <b className='dropdown-item' style={{color : "#000000"}} >My Products</b>
                    <b className='dropdown-item'> Add Product</b>
                    <b className='dropdown-item'> Apply Brand Approval </b>
                    <b className='dropdown-item'>Track Brand Approval Request</b>
                    </div>
               </a>
            }
         </nav>
      </div>    
   </nav>
   </div>
</div>
   )

}
export default Header;