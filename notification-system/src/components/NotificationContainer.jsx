import React from 'react'
import Toast from './Toast'

const NotificationContainer = ({notifications,onClose,position}) => {
  return (
    <div className={`notification-container ${position}`}>
      {
        notifications.map((notification)=>(
            <Toast key={notification.id} {...notification} onClose={onClose}/>
        ))
      }
    </div>
  )
}

export default NotificationContainer
