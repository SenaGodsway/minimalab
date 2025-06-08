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
                  ? 'border-[#28AE9E] shadow-lg bg-[#f0f9f8]' 
                  : 'border-gray-200 hover:border-black hover:shadow-lg'}`}
            >
              <IconComponent 
                size={30} 
                className={isSelected ? 'text-[#28AE9E]' : ''} 
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


// import { services as Services } from "../services_page/services";
//        const handleServiceSelect = (serviceId: string) => {
//         setFormData({ ...formData, service: serviceId })
//     }
// const SelectService = ({}) => {


//   return (
//     <div className='mx-auto w-11/12 md:w-7/12 lg:w-8/12'>
//       <h1 className='mb-4 text-2xl font-bold'>What service are you interested in?</h1>
//       <p className='mb-8 text-gray-600'>Select a service to get started</p>
//       <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
//         {Object.values(Services).map((service: Service) => {
//           const IconComponent = service.icon;
//           return (
//             <div 
//               key={service.id} 
//             //   onClick={() => handleServiceSelect(service.id)}
//               className={`flex flex-grow flex-col gap-4 rounded-lg border-2 px-4 py-8 text-left transition-all 
//                 ? 'border-[#28AE9E] shadow-lg' : 'border-gray-200'} 
//                 hover:border-black hover:shadow-lg cursor-pointer`}
//             >
//               <IconComponent size={30} className='' />
//               <p className='font-bold'>{service.title}</p>
//               <p className='text-gray-600'>{service.description}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SelectService;


// //       import { services as Services } from "../services_page/services"
// //       const handleServiceSelect = (serviceId: string) => {
// //     setFormData({ ...formData, service: serviceId })
// //   }
// //     }
// // const SelectService = () => {

// //   return (
// //        <div className='mx-auto w-11/12 md:w-7/12 lg:w-8/12'>
// //              <h1 className='mb-4 text-2xl font-bold'>What service are you interested in?</h1>
// //              <p className='mb-8 text-gray-600'>Select a service to get started</p>
// //               <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
// //                 {Object.values(services).map((service: Service) => {
// //                   const IconComponent = service.icon;
// //                   return (
// //                     <div key={service.id} className="border-g flex flex-grow flex-col gap-4 rounded-lg border-2 px-4 py-8 text-left transition-all hover:border-[#28AE9E] hover:shadow-lg">
// //                       <IconComponent size={30} className='text-[#28AE9E]' />
// //                       <p className='font-bold'>{service.title}</p>
// //                       </div>
// //                     )
// //                   })}
// //                 </div>
// //               </div>
// //   )
// // }

// // export default SelectService
