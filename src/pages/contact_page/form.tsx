import React, { useState } from 'react'
interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  service: string
}

const Form = () => {
      const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  })
   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
  
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
                    required
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
                    required
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
                  required
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
  )
}

export default Form
