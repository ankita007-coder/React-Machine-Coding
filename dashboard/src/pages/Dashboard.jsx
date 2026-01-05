import React from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import DashboardGrid from '../components/dashboard/DashboardGrid'
import dashboardConfig from '../config.js/dashboardConfig'

const Dashboard = () => {
  return (
    <DashboardLayout>
        <DashboardGrid widgets={dashboardConfig}/>
    </DashboardLayout>
  )
}

export default Dashboard
