import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
  const [services,setServices] =useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>setServices(data));
  },[])
 
  return (
    <div>
        <div className="text-center">
          <h3 className="text-3xl text-orange-700 font-bold">Ouer Service</h3>
          <h2 className="text-5xl">Our Service Area</h2>
          <p>the majority hava suffered alteration in some form, by injected humour ,or randomised <br/>works which don't look even slightly beliveable</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            services.map(service=>
            
                      <ServiceCard
                        key={service._id}
                        serviceCard={service}
                      
                      ></ServiceCard>
                  )
          }
        </div>
    </div>
  );
};

export default Services;