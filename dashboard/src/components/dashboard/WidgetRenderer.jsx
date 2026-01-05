import React, { Suspense } from 'react'
import Chart from '../widget/Chart'
import Table from '../widget/Table'
import KPI from '../widget/KPI'

const WidgetRenderer = ({widget}) => {
  return (
    <Suspense fallback={<div>Loading........</div>}>
      {widget.type==='chart' && <Chart endpoint={widget.endpoint}/>}
      {widget.type==='table'&& <Table endpoint={widget.endpoint}/>}
      {widget.type==='kpi' && <KPI endpoint={widget.endpoint}/>}
    </Suspense>
  )
}

export default WidgetRenderer
