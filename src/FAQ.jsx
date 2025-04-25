import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "Who can attend the conference?",
    answer: "This conference is designed for high school students (Grades 9–12), educators and school counselors and parents and guardians.",
  },
  {
    question: "Is it free?",
    answer: "This conference is designed for high school students (Grades 9–12), educators and school counselors and parents and guardians.",
  },
  {
    question: "Do I need prior tech knowledge?",
    answer: "This conference is designed for high school students (Grades 9–12), educators and school counselors and parents and guardians.",
  },
  {
    question: "Is there a dress code?",
    answer: "This conference is designed for high school students (Grades 9–12), educators and school counselors and parents and guardians.",
  },
  {
    question: "What do I get if I volunteer?",
    answer: "This conference is designed for high school students (Grades 9–12), educators and school counselors and parents and guardians.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <h2 className="faq-title">FAQ</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              <strong>{faq.question}</strong>
              <span className={`arrow ${openIndex === index ? "open" : ""}`}>
                {openIndex === index ? "▴" : "▾"}
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
