import React from 'react'
import RightCardContent from './RIghtCardContent'

const RightCard = (props) => {
    return (
        <div className='h-full overflow-hidden relative w-70 rounded-4xl shrink-0'>
            <img className='h-full w-full object-cover' src={props.img} alt="" />
            <RightCardContent intro={props.intro} tag={props.tag} color={props.color} id={props.id}/>
        </div>
    )
}

export default RightCard