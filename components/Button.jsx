import React from 'react'

const Button = ({onClick, children}) => {
  return (
    <button
          className="
              h6
              inline-block
              shadow-2
              mx1
              px1
              py1
              roundedMore
              border-grey
              bg-blue
              white
              bold
              w4
              ht3
            "
            onClick={onClick}
        >
          {children}
        </button>
  )
}

export default Button