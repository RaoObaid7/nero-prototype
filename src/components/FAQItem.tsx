"use client";

import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`faq-item ${isOpen ? "is-open" : ""}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      role="region"
      aria-expanded={isOpen}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsOpen((prev) => !prev);
        }
      }}
    >
      <div className="faq-question">
        <span className="faq-question-text">{question}</span>
        <span className="faq-icon" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </div>
      <div className="faq-answer-wrapper">
        <div className="faq-answer-content">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
