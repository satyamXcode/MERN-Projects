import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
  const [count, setCount] = useState(1);
  const preVal = useRef(0);
  const btnRef = useRef();

  const increase = () => {
    setCount(count + 1);
    preVal.current = preVal.current + 1;
  }

  useEffect(() => { btnRef.current.style.backgroundColor = "red"}, []);

  return (
    <button ref={btnRef} onClick={increase}> `Count value : { count } preValue : { preVal.current }`</button>
  )
}

export default UseRefHook