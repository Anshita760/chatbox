import React, { useState } from "react";
import Draggable from 'react-draggable'
import Help from './Help'
import Setting from "./Setting";
import Chatting from "./Chatting";
import './App.css';

export default function ChatBox (){
    const [open, setopen] = useState(false)
    const [max, setmax] = useState(false)
    const [min, setmin] = useState(false)
    const [activeComponent, setactiveComponent] = useState('comp1')  // state to manage component rendering one by one
    
    // handle left panel background color when active
    const [leftPanelbg1, setLeftPanelbg1] = useState(true)
    function handleleftpanelbg1(){
        setLeftPanelbg1(!leftPanelbg1)
        setLeftPanelbg2(true)
        setLeftPanelbg3(true)
    }
    const [leftPanelbg2, setLeftPanelbg2] = useState(true)
    function handleleftpanelbg2(){
        setLeftPanelbg2(!leftPanelbg2)
        setLeftPanelbg1(true)
        setLeftPanelbg3(true)
    }
    const [leftPanelbg3, setLeftPanelbg3] = useState(true)
    function handleleftpanelbg3(){
        setLeftPanelbg3(!leftPanelbg3)
        setLeftPanelbg1(true)
        setLeftPanelbg2(true)
    }

    return(
        <>
            <div className="chat-box-btn" onClick={()=>{setopen(!open)}}>
                {open ? (
                    <span className="material-symbols-outlined">close</span>
                ):(
                    <span className="material-symbols-outlined">forum</span>
                )}
            </div>
                
            {open && 
            <Draggable>
                <div className="chat-window" style={{width: max ? '50%': min, height: min ? '20%' : max}} onChange={()=>{setmax()}}>
                    <div className="nav">
                        <h3>Chat Assistant</h3>
                        <div className="nav-btn">
                            <div className="round-btn-div" onClick={()=>{setmin(!min)}}>
                                {min ? (
                                    <span className="material-symbols-outlined minwindow-btn">web_asset</span>
                                ) : (
                                    <span className="minimize">-</span>
                                )}
                            </div>
                            <div className="round-btn-div" onClick={()=>{setmax(!max)}}>
                                {max ? 
                                (
                                    <span className="material-symbols-outlined maximize-btn">close_fullscreen</span>
                                ) : (
                                    <span className="material-symbols-outlined maximize-btn">check_box_outline_blank</span>
                                )}
                            </div>
                            <div className="round-btn-div">
                                <span className="material-symbols-outlined close-icon" onClick={()=>{setopen(!open)}}>close</span>
                            </div>
                        </div>
                    </div>
                    <div className="chatmain">
                        <div className="left-panel">
                            <div className={leftPanelbg1 ? "left-panel-icon" : "left-panel-icon-active"} onClick={()=>{handleleftpanelbg1(); setactiveComponent('comp1')}}>
                                <span className="material-symbols-outlined">sms</span>
                            </div>
                            <div className={leftPanelbg2 ? "left-panel-icon" : "left-panel-icon-active"} onClick={()=>{handleleftpanelbg2(); setactiveComponent('comp2')}}>
                                <span className="material-symbols-outlined">settings</span>
                            </div>
                            <div className={leftPanelbg3 ? "left-panel-icon" : "left-panel-icon-active"} onClick={()=>{handleleftpanelbg3(); setactiveComponent('comp3')}}>
                                <span className="material-symbols-outlined">help</span>
                            </div>
                        </div>
                        <div className="open-comp-section">
                            {activeComponent === 'comp1' && <Chatting Showchat/>}
                            {activeComponent === 'comp2' && <Setting Showsetting/>}
                            {activeComponent === 'comp3' && <Help Showhelp/>}
                        </div>
                    </div>
                </div>
            </Draggable>
            }
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        </>
    )
}