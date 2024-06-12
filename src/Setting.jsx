import React, { useState } from "react";
import {NavLink} from 'react-router-dom'
import './setting.css'

export default function Setting(props){
    const [location, locationBtn] = useState(false)
    const [sets, openSet] = useState([
        {
            icon: <div><span className="material-symbols-outlined set-icon-icon">person</span></div>,
            setting: "Account",
            value: "Account Menu",
            open: false
        },
        {
            icon: <div><span className="material-symbols-outlined set-icon-icon">notifications</span></div>,
            setting: "Notifications",
            value: "Notifications Menu",
            open: false
        }
    ])
    
    const toggleSetting = (index) =>{
        openSet(sets.map((set,i)=>{
            if(i === index){
                set.open = !set.open
            }
            else{
                set.open = false
            }
            return set;
        }))
    }
    return (
        <>
            <div className="setting-section" style={{display: props.Showsetting ? "block" : "none", position: "absolute"}}>
                <h3>Settings</h3>
                <div className="set-list">
                    {sets.map((set,i)=>{
                        return(
                            <div 
                                className={'sets' + (set.open ? 'open' : '')}
                                key={i}
                                onClick={()=>{
                                    toggleSetting(i)
                                }}
                            >
                                <div className="settings">
                                    <div className="set-icon">
                                        {set.icon}
                                        {set.setting}
                                    </div>
                                </div>
                                <div className="set-value">
                                    {set.value}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="location">
                    <div className="set-location-icon">
                        <span className="material-symbols-outlined set-icon-icon">location_on</span>
                        <p>Location</p>
                    </div>
                    <label className="switch">
                        <input type="checkbox" onClick={()=>{locationBtn(!location)}}/>
                        <span className="slider round"></span>
                    </label>
                </div>
                {location && 
                    <div className="location-map" onChange={()=>{locationBtn()}}>
                        <div className="location-text">
                            <p>The Trading Institute</p>
                            <NavLink><span>Change Location</span></NavLink>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14721.474917251418!2d75.88823944999999!3d22.7145323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd89a3cefaf1%3A0x4fa1aec18c224c39!2sThe%20Trading%20Institute!5e0!3m2!1sen!2sin!4v1714564722532!5m2!1sen!2sin" style={{border: 0}} loading="lazy"></iframe>
                    </div>
                }
            </div>
        </>
    )
}