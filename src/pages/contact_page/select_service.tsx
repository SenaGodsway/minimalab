import { services as Services } from "../services_page/services";

interface SelectServiceProps {
  onServiceSelect: (serviceId: string) => void;
  selectedService?: string;
}

const SelectService = ({ onServiceSelect, selectedService }: SelectServiceProps) => {
  return (
    <div className='mx-auto w-11/12 md:w-7/12 lg:w-8/12'>
      <h1 className='mb-4 text-2xl font-bold'>What service are you interested in?</h1>
      <p className='mb-8 text-gray-600'>Select a service to get started</p>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        {Object.values(Services).map((service) => {
          const IconComponent = service.icon;
          const isSelected = selectedService === service.id;
          
          return (
            <div 
              key={service.id} 
              onClick={() => onServiceSelect(service.id)}
              className={`flex flex-grow flex-col gap-4 rounded-lg border-2 px-4 py-8 text-left transition-all cursor-pointer
                ${isSelected 
                  ? 'border-gray-800 shadow-lg ' 
                  : 'border-gray-200 hover:border-black hover:shadow-lg'}`}
            >
              <IconComponent 
                size={30} 
                className={isSelected ? 'text-gray-700' : ''} 
              />
              <p className='font-bold'>{service.title}</p>
              <p className='text-gray-600'>{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectService;
