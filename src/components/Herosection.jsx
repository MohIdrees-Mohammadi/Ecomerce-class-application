import React from 'react'
import Button from './Button'
import SpecialItems from './SpecialItems'


const specialItem = [
    {
        img: "https://img.magnific.com/free-vector/classic-brown-leather-briefcase_98292-4121.jpg?semt=ais_hybrid&w=740&q=80",
        title: "Bag 1",
        desc: 'this is short description for 1',
        link: '/bag'
    },
    {
        img: "https://img.magnific.com/free-vector/classic-brown-leather-briefcase_98292-4121.jpg?semt=ais_hybrid&w=740&q=80",
        title: "Bag 2",
        desc: 'this is short description for 1',
        link: '/bag2'
    },
    {
        img: "https://img.magnific.com/free-vector/classic-brown-leather-briefcase_98292-4121.jpg?semt=ais_hybrid&w=740&q=80",
        title: "Bag 3",
        desc: 'this is short description for 1',
        link: '/bag3'
    },
]

const Herosection = () => {
  return (
    <div className='flex h-[60vh]'>
        {/* Left side */}
        <div className='w-[70%] bg-primary-color flex flex-col justify-center'>
            <span className='text-primary-text font-semibold '>New Seasnal Arrival </span>
            <h1 className='text-6xl font-bold tracking-wide my-3'>Elevate your <br /> Everyday Style</h1>
            <p className='max-w-137.5 text-gray-700/80 my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est at ullam totam, nobis obcaecati quia accusantium iusto architecto, dolore nisi sed necessitatibus corrupti fuga ut facere commodi! Beatae, enim dicta.</p>
            {/* hero buttons  */}
            <div className='flex gap-3'>
                <Button className='bg-gray-100 border border-gray-200 ' text = {"Shop Now"} />
                <Button className='bg-gray-900 border border-black text-gray-100 ' text = {"Explore Collection"} />
            </div>
        </div>

        {/* Right side */}
        <div className='flex flex-col justify-center gap-10 px-3'>
            {
                specialItem.map((card) => (
                    <SpecialItems data = {card} />
                ))
            }
        </div>
    </div>
  )
}

export default Herosection