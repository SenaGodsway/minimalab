import React, { useState, useEffect } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
  service?: string;
}

interface FormProps {
  initialData?: Partial<FormData>;
  onFormChange?: (data: FormData, isValid: boolean) => void;
  onFormSubmit?: (data: FormData, isValid: boolean) => void;
}

const Form: React.FC<FormProps> = ({ initialData, onFormChange}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    service: '',
    ...initialData,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = React.useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
      isValid = false;
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Phone validation (optional but must be valid if provided)
    if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    // Message validation (optional in this case)
    if (formData.message.length > 500) {
      newErrors.message = 'Message must be less than 500 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, [formData]);

  useEffect(() => {
    if (onFormChange) {
      const isValid = validateForm();
      onFormChange(formData, isValid);
    }
  }, [formData, onFormChange, validateForm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = () => {
    validateForm();
  };


  return (
    <div className="w-full max-w-md">
      <h1 className="mb-2 text-2xl font-bold">How do we get in touch?</h1>
      <p className="mb-8 text-gray-600">Leave us your details and we will reach out within 24 hours!</p>
      
      <form className="space-y-6" noValidate>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block text-sm">First name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full rounded-lg border p-3 ${errors.firstName ? 'border-red-500' : ''}`}
              placeholder="First name"
              required
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm">Last name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full rounded-lg border p-3 ${errors.lastName ? 'border-red-500' : ''}`}
              placeholder="Last name"
              required
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`w-full rounded-lg border p-3 ${errors.email ? 'border-red-500' : ''}`}
            placeholder="you@company.com"
            required
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label className="mb-2 block text-sm">Phone number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`w-full rounded-lg border p-3 ${errors.phone ? 'border-red-500' : ''}`}
            placeholder="+1 (555) 000-0000"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label className="mb-2 block text-sm">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`w-full rounded-lg border p-3 ${errors.message ? 'border-red-500' : ''}`}
            rows={4}
            placeholder="Leave us a message..."
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          <p className="mt-1 text-right text-sm text-gray-500">
            {formData.message.length}/500
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;

// import React, { useState } from 'react';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   message: string;
//   service: string;
// }

// interface FormProps {
//   initialData?: Partial<FormData>;
//   onFormChange?: (data: FormData) => void;
//   onFormSubmit?: (data: FormData) => void;
// }

// const Form: React.FC<FormProps> = ({ initialData, onFormChange, onFormSubmit }) => {
//   const [formData, setFormData] = useState<FormData>({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//     service: '',
//     ...initialData, // Spread any initial data passed via props
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const newFormData = { ...formData, [e.target.name]: e.target.value };
//     setFormData(newFormData);
//     // Notify parent component about the change if callback provided
//     if (onFormChange) {
//       onFormChange(newFormData);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Notify parent component about the submit if callback provided
//     if (onFormSubmit) {
//       onFormSubmit(formData);
//     }
//   };

//   return (
//     <div className="w-full max-w-md">
//       <h1 className="mb-2 text-2xl font-bold">How do we get in touch?</h1>
//       <p className="mb-8 text-gray-600">Leave us your details and we will reach out within 24 hours!</p>
      
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="mb-2 block text-sm">First name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleInputChange}
//               className="w-full rounded-lg border p-3"
//               placeholder="First name"
//               required
//             />
//           </div>
//           <div>
//             <label className="mb-2 block text-sm">Last name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleInputChange}
//               className="w-full rounded-lg border p-3"
//               placeholder="Last name"
//               required
//             />
//           </div>
//         </div>

//         <div>
//           <label className="mb-2 block text-sm">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             className="w-full rounded-lg border p-3"
//             placeholder="you@company.com"
//             required
//           />
//         </div>

//         <div>
//           <label className="mb-2 block text-sm">Phone number</label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             className="w-full rounded-lg border p-3"
//             placeholder="+1 (555) 000-0000"
//           />
//         </div>

//         <div>
//           <label className="mb-2 block text-sm">Message</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleInputChange}
//             className="w-full rounded-lg border p-3"
//             rows={4}
//             placeholder="Leave us a message..."
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;