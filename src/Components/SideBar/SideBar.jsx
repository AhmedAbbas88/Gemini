import React, { useContext, useState } from 'react';
import style from './SideBar.module.css'
import './SideBar.css'
import { Context } from '../../context/Context';

function SideBar() {
    const [extended, setExtended] = useState(false)
    const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context)

    const loadPrompt = async (prompt) => {
      setRecentPrompt(prompt)
      await onSent(prompt)
    } 

  return (
    <>
      <div className="sidebar">

        <div className="top">
          <i onClick={()=>setExtended(prev=>!prev)} className="fa-solid fa-bars menu"></i>
          <div onClick={()=>newChat()} className="NewChat">
            <i className="fa-solid fa-plus"></i>
            {extended? <span>New chat</span>:null}
          </div>

            {extended?<div className="recent">
            <p className="recent-title">Recent</p>
            {
            prevPrompts.map((item,index)=>{
              return(
                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                  <i className="fa-regular fa-message"></i>
                  <span>{item}</span>
                </div>
              )
            })}
            
          </div>
          :null
        }

          
        </div>

        <div className="bottom">

          <div className="bottom-item recent-entry">
            <i className="fa-regular fa-circle-question"></i>
            {extended? <span>Help</span> : null}
          </div>

          <div className="bottom-item recent-entry">
            <i className="fa-solid fa-clock-rotate-left"></i>
            {extended? <span>Activity</span> : null}
          </div>

          <div className="bottom-item recent-entry">
            <i className="fa-solid fa-gear"></i>
            {extended? <span>Settings</span> : null}
          </div>

        </div>
      </div>
    </>
  )
}

export default SideBar