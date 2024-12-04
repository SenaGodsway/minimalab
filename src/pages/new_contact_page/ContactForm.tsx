import { useState } from 'react'
import { ArrowLeft, Layout, Code, Search, PenTool, BarChart, HelpCircle } from 'lucide-react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Circle from '../../components/reuseable/gradient_cirle'
interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  service: string
  teamSize: number
}

export default function NewContact() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    service: '',
    teamSize: 5
  })

  const services = [
    { id: 'website-design', title: 'Website design', description: 'I need a website design.', icon: Layout },
    { id: 'website-development', title: 'Website development', description: 'I need a website built.', icon: Code },
    { id: 'ux-research', title: 'UX Research', description: 'I want to understand users.', icon: Search },
    { id: 'content-creation', title: 'Content creation', description: 'I want to grow my blog.', icon: PenTool },
    { id: 'seo-optimization', title: 'SEO Optimization', description: 'Help me grow organically.', icon: BarChart },
    { id: 'something-else', title: 'Something else', description: "We're here to help!", icon: HelpCircle }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, service: serviceId })
  }

  const [value, setValue] = useState(1)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
  }

  const getSelectedService = () => {
    return services.find(service => service.id === formData.service)
  }

  return (
    <>
      <Header/>
      <div className="flex flex-col items-center bg-white p-6 min-h-screen">
      <Circle/>
        {step === 1 && (
          <div className="space-y-3 p-4 rounded-lg w-full max-w-sm">
            <h1 className="mb-2 font-bold text-2xl">How big is your team?</h1>
            <p className="mb-8 text-gray-600">Leave us your details and we'll reach out within 24 hours!</p>
            <div className="font-medium text-gray-900 text-lg">
              {value}-1000 people
            </div>
      

          <input
        type="range"
        min={1}
        max={1000}
        value={value}
        onChange={handleChange}
        className="bg-gray-200 rounded-full w-full h-2 cursor-pointer appearance-none"
        style={{
          background: `linear-gradient(to right, 
            #000 0%, 
            #000 ${(value - 1) / 10}%, 
            #e5e7eb ${(value - 1) / 10}%, 
            #e5e7eb 100%)`,
        }}
      />
      <style>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          background: #000;
          border-radius: 50%;
          cursor: pointer;
        }
        input[type='range']::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: #000;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>

            <div className="flex justify-between text-gray-900 text-md">
              <span>1</span>
              <span>1000</span>
            </div>
          </div>
        )}

{step === 2 && (
        <div className="w-full max-w-md">
          <h1 className="mb-2 font-bold text-2xl">How do we get in touch?</h1>
          <p className="mb-8 text-gray-600">Leave us your details and we'll reach out within 24 hours!</p>
          
          <div className="space-y-6">
            <div className="gap-4 grid grid-cols-2">
              <div>
                <label className="block mb-2 text-sm">First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="p-3 border rounded-lg w-full"
                  placeholder="First name"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="p-3 border rounded-lg w-full"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-3 border rounded-lg w-full"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Phone number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="p-3 border rounded-lg w-full"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="p-3 border rounded-lg w-full"
                rows={4}
                placeholder="Leave us a message..."
              />
            </div>
          </div>
        </div>
      )}    

        {step === 3 && (
          <div className="w-full max-w-md">
            <h1 className="mb-2 font-bold text-2xl">What do you need help with?</h1>
            <p className="mb-8 text-gray-600">We're a full service agency with experts ready to help.</p>

            <div className="gap-4 grid grid-cols-2">
              {services.map(service => (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id)}
                  className={`p-4 border-2 rounded-lg text-left transition-all ${
                    formData.service === service.id ? 'border-black' : 'hover:border-gray-400'
                  }`}
                >
                  <service.icon className="mb-2 w-6 h-6" />
                  <div className="font-medium">{service.title}</div>
                  <div className="text-gray-600 text-sm">{service.description}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
        //   <div className="w-full max-w-md">
        //     <h1 className="mb-2 font-bold text-2xl">Congratulations</h1>
        //     <p className="mb-8 text-gray-600">We're excited to help you with your project!</p>
        //     {formData.service && (
        //       <div className="p-4 border rounded-lg">
        //         <h2 className="mb-2 font-bold text-xl">Selected Service:</h2>
        //         <div className="flex items-center">
        //           {getSelectedService()?.icon && <getSelectedService().icon className="mr-2 w-6 h-6" />}
        //           <span className="font-medium">{getSelectedService()?.title}</span>
        //         </div>
        //         <p className="mt-2 text-gray-600">{getSelectedService()?.description}</p>
        //       </div>
        //     )}
        //   </div>
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="mb-4 font-bold text-2xl text-center">Congratulations</h2>
        <p className="mb-4 text-center text-gray-600">We're excited to help you with your <span className="font-medium">{getSelectedService()?.title}</span> project!</p>
       
      </div>
        )}

        <div className="flex justify-between bg-white mt-6 p-6">
          <button
            onClick={() => setStep(prev => Math.max(1, prev - 1))}
            className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
            Go back
          </button>
          <button
            onClick={() => setStep(prev => prev < 4 ? prev + 1 : prev)}
            className="bg-black hover:bg-gray-800 px-6 py-2 rounded-full text-white"
          >
            {step === 4 ? 'Finish' : 'Next step'}
          </button>
        </div>
      </div>
      <Footer/>
    </>
  )
}