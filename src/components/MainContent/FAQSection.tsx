import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FAQ } from '../../types';

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => (
  <div className="mt-4">
    <h3 className="text-xl font-bold">Frequently asked questions</h3>
    <div className="mt-2 space-y-2">
      {faqs.map((faq, index) => (
        <details key={index} className="bg-white rounded-lg shadow group">
          <summary className="flex items-center justify-between w-full p-4 cursor-pointer">
            <span>{faq.question}</span>
            <FaChevronDown className="transition-transform group-open:rotate-180" />
          </summary>
          <p className="px-4 pb-4">{faq.answer}</p>
        </details>
      ))}
    </div>
  </div>
);

export default FAQSection;