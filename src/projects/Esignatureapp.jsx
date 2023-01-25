import React, { useState } from 'react'
import Title from '../components/Title'

export default function Esignatureapp() {
  const inputStyle = {
        border: "none"
  }
  const [ name , setName ] = useState("");
  const [ date , setDate ] = useState("");
  return (
    <div className="container text-center">
        <Title text={name} />
        <Title classes="subtitle text-center" text={date} />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, doloribus? Ipsa accusantium modi enim repudiandae odit reiciendis optio, facere voluptatibus quibusdam eos, at et iusto! Aut est corrupti assumenda aliquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, doloribus? Ipsa accusantium modi enim repudiandae odit reiciendis optio, facere voluptatibus quibusdam eos, at et iusto! Aut est corrupti assumenda aliquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, doloribus? Ipsa accusantium modi enim repudiandae odit reiciendis optio, facere voluptatibus quibusdam eos, at et iusto! Aut est corrupti assumenda aliquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, doloribus? Ipsa accusantium modi enim repudiandae odit reiciendis optio, facere voluptatibus quibusdam eos, at et iusto! Aut est corrupti assumenda aliquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, doloribus? Ipsa accusantium modi enim repudiandae odit reiciendis optio, facere voluptatibus quibusdam eos, at et iusto! Aut est corrupti assumenda aliquam.
        </p>
        <footer style={{
            justifyContent: "space-around",
            position: "relative",
            top: "40vh"
        }}>
            <input type="date" style={inputStyle} 
                value={date}
                onChange={event => setDate(event.target.value)}
            />
            <input type="text" placeholder="Your name" 
                value={name}
                onChange={event => setName(event.target.value)}
            />
        </footer>
    </div>
  )
}
