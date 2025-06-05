import React, { useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What types of AI applications do you build?',
    answer: 'We develop custom AI solutions such as chatbots, recommendation engines, predictive analytics, and intelligent automation tools tailored to your business needs.'
  },
  {
    question: 'Do you offer both web and mobile app development?',
    answer: 'Yes, we specialize in building responsive web applications and native or cross-platform mobile apps with seamless user experiences.'
  },
  {
    question: 'How involved will I be in the development process?',
    answer: 'We follow a collaborative approach, keeping you involved at every stage from planning to deployment, ensuring the final product aligns with your goals.'
  },
  {
    question: 'What technologies do you use for cloud development?',
    answer: 'We work with AWS, Google Cloud, and Azure, using serverless architecture, containerization, and scalable backend services for optimal performance.'
  },
  {
    question: 'Can you redesign or improve an existing app?',
    answer: 'Absolutely. We offer UI/UX revamps, performance optimization, and feature enhancements for existing applications to align with modern standards.'
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer maintenance plans that include bug fixes, security updates, performance monitoring, and new feature rollouts.'
  },
  {
    question: 'How do you ensure data security in AI applications?',
    answer: 'We implement industry best practices including data encryption, secure APIs, access control, and compliance with relevant data protection regulations.'
  }
]


const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full md:w-11/12 mx-auto">
      <h1 className="mb-8 font-semibold text-[30px] text-center md:text-[40px]">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg cursor-pointer">
            <button
              className="flex justify-between px-4 py-4 w-full font-medium text-left text-lg focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className='font-semibold text-[20px] text-neutral-900'>{faq.question}</span>
              <ChevronDownIcon
                className={`w-5 h-5 text-primary transform transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-[16px] text-neutral-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQSection