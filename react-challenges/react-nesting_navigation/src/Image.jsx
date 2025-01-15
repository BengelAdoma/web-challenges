import React from "react"
import Image from './Image'

export default function Image(props){
    return <img className="round-image" src={props.src} alt={props.alt}/>
}