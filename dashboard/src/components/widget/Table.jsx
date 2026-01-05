import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import fetchData from '../../services/api'

const Table = ({endpoint}) => {

    const {data, isLoading, isError}=useQuery(
        {queryKey:['table',endpoint],
        queryFn: async()=> await fetchData(endpoint)}
    )
    

    if(isLoading)
    {
        return <div>Loading User data.........</div>
    }
  return (
    <div>
      <table>
        <thead>
            <tr><th>Name</th></tr>
        </thead>
        <tbody>
           {
            data && data.map((item,index)=>{
                return <tr key={index}>
                    <td>{item?.name}</td>
                </tr>
            })
           }
        </tbody>
      </table>
    </div>
  )
}

export default React.memo(Table)
