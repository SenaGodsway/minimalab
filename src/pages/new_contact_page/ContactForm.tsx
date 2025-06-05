import { useState } from 'react'
import { Layout, Code, Search, PenTool, BarChart, HelpCircle } from 'lucide-react'
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

 

  const getSelectedService = () => {
    return services.find(service => service.id === formData.service)
  }

  return (
    <>
      <Header/>
      <div className="flex min-h-screen flex-col items-center bg-white p-6">
      <Circle/>



        {step === 1 && (
          <div className="w-full max-w-md">
            <h1 className="mb-2 text-2xl font-bold">What do you need help with?</h1>
            <p className="mb-8 text-gray-600">We're a full service agency with experts ready to help.</p>

            <div className="grid grid-cols-2 gap-4">
              {services.map(service => (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id)}
                  className={`p-4 border-2 rounded-lg text-left transition-all ${
                    formData.service === service.id ? 'border-black' : 'hover:border-gray-400'
                  }`}
                >
                  <service.icon className="mb-2 h-6 w-6" />
                  <div className="font-medium">{service.title}</div>
                  <div className="text-sm text-gray-600">{service.description}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
        <div className="w-full max-w-md">
          <h1 className="mb-2 text-2xl font-bold">How do we get in touch?</h1>
          <p className="mb-8 text-gray-600">Leave us your details and we'll reach out within 24 hours!</p>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-2 block text-sm">First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border p-3"
                  placeholder="First name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border p-3"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-lg border p-3"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">Phone number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full rounded-lg border p-3"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full rounded-lg border p-3"
                rows={4}
                placeholder="Leave us a message..."
              />
            </div>
          </div>
        </div>
      )}    



        {step === 3 && (
        <div className="w-full max-w-md rounded-lg bg-white p-6">
        <h2 className="mb-4 text-center text-2xl font-bold">Congratulations</h2>
        <p className="mb-4 text-center text-gray-600">We're excited to help you with your <span className="font-medium">{getSelectedService()?.title}</span> project!</p>
       
      </div>
        )}

        <div className="mt-6 flex justify-between gap-60 bg-white p-6">
        {
          step > 1 ?  <button
            onClick={() => setStep(prev => prev < 4 ? prev - 1 : prev)}
            className="rounded-full bg-gray-200 px-6 py-2 text-black"
          >
            Go back
          </button>: ''
        }
        
          <button
            onClick={() => setStep(prev => prev < 3 ? prev + 1 : prev)}
            className="rounded-full bg-black px-6 py-2 text-white hover:bg-gray-800"
          >
            {step === 3 ? 'Finish' : 'Next step'}
          </button>
        </div>
      </div>
      <Footer/>
    </>
  )
}