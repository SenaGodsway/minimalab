import { useState } from 'react'
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
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined)
  const [formData, setFormData] = useState<Partial<FormData>>({})
  const [showSuccess, setShowSuccess] = useState(false)


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
      setShowSuccess(true) // Show success modal instead of navigating
      console.log('Form submitted successfully')
    } catch (error) {
      console.error('Submission failed:', error)
    }
  }

  const closeSuccessModal = () => {
    setShowSuccess(false)
  }

  return (
    <>
      <Header/>
      <div className="relative flex min-h-screen flex-col items-center bg-white p-6">
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
      
        <div className="mt-6 flex justify-between gap-14 bg-white p-6 md:gap-60">

          {step > 1 && (
            <button
              onClick={() => setStep(prev => prev - 1)}
              className="block max-w-full rounded-full bg-gray-200 px-6 py-2 text-black"
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

        {/* Success Modal/Popup */}
        {showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="w-full max-w-md rounded-lg bg-white p-6">
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">Success!</h3>
                <div className="mt-2 text-sm text-gray-500">
                  <p>Your form has been submitted successfully.</p>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none"
                    onClick={closeSuccessModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  )
}
