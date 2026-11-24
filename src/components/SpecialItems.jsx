import React from 'react'
import Button from './Button'

const SpecialItems = ({data}) => {
  return (
    <div className='shadow-md pr-5 rounded bg-primary-color flex items-center gap-4'>
        <img className='w-30' src={data.img} alt="" />
        <div>
            <h1 className='font-bold '>{data.title}</h1>
        <p>{data.desc}</p>
        <Button text = {"Shop Now "} />
        </div>
    </div>
  )
}

export default SpecialItems