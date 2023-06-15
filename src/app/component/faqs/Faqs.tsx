'use client'
import react, { useState } from 'react';

interface FAQ {
    question: string;
    answer: string;
}

const FAQs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs: FAQ[] = [
        {
            question: 'Reach: Admissions + Campaign ',
            answer: 'Gone are the days with abundance data but no time for action Its time to take action!',
        },
        {
            question: 'Pay: Fee and Scholarship',
            answer: 'Gone are the days with abundance data but no time for action Its time to take action!',
        },
        {
            question: 'Reach: Admissions + Campaign ',
            answer: 'Gone are the days with abundance data but no time for action Its time to take action!',
        },
        {
            question: 'Pay: Fee and Scholarship',
            answer: 'Gone are the days with abundance data but no time for action Its time to take action!',
        },
        {
            question: 'Reach: Admissions + Campaign ',
            answer: 'Gone are the days with abundance data but no time for action Its time to take action!',
        },
        {
            question: 'Pay: Fee and Scholarship',
            answer: 'Gone are the days with abundance data but no time for action Its time to take action!',
        },
        // Add more FAQs as needed
    ];

    return (
        <div>
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                    <div
                        className={`flex justify-between items-center cursor-pointer bg-gray-200 p-4 rounded ${activeIndex === index ? 'bg-gray-300' : ''
                            }`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <h2 className="text-lg font-medium">{faq.question}</h2>
                        <svg
                            className={`w-6 h-6 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    {activeIndex === index && (
                        <>
                            <p className="pl-8 mt-2">{faq.answer}</p>
                            {/* <hr className="mt-2" /> */}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQs;

