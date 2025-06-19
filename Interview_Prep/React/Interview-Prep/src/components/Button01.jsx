import React from 'react'
import Component01 from './Component01'

const Button01 = ({count}) => {
  return (
    <div>
        <h1>Button01</h1>
         <button><span><Component01 count={count}/></span>I am a button</button>
    </div>
  )
}

export default Button01