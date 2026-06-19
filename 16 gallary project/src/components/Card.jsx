import React from 'react'

const Card = (props) => {
    return (
        <div className='group'>
            <a href={props.e.url} target='_blank'>
                <div className='h-40 w-44 overflow-hidden rounded-xl relative bg-white'>
                    <img className='group-hover:opacity-60 h-full w-full object-cover' src={props.e.download_url} alt="" />
                <p className='opacity-0 group-hover:opacity-100 translate-0 transition-all ease-in duration-300 text-xs text-amber-500 font-medium absolute top-1/2 left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2'>CLICK TO OPEN</p>
                </div>
                <h2 className='font-bold text-lg'>{props.e.author}</h2>
            </a>
        </div>
    )
}

export default Card