import React from 'react'

const Button = ({text, className = ""}) => {
  return (
    <button className={`px-5 py-2 rounded-xl ${className} `}>
     {text}
    </button>
  )
}

export default Button