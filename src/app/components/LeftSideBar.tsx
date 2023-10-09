import React from 'react'

import Link from 'next/link'
import {BiHomeCircle, BiUser} from 'react-icons/bi'
import {BsBell, BsEnvelope, BsTwitter} from 'react-icons/bs'
import {HiOutlineHashtag} from 'react-icons/hi'
import {HiEnvelope} from 'react-icons/hi2'

const NAVIGATION_ITEMS = [
  {
    title:"Twitter",
    icon: BsTwitter
  },
  {
    title: 'Home',
    icon: BiHomeCircle
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag
  },
  {
    title: 'Notifications',
    icon: BsBell
  },
  {
    title: 'Messages',
    icon: BsEnvelope 
  },
  {
    title: 'Bookmarks',
    icon: HiOutlineHashtag
  },
  {
    title: 'Profile',
    icon: BiUser
  }
];

const LeftSideBar = () => {
  return (
    <section className="sticky top-4 w-[300px] flex flex-col h-screen ">
          <div className="flex-grow overflow-y-auto space-y-4">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6 "
              href={`/${item.title.toLowerCase()}`}
              key={item.title}
            >
              <div>
                <item.icon />
              </div>
              {item.title !== "Twitter" && <div>{item.title}</div>}
            </Link>
          ))}
        <button className="w-[80%] rounded-full bg-secondary py-2 text-2xl text-center text-primary hover:bg-opacity-70 transition-duration-200">
          Post
        </button>        
          </div>  
          <div className='pb-8'>  
          <button className="rounded-full p-2 flex items-center justify-between bg-transparent text-center hover:bg-white/10 transition duration-200 w-full">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-slate-200 w-10 h-10"></div>
              <div className="text-left text-sm">
                <div className="font-semibold">Legion of Dynamic Discord</div> 
                <div className="">@LDD</div></div>
            </div>
          </button>
          </div>
        </section>
  )
}

export default LeftSideBar