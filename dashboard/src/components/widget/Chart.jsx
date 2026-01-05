import { useQuery } from "@tanstack/react-query"
import React from "react"
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts"
import fetchData from "../../services/api"

const Chart = ({ endpoint }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["chartData", endpoint],
    queryFn: async() => await fetchData(endpoint),
  })

  if (isLoading) return <div>Loading Sales Data...</div>
  if (isError) return <div>Error loading Sales Data</div>

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="sales" fill="#8884d8" />
          <Legend/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default React.memo(Chart)
