import React from 'react';
import { services, type Service } from './services'; 

const AllServices: React.FC = () => {
  
  return (
   <div className='w-full md:w-7/12 mx-auto'>
    <div className='gap-6 grid grid-cols-3 '>
      {Object.values(services).map((service: Service) => {
        const IconComponent = service.icon;
        return (
          <div key={service.id} className=" px-4 py-8 border-2 flex-grow rounded-lg text-left flex flex-col gap-4 transition-all border-gray-400 hover:border-black">
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