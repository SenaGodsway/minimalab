import { services, type Service } from './services'; 

const AllServices: React.FC = () => {
  
  return (
   <div className='mx-auto w-11/12 md:w-7/12 lg:w-8/12'>
    <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
      {Object.values(services).map((service: Service) => {
        const IconComponent = service.icon;
        return (
          <div key={service.id} className="border-g flex flex-grow flex-col gap-4 rounded-lg border-2 px-4 py-8 text-left transition-all hover:border-black hover:shadow-lg">
            <IconComponent size={30} className='text-black' />
            <p className='font-bold'>{service.title}</p>
            <p className='text-black/80'>{service.description}</p>
            </div>
          )
        })}
      </div>
      </div>
  )
}

export default AllServices;