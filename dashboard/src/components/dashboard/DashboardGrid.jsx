import React from 'react'
import WidgetRenderer from './WidgetRenderer'

const DashboardGrid = ({widgets}) => {
  return (
    <div className='dashboard-grid'>
      {widgets.map((widget)=>{
        return <WidgetRenderer key={widget.id} widget={widget} />
      })}
    </div>
  )
}

export default DashboardGrid
