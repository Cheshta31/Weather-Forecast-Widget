import React, { useEffect, useState } from "react";
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'

const MiniCard = ({ time, temp, iconString}) => {
    const[icon,setIcon] = useState()
    useEffect( () => {
        if(iconString)
        {
            if(iconString.toLowerCase().includes('cloud'))
            {
                setIcon(cloud)
            }
            if(iconString.toLowerCase().includes('clear'))
            {
                setIcon(sun)
            }
            if(iconString.toLowerCase().includes('rain'))
            {
                setIcon(rain)
            }
            if(iconString.toLowerCase().includes('fog'))
            {
                setIcon(fog)
            }
            if(iconString.toLowerCase().includes('snow'))
            {
                setIcon(snow)
            }
            if(iconString.toLowerCase().includes('thunder'))
            {
                setIcon(storm)
            }
            if(iconString.toLowerCase().includes('wind'))
            {
                setIcon(wind)
            }
        }
    },[iconString])
    return (
        <div className="glassCard w-[10rem] h-[10rem] p-4 flex flex-col">
            <p className="text-center"> {new Date(time).toLocaleTimeString('en',{weekday : 'long'}).split(" ")[0]} 
            </p>
            <hr></hr>
            <div className="w-full flex justify-center items-center flex-1 ">
                <img src={icon} alt="icon unavailable" className="w-[4rem] h-[4rem] ">
                </img>
            </div>
            <p className="text-center font-bold"> {temp}&deg;C </p>
        </div>
    )
}

export default MiniCard