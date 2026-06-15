import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full flex flex-nowrap scrollbar-none overflow-x-scroll gap-5 w-2/3'>
      {props.users.map(function(e,idx){
        return(
          <RightCard key={idx} color={e.color} img={e.img} intro={e.intro} tag={e.tag} id={idx}/>
        )
      })}
    </div>
  )
}

export default RightContent