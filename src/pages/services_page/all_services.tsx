import React from 'react';
import { services, type Service } from './services'; 

const AllServices: React.FC = () => {
  
  return (
   <div className='mx-auto w-11/12 md:w-7/12'>
    <div className='grid grid-cols-2 gap-6 md:grid-cols-3'>
      {Object.values(services).map((service: Service) => {
        const IconComponent = service.icon;
        return (
          <div key={service.id} className="flex flex-grow flex-col gap-4 rounded-lg border-2 border-gray-400 px-4 py-8 text-left transition-all hover:border-black">
            <IconComponent size={30} />
            <p className='font-bold'>{service.title}</p>
            </div>
          )
        })}
        {/**<div className="w-full border">hello</div>**/}
      </div>
      </div>
  )
}

export default AllServices;