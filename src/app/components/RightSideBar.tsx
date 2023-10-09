import React from 'react'

import { BsSearch } from "react-icons/bs";

const RightSideBar = () => {
  return (
    <section className="fixed flex flex-col space-y-4 ml-[900px]  pt-2 px-6" >
        <div className="pt-2">
          <div className="relative w-full h-full">
            <label htmlFor="searchBox" className="px-3 absolute h-full flex items-center justify-center">
              <BsSearch className="w-5 h-5 text-gray-500"/>
            </label>
            <input 
              id="searchBox" 
              type="text" 
              placeholder="Search Twitter" 
              className="px-10 outline-none focus:border-primary-foreground focus:border bg-neutral-900/90 w-[90%] h-full rounded-full py-2"/>        
          </div>
        </div>
        <div>

        </div>
        <div></div>  
        </section>
  )
}

export default RightSideBar