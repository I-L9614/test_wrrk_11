import React from 'react'
import { terrorists } from './terroristsData.js'



function TerroristRow(props) {
  return (
    <tr>

        <th className='name'>{props.name}</th>
        <th className='organization'>{props.organization}</th>
        <th className='attacksCount'>{props.attacksCount}</th>
        <th className='statuse'>{props.status}</th>
        <th className='relationToIsraelSummary'>{props.relationToIsraelSummary}</th>
        <th><img src={props.imageUrl} alt="" className='terrorist-image'/></th>
    </tr>

    
  )
}

export default TerroristRow