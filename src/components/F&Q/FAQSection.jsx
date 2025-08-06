import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'How do I choose the best bathroom fittings?',
        answer: 'Choose based on your needs, space, budget, and preferred style. Look for durable and water-saving options.'
    },
    {
        question: 'How long is the Hindware product warranty?',
        answer: 'Most Hindware products come with a warranty of 1 to 10 years depending on the product category.'
    },
    {
        question: 'Why are bathroom fittings important?',
        answer: 'They ensure functionality, hygiene, and add to the aesthetics and efficiency of the bathroom.'
    },
    {
        question: 'How do you take care of bathroom fittings?',
        answer: 'Regular cleaning, avoiding harsh chemicals, and checking for leaks helps in long-term maintenance.'
    },
    {
        question: 'What is included in affordable bathroom fittings?',
        answer: 'They generally include faucets, showers, taps, and accessories offering good quality at competitive prices.'
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                    Frequently Asked Questions
                </h2>
                <div className="flex justify-center mb-10">
                    <div className="w-20 h-1 bg-gray-700 rounded-full"></div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded shadow"

                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                            >
                                <span className="font-medium text-base sm:text-lg">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`h-5 w-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4 text-gray-700 text-sm sm:text-base transition-transform duration-150">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
