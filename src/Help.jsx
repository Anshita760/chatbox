import React, { useState } from "react";
import './help.css'

export default function Help(props){
    const [faqs, setfaqs] = useState([
        {
            question: "Question 1 here",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corporis eligendi quam harum necessitatibus, unde eveniet, molestias ipsa obcaecati aspernatur tenetur? Officia natus, ea neque non rem similique ipsum voluptate.",
            open: false
        },{
            question: "Question 2 here",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corporis eligendi quam harum necessitatibus, unde eveniet, molestias ipsa obcaecati aspernatur tenetur? Officia natus, ea neque non rem similique ipsum voluptate.",
            open: false
        },{
            question: "Question 3 here",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corporis eligendi quam harum necessitatibus, unde eveniet, molestias ipsa obcaecati aspernatur tenetur? Officia natus, ea neque non rem similique ipsum voluptate.",
            open: false
        },{
            question: "Question 4 here",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corporis eligendi quam harum necessitatibus, unde eveniet, molestias ipsa obcaecati aspernatur tenetur? Officia natus, ea neque non rem similique ipsum voluptate.",
            open: false
        },{
            question: "Question 5 here",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corporis eligendi quam harum necessitatibus, unde eveniet, molestias ipsa obcaecati aspernatur tenetur? Officia natus, ea neque non rem similique ipsum voluptate.",
            open: false
        }
    ])

    const toggleFAQ = (index) =>{
        setfaqs(faqs.map((faq,i)=>{
            if(i === index){
                faq.open = !faq.open
            }
            else{
                faq.open = false
            }
            return faq;
        }))
    }
    return (
        <>
            <div className="help-section" style={{display: props.Showhelp ? "block" : "none", position: "absolute"}}>
                <h3>Help</h3>
                <div className="faqs">
                    {faqs.map((faq, i)=>{
                        return(
                            <div 
                                className={'faq' + (faq.open ? 'open' : '')} 
                                key={i}  
                                onClick={()=>{
                                    toggleFAQ(i)
                                }}>
                                <div className="questions">
                                    {faq.question} 
                                </div>
                                <div className="answer">
                                    {faq.answer}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}