import { services as Services } from "../services_page/services";

interface SelectServiceProps {
  onServiceSelect: (serviceId: string) => void;
  selectedService?: string;
}

const SelectService = ({ onServiceSelect, selectedService }: SelectServiceProps) => {
  return (
    <div className='mx-auto w-full max-w-6xl'>
      <h1 className='mb-3 text-xl font-bold'>What service are you interested in?</h1>
      <p className='mb-6 text-gray-600 text-sm'>Select a service to get started</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {Object.values(Services).map((service) => {
          const icons = Array.isArray(service.icon) ? service.icon : [service.icon];
          const isSelected = selectedService === service.id;

          return (
            <div
              key={service.id}
              onClick={() => onServiceSelect(service.id)}
              className={`flex flex-col gap-2 rounded-lg border-2 px-4 py-4 text-left transition-all cursor-pointer bg-white
                ${isSelected
                  ? 'border-gray-800 shadow-lg'
                  : 'border-gray-200 hover:border-black hover:shadow-lg'}`}
              style={{ minHeight: '120px', minWidth: '140px' }}
            >
              <div className="flex items-center mb-1">
                <div className="flex items-center gap-2">
                  {icons.map((IconComponent, idx) => (
                    <IconComponent
                      key={idx}
                      size={22}
                      className={isSelected ? "text-gray-700" : "text-gray-500"}
                    />
                  ))}
                </div>
              </div>
              <p className='font-bold text-sm'>{service.title}</p>
              <div className='flex-1'>
                {/* <p className='text-gray-600 text-xs'>{service.description}</p> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectService;
