import React from 'react'
import { useParams } from 'react-router-dom'

const DynamicRouteDetails = () => {
    const params = useParams()
  return (
    <div>
        <h1>{params.dynamicId} Dynamic Route Detail</h1>
    </div>
  )
}

export default DynamicRouteDetails