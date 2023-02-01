import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Title from '../components/Title'
import { BsFillFileEarmarkPostFill } from "react-icons/bs"
import { FaUserAlt } from "react-icons/fa"
import { BiCommentDetail } from "react-icons/bi"

export default function Testimonialsapp() {
  const [testimonials,setTestimonials] = useState();
  const [items,setItems] = useState();
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then(response => response.json())
      .then(json => setItems(json))
  },[testimonials])
  return (
    <div className="">
        <Title text="Testimonials"/>
        <Button text="Posts" btnClass={"btn-1"}
            icon={<BsFillFileEarmarkPostFill />}
            onClick={()=> setTestimonials("Posts")}
        />
        <Button text="Users" btnClass={"btn-1"}
            icon={<FaUserAlt />}
            onClick={()=> setTestimonials("Users")}
        />
        <Button text="Comments" btnClass={"btn-1"}
            icon={<BiCommentDetail />}
            onClick={()=> setTestimonials("Comments")}
        />
        <Title text={!testimonials ? "select from above" : testimonials}/>
    </div>
  )
}
