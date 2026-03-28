import React from 'react'

const tabs = [
  {isActive:true, tabName:"All", id:Math.random()},
  {isActive:false, tabName:"Active", id:Math.random()},
  {isActive:false, tabName:"Completed", id:Math.random()}]

const makeActive = (id)=>{
console.log("id", id);
}
const Tabs = () => {
  return (
    <div className='flex gap-3'>
           {tabs.map((tab)=>{
    return(
        <button 
        onClick={()=>{makeActive(tab.id)}}
        className='border-2 rounded-xl border-blue-400 p-2'>
            {tab.tabName}
        </button>
    )
   })}
    </div>
  )

}


export default Tabs