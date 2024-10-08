import React from 'react'

const Button = ({onClick, children}) => {
  return (
    <button
          className="
              h5
              inline-block
              shadow-2
              mx1
              px2
              py1
              roundedMore
              border-grey
              bg-blue
              white
              bold
              w-3
            "
            onClick={onClick}
        >
          {children}
        </button>
  )
}

export default Button