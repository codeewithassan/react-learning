import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Section1Content = (props) => {
  return (
    <div className='py-10 flex items-center gap-10 h-[90vh] px-18'>
        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default Section1Content