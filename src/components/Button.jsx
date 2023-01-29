import React from 'react'

export default function Button({onClick,text,btnClass,icon}) {
  return (
    <button className={`button ${!btnClass ? `` : btnClass}`}
      onClick={onClick}
    >
        {icon}
        {!text ? `click` : text}
    </button>
  )
}
