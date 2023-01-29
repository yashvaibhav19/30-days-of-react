import React from 'react'
import Button from '../components/Button'
import Title from '../components/Title'
import { BsFillFileEarmarkPostFill } from "react-icons/bs"
import { FaUserAlt } from "react-icons/fa"
import { BiCommentDetail } from "react-icons/bi"

export default function Testimonialsapp() {
  const handleClick = (event) => {
    console.log('button clicked')
  }
  return (
    <div className="">
        <Title text="Testimonials"/>
        <Button text="Posts" btnClass={"btn-1"}
            icon={<BsFillFileEarmarkPostFill />}
            onClick={handleClick}
        />
        <Button text="Users" btnClass={"btn-1"}
            icon={<FaUserAlt />}
            onClick={handleClick}
        />
        <Button text="Comments" btnClass={"btn-1"}
            icon={<BiCommentDetail />}
            onClick={handleClick}
        />
    </div>
  )
}
