"use client"
import React, { useState } from 'react'

const tabsData = [
  {isActive:true, tabName:"All", id:Math.random()},
  {isActive:false, tabName:"Active", id:Math.random()},
  {isActive:false, tabName:"Completed", id:Math.random()}
]
const Tabs = () => {
    const [tabs, setTabs] = useState(tabsData)
    const makeActive = (id)=>{

const updatedTabs = tabs.map((tab)=>{
  if(tab.id == id){
  return({...tab, isActive:true}) 
    }else{
    return({...tab, isActive:false})
  }
})

setTabs(updatedTabs)
}
  return (
    <div className='flex gap-4'>
           {tabs.map((tab, i)=>{
    return(
        <div
        key={i}
        onClick={()=>{makeActive (tab.id)}} 
        className={`border rounded-lg border-black-500 py-2 px-3
        ${tab.isActive == true ? "bg-green-300" : null} `}>
            {tab.tabName}
        </div>
    )
   })}
    </div>
  )
}


export default Tabs