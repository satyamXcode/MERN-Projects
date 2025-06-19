import React, { useContext } from 'react'
import { counterContext } from '../Context/context01'

const Component01 = ({count}) => {
  const counter = useContext(counterContext);
  return (
    <div>
        {counter}
    </div>
  )
}

export default Component01