import { useEffect, useState } from "react"
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [service, setservice] = useState([]);
  useEffect(() =>{
    fetch('services.json')
    .then(data => data.json())
    .then(data => setservice(data))
  },[])
  return ( 
    <div className='mt-6'>
        <div className='text-center gap-4'>
            <h2 className='text-orange-500 text-xl'>Service</h2>
            <h3 className='text-3xl font-bold'>Our Service Area</h3>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />  words which don't look even slightly believable. </p>
            <h1>all services:{service.length}</h1>
            <div className="grid md:grid-cols-3 gap-7">
              {
                service.map(service =><ServiceCard key={service._id} service={service}/>)
              }
            </div>
        </div>
    </div>
  )
}

export default Services