const fetchData = async(endpoint)=>{
    await new Promise((resolve)=>setTimeout(resolve,2000))
    if (endpoint==='/sales'){ 
        let salesData = []
        for (let i= 10;i<=30;i+=10){
            salesData.push({name: `Product ${i/10}`,sales: i*20})
        }
        return Promise.resolve(salesData)
    }
    if (endpoint==='/users'){
        console.log("hi")
        let usersData = [{name:'Alice'},{name:'Noah'},{name:'Bob'}]
        return Promise.resolve(usersData)
    }
    if (endpoint==='/kpi'){
        let kpiData = {revenue:'1M', customers:'5000',profit:'200K'}
        return Promise.resolve(kpiData)
    }
}

export default fetchData;