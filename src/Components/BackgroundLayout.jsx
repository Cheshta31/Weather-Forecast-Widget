import React from "react";
import { useStateContext } from "../Context";
import { useState,useEffect } from "react";
import Clear from '../assets/images/Clear.jpg'
import Cloudy from '../assets/images/Cloudy.jpg';
import Fog from '../assets/images/fog.png'
import Rainy from '../assets/images/Rainy.jpg'
import Snow from '../assets/images/snow.jpg'
import Stormy from '../assets/images/Stormy.jpg'
import Sunny from '../assets/images/Sunny.jpg'


const BackgroundLayout = () => {
    const {weather} = useStateContext()
    const [image,setImage] = useState(Clear)
    //console.log(weather);

    useEffect  ( () => {
        if(weather.conditions) {
            let imageString = weather.conditions
            if(imageString.toLowerCase().includes('clear'))
            {
                setImage(Clear)
            }
            else if(imageString.toLowerCase().includes('cloudy'))
            {
                setImage(Cloudy)
            }
            else if(imageString.toLowerCase().includes('fog'))
            {
                setImage(Fog)
            }
            else if(imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower'))
            {
                setImage(Rainy)
            }
            else if(imageString.toLowerCase().includes('snow'))
            {
                setImage(Snow)
            }
            else if(imageString.toLowerCase().includes('storm') || imageString.toLowerCase().includes('thunder'))
            {
                setImage(Stormy)
            }
        }
    },[weather])
    return (
        <img src={image} alt="weather_image" className="h-screen w-full fixed left-0 top-0 -z-[10]"></img>
    )
}
export default BackgroundLayout