import React from 'react'

function Button(props) {
  return (
    <div>
        <button  onClick={props.onClick} className='border border-black rounded-sm'>{props.value}</button>
    </div>
  )
}

export default Button