import React from 'react'

function Button(props: { textName: string} ) {
  return (
    <>
      <button className='bg-[#797d7f] p-[.66rem_3rem_.66rem_3rem] rounded-[.5rem] text-[1rem] hover:bg-[#4d5656]'>{props.textName}</button>
    </>
  )
}

export default Button