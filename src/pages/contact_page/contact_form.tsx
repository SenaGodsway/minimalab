import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const services = [
  { id: 'website-design', label: 'Website design' },
  { id: 'ux-design', label: 'UX design' },
  { id: 'user-research', label: 'User research' },
  { id: 'content-creation', label: 'Content creation' },
  { id: 'strategy-consulting', label: 'Strategy & consulting' },
  { id: 'other', label: 'Other' },
] as const;

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  project: z.string().min(10, { message: 'Project description must be at least 10 characters.' }),
  services: z.array(z.string()).min(1, { message: 'Please select at least one service.' }),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      project: '',
      services: [],
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="bg-gray-100 mx-auto p-6 md:p-12 rounded-lg w-full">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="font-bold text-4xl md:text-5xl tracking-tight">
            Got ideas? We've got the skills. Let's team up.
          </h1>
          <p className="text-gray-600">
            Tell us more about yourself and what you've got in mind.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="name"
                  className="block border-gray-900 bg-transparent mt-1 px-2 py-3 border-b w-full sm:text-sm outline-none"
                  placeholder="Your name"
                />
              )}
            />
            {errors.name && <p className="mt-2 text-red-600 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  id="email"
                  className="block border-gray-900 bg-transparent mt-1 px-2 py-3 border-b w-full sm:text-sm outline-none"
                  placeholder="you@company.com"
                />
              )}
            />
            {errors.email && <p className="mt-2 text-red-600 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <Controller
              name="project"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="project"
                  rows={3}
                  className="block border-gray-900 bg-transparent mt-1 border-b w-full sm:text-sm outline-none resize-none"
                  placeholder="Tell us about your project"
                />
              )}
            />
            {errors.project && <p className="mt-2 text-red-600 text-sm">{errors.project.message}</p>}
          </div>

          <div>
            <span className="block font-medium text-gray-700 text-sm">How can we help?</span>
            <div className="gap-4 grid grid-cols-2 mt-2">
              {services.map((service) => (
                <div key={service.id} className="flex items-start">
                  <Controller
                    name="services"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        id={service.id}
                        value={service.id}
                        checked={field.value.includes(service.id)}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          const updatedValue = checked
                            ? [...field.value, service.id]
                            : field.value.filter((value) => value !== service.id);
                          field.onChange(updatedValue);
                        }}
                        className="border-gray-300 rounded focus:ring-indigo-500 w-4 h-4 text-indigo-600"
                      />
                    )}
                  />
                  <label htmlFor={service.id} className="ml-3 font-medium text-gray-700 text-sm">
                    {service.label}
                  </label>
                </div>
              ))}
            </div>
            {errors.services && <p className="mt-2 text-red-600 text-sm">{errors.services.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-gray-900 hover:bg-gray-700 shadow-sm px-4 py-2 border border-transparent rounded-md focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 w-full font-medium text-sm text-white focus:outline-none"
          >
            Let's get started!
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;