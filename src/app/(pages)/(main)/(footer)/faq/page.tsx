'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is your return policy?',
    answer: 'We accept returns within 30 days of purchase. Items must be in original condition and packaging.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'We currently ship in the US and CA.',
  },
  {
    question: 'How can I track my order?',
    answer: 'Once your order ships, you will receive an email with a tracking link.',
  },
  {
    question: 'Can I change or cancel my order?',
    answer: 'Please contact us within 24 hours of placing your order to make changes or cancellations.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-xl shadow-sm overflow-hidden ">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
