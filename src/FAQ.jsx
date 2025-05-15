import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "What is the What’s Next Conference?",
    answer:
      "The What’s Next Conference is a one-day event for high school students (Grades 9–12) to explore future career paths, especially in tech and emerging industries. Through workshops, panels, and networking, students will gain insights into trends like AI, entrepreneurship, and green jobs, plus practical skills to prepare for tomorrow’s workforce.",
  },
  {
    question: "Who should attend?",
    answer:
      "The conference is ideal for:\n- Students curious about career options or tech-driven fields.\n- Educators/Counselors seeking resources to guide students.\n- Parents/Guardians who want to support their child’s career planning.",
  },
  {
    question: "When and where is the conference?",
    answer:
      "Date: 28th of June, 2025\nTime: 9:00 AM – 5:00 PM\nLocation: [Add location here]",
  },
  {
    question: "How much does it cost to attend?",
    answer: "It's totally free.",
  },
  {
    question: "Can my school/organization sponsor or partner?",
    answer:
      "Absolutely! We welcome sponsors and community partners. Call or WhatsApp Victoria on 0913 412 2978 or send and email edustarttech25@gmail.com for details.",
  },
  {
    question: "What should I bring?",
    answer:
      "Your ticket (digital or printed).\nA notebook/device for takeaways.\nQuestions for speakers!",
  },
  {
    question: "How can I volunteer?",
    answer:
      "We need volunteers for setup, registration, and session support. Apply here: [i will send link]",
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
                {faq.answer.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
