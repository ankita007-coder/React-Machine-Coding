import React from 'react'

const Toast = ({message,type,onClose,id}) => {
  return (
    <div className={`toast toast-${type}`}>
      {message}
      <button onClick={()=>onClose(id)}>Close</button>
    </div>
  )
}

export default Toast
