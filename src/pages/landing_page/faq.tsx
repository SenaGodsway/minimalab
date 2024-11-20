import React, { useState } from 'react'
import { ChevronUpIcon } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Lorem ipsum dolor esit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et pulvinar augue.'
  },
  {
    question: 'Lorem ipsum dolor esit?',
    answer: 'Consectetur adipiscing elit. Nullam et pulvinar augue. Lorem ipsum dolor sit amet.'
  },
  {
    question: 'Lorem ipsum dolor esit?',
    answer: 'Nullam et pulvinar augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
]

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full">
      <h1 className="mb-8 font-semibold text-[30px] text-center md:text-[48px]">FAQ</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg cursor-pointer">
            <button
              className="flex justify-between px-4 py-4 w-full font-medium text-left text-lg focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className='font-semibold text-[20px] text-neutral-900'>Q: {faq.question}</span>
              <ChevronUpIcon
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