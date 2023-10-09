import React from 'react'

import { BsChat, BsDot, BsThreeDots, } from "react-icons/bs";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { IoStatsChart, IoShareOutline } from "react-icons/io5";

const MainComponent = () => {
  return (
    <main className="flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold p-6">Home</h1>
          <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-4 space-x-2 border-gray-600 relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
            <div className="flex flex-col w-full h-full">
              <input 
                type="text" 
                className="w-full h-full placeholder:text-xl placeholder:text-gray-600 bg-transparent outline-none p-2 focus:border-primary-foreground focus:border" 
                placeholder="Text here"
              />
              <div className="w-full justify-between items-center flex">
                <div>  </div>  
                <div className="w-full max-w-[20%]">
                  <button className="rounded-full bg-secondary text-primary py-1 w-full text-lg text-center hover:bg-opacity-70 transition-duration-200">
                    Post
                  </button> 
                </div> 
              </div> 
            </div> 
          </div>   
          <div className="flex flex-col">
            {Array.from({length:5}).map((_,i) => (
            <div
              key={i} 
              className="border-b-[0.5px] p-4 flex space-x-4 border-gray-600"
            >
              <div>
                <div className="w-10 h-10 bg-slate-200 rounded-full" />
              </div>
              <div className="flex flex-col w-full">
                <div className="w-full flex py-1.5">
                  <div className="flex items-center space-x-2 w-full ">
                    <div className="font-bold">Spotti</div>
                    <div className="text-gray-500">@Spötters</div>
                    <div> <BsDot/> </div>
                    <div className="text-gray-500">1h ago</div>
                </div>
                  <div className="py-1"><BsThreeDots /></div>
                </div>
                <div className="text-white text-sm"></div>
                <div className="bg-slate-400 w-full h-96 rounded"></div>
                <div className="flex space-x-24 pt-4 px-2">
                  <div><BsChat /></div>
                  <div><AiOutlineRetweet /></div>
                  <div><AiOutlineHeart /></div>
                  <div><IoStatsChart /></div>
                  <div><IoShareOutline /></div></div>
              </div>
            </div>
            ))}
          </div>
        </main> 
  )
}

export default MainComponent