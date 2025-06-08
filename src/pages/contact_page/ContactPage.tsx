import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Circle from '../../components/reuseable/gradient_cirle'
import SelectService from './select_service'
import Form from './form'
import { UserService } from '../../expose_db'

interface FormData {
  email: string;
  firstname: string;
  lastname: string;
  message: string;
  service: string;
  telephone: number;
}

export default function NewContact() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined)
  const [formData, setFormData] = useState<Partial<FormData>>({})

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    setFormData(prev => ({ ...prev, service: serviceId }))
  }

  const handleFormChange = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }))
  }

  const handleFormSubmit = async () => {
    if (!selectedService || !formData.email) {
      console.error('Required fields missing')
      return
    }

    try {
      console.log('Submitting form:', { ...formData, service: selectedService })
      await UserService.addQuote({ ...formData, service: selectedService })
      navigate('/success')  
      console.log('Form submitted successfully')
    } catch (error) {
      console.error('Submission failed:', error)
    }
  }

  return (
    <>
      <Header/>
      <div className="flex min-h-screen flex-col items-center bg-white p-6">
        <Circle/>

        {step === 1 && (
          <div>
            <SelectService 
              onServiceSelect={handleServiceSelect}
              selectedService={selectedService}
            />
        
          </div>
        )}

        {step === 2 && (
          <Form 
            onFormChange={handleFormChange}
            initialValues={formData}
          />
        )}    

        <div className="mt-6 flex justify-between gap-14 md:gap-60  bg-white p-6">
          {step > 1 && (
            <button
              onClick={() => setStep(prev => prev - 1)}
              className="rounded-full block max-w-full  bg-gray-200 px-6 py-2 text-black"
            >
              Go back
            </button>
          )}
          
          {step === 2 ? (
            <button
              onClick={handleFormSubmit}
              className="rounded-full bg-black px-6 py-2 text-white hover:bg-gray-800"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={() => selectedService && setStep(prev => prev + 1)}
              disabled={!selectedService}
              className="rounded-full bg-black px-6 py-2 text-white hover:bg-gray-800 disabled:opacity-50"
            >
              Next
            </button>
          )}
        </div>
      </div>
      <Footer/>
    </>
  )
}