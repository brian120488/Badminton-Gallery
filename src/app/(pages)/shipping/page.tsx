'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const topics = [
  {
    question: 'Orders outside the USA.',
    answer: 'We currently are not shipping outside the USA.',
  },
  {
    question: 'Orders inside the USA.',
    answer: 'Orders shipped in the USA typically take 3-5 business days.',
  },
];

export default function ShippingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Shipping</h1>
      <div className="space-y-4">
        {topics.map((topic, index) => (
          <div key={index} className="border rounded-xl shadow-sm overflow-hidden ">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
            >
              <span className="font-medium text-lg">{topic.question}</span>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700">
                {topic.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
