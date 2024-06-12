import React, { useState } from "react";
import './chatting.css'

const Chatting = (props) => {
    const [messages, setMessages] = useState([]) // state hold current message
    const [inputValue, setinputValue] = useState('') // state hold current input value

    function handleMessages (){
        if(inputValue.trim() === "")  // Check if input value is not empty   // trim() is used to remove whitespaces or tab in the input field. It returns a new string with the whitespace removed, leaving the original string unchanged.
        {
            return;
        }  
        setMessages([...messages, {text: inputValue}])    // Add new message to messages state
        setinputValue('')    // Clear input field
    }
  return (
    <>
        <div className="chat-section" style={{visibility: props.Showchat ? "visible" : "hidden", position: "absolute"}}>
            <div className="display-chat">
                <div className= "admin-chat">
                    <span className="material-symbols-outlined admin-text1-person">support_agent</span>
                    <div className="admin-chat-text admin-text1">
                        <p>Hi </p>
                    </div>
                </div>
                <div className="admin-chat">
                <span className="material-symbols-outlined admin-text2-person">support_agent</span>
                    <div className="admin-chat-text admin-text2">
                        <p>How are you?</p>
                    </div>
                </div>
                <div className="user-chat">
                        {messages.map((message, index)=>(
                            <div className="user-chat-text">
                                <p key={index}>{message.text}</p>
                                <span className="material-symbols-outlined user-text4-person">person</span>
                            </div>
                        ))}
                </div>
            </div>
            <div className="type-text">
                <input 
                    type="text" 
                    placeholder="Type something here..." 
                    value={inputValue} 
                    onChange={(e)=>{setinputValue(e.target.value)}} 
                    onKeyDown={(e)=>{
                        if(e.key === 'Enter'){
                            handleMessages();
                        }}
                    }/>
            </div>
        </div>
    </>
  )
}

export default Chatting
