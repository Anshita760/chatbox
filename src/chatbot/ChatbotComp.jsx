import React from "react";
import {Chatbot} from 'react-chatbot-kit'
import config from'./config'
import Actionprovider from './Actionprovider'
import Messageparser from "./Messageparser";

export default function ChatbotComp (){
    return(
        <>
            <Chatbot
                config={config}
                messageParser={Messageparser}
                actionProvider={Actionprovider}
            />
        </>
    )
}