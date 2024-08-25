import React, { useContext } from 'react'
import style from './Main.module.css'
import './Main.css'
import pic from './../../Assets/66b777a671c6a_download.jpeg'
import gallery from './../../Assets/gallery_icon.png'
import mic from './../../Assets/mic_icon.png'
import send from './../../Assets/send_icon.png'
import { Context } from '../../context/Context'
import geminiPic from './../../Assets/gemini_icon.png'



export default function Main() {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <>
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={pic} alt="" />
      </div>

      <div className="main-container">

        {!showResult
        ?<>
          <div className="greet">
            <h3 className='h1'><span>Hello, Dev.</span></h3>
            <h3 className='h1'>How can I help you today?</h3>
          </div>

          <div className="cards ">
            
            <div className="card ">
                <p className="card-text">Evaluate and rank common camera categories</p>
                <i className="fa-regular fa-lightbulb"></i>
            </div>

            <div className="card">
                <p className="card-text">Explain what the keto diet is in simple terms</p>
                <i className="fa-regular fa-lightbulb"></i>
            </div>

            <div className="card">
              <p className="card-text">Help me find YouTube videos to care for a specific plant</p>
              <i className="fa-brands fa-youtube text-danger"></i>
            </div>

            <div className="card">
              <p className="card-text">Brainstorm presentation ideas about a topic</p>
              <i className="fa-regular fa-compass"></i>
            </div>

          </div>
        </>
        :
          <div className='result'>
              <div className='result-title'>
                <img src={pic} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={geminiPic} alt="" />
                {loading
                    ?
                    <div className="loader">
                      <hr />
                      <hr />
                      <hr />
                    </div>
                    : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
                
              </div>
          </div>
        }

        

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
            <div>
               <img src={gallery} alt="Upload photo" />
               <img src={mic} alt="Use Microphone" />
               {input?<img onClick={()=>onSent()} src={send} alt="" />:null}

            </div>
          </div>
          <p className='BottomInfo'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>
        
      </div>
    </div>
    
      
    </>
  )
}
