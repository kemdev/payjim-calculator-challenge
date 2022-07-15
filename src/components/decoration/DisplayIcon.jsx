import React from 'react'
import operatorsIcons from '../../img/operators.png'
export default function DisplayIcon() {
  return (
    <div style={{height: '100%'}} className="position-relative">
        <img src={operatorsIcons} alt="" className='h-100 w-100 ' />
    </div>
  )
}
