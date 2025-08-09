import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Search } from "lucide-react";
import useIntersectionObserver from "../utility/useIntersectionObserver.js";

const AnimatedSection = ({ children, animationClass = "translate-y-10" }) => {
  const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        entry?.isIntersecting
          ? "opacity-100 translate-y-0"
          : `opacity-0 ${animationClass}`
      }`}
    >
      {children}
    </div>
  );
};

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 dark:border-gray-700">
      <button
        className="w-full flex justify-between items-center text-left py-5 px-6"
        onClick={onClick}
      >
        <span className="text-lg font-semibold text-slate-800 dark:text-white">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 pb-5 px-6">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [activeCategory, setActiveCategory] = useState("General");

  const faqs = [
    {
      category: "General",
      question: "What is SciGeeks?",
      answer: (
        <p>
          SciGeeks is an innovative educational technology platform dedicated to
          empowering students with advanced skills in science and technology. We
          provide specialized preparation for premier competitive exams such as
          IAT, NEST, and ISI, alongside hands-on workshops in emerging fields
          like Artificial Intelligence, Computational Biology, and Neuroscience.
        </p>
      ),
    },
    {
      category: "General",
      question: "How is SciGeeks different from other coaching platforms?",
      answer: (
        <p>
          Our approach is unique as we merge rigorous academic preparation with
          modern, skill-based learning. We provide students a significant
          practical advantage through our in-house labs and research-oriented
          projects, equipping them not just for exams, but for real-world
          scientific challenges.
        </p>
      ),
    },
    {
      category: "General",
      question: "Does SciGeeks provide career guidance?",
      answer: (
        <p>
          Yes, we provide personalized mentorship and career counseling to help
          students align their skills and interests with their career goals.
        </p>
      ),
    },
    {
      category: "General",
      question: "Do you offer online classes?",
      answer: (
        <p>
          Yes, we offer both online and hybrid learning models to ensure
          flexibility and accessibility for all students.{" "}
        </p>
      ),
    },
    {
      category: "General",
      question: "Can alumni benefit from SciGeeks?",
      answer: (
        <p>
          Yes, we have ongoing webinars, networking opportunities, and advanced
          workshops for alumni to stay connected and continue learning.{" "}
        </p>
      ),
    },
    {
      category: "Admissions & Enrollment",
      question: "Are your programs suitable for school students?",
      answer: (
        <p>
          Yes, our curriculum is expertly tailored for students from Classes
          10-12. We offer foundational concepts and engaging projects for
          younger students, while providing advanced, in-depth preparation for
          senior classes to ensure they are fully prepared for their target
          exams.
        </p>
      ),
    },
    {
      category: "Admissions & Enrollment",
      question: "How can I enroll and what are the fees?",
      answer: (
        <p>
          You can enroll directly through our website. Fees vary by program, and
          detailed pricing is available on our 'Courses' page. We offer
          early-bird discounts and merit-based scholarships, with details
          available in the 'Scholarship' section of our website.
        </p>
      ),
    },
    {
      category: "Courses & Workshops",
      question: "Do you provide mock tests?",
      answer: (
        <p>
          Absolutely! We provide mock tests that mimic real exam conditions for
          IAT, NEST, and other competitive exams. These tests help students
          build confidence and track their performance.
        </p>
      ),
    },
    {
      category: "Courses & Workshops",
      question:
        "How are the workshops structured? Can students choose their project topics?",
      answer: (
        <p>
          The workshops run for 3-4 months, with a preparatory phase to build
          foundational knowledge, followed by project-based learning and a final
          research project. Yes! After completing the preparatory phase,
          students are guided on how to find research gaps and select a topic of
          their interest for their final project.{" "}
        </p>
      ),
    },
    {
      category: "Courses & Workshops",
      question:
        "What is the purpose of SciGeeks in-house labs? Are the lab activities suitable for younger students?",
      answer: (
        <p>
          Our labs provide students with practical exposure to cutting-edge
          technologies like robotics, AI, and bioinformatics. These facilities
          bridge the gap between theoretical knowledge and real-world
          applications. Yes, we design engaging and age-appropriate lab
          activities for students of all classes, ensuring they grasp complex
          concepts easily.{" "}
        </p>
      ),
    },
    {
      category: "Courses & Workshops",
      question: "What workshops are offered by SciGeeks?",
      answer: (
        <p>
          Our workshops are designed to provide practical skills in high-demand
          fields, including: Artificial Intelligence (AI), Brain Modeling &
          Simulation, Data Science, UI/UX Design for scientific applications,
          and Computational Biology & Neuroscience.
        </p>
      ),
    },
    {
      category: "Courses & Workshops",
      question: "Which exams do you provide coaching for?",
      answer: (
        <ul>
          <li>IISER Aptitude Test (IAT)</li>
          <li>National Entrance Screening Test (NEST)</li>
          <li>Indian Statistical Institute (ISI) Admission Test</li>
          <li>
            Scholastic Aptitude Test (SAT) & American College Testing (ACT)
          </li>
          <li>IELTS and TOEFL</li>
        </ul>
      ),
    },
    {
      category: "Courses & Workshops",
      question: "Are there plans to introduce more courses?",
      answer: (
        <p>
          Yes, we’re constantly evolving! Upcoming programs include GATE, JAM,
          CSIR-NET, and preparation for international BS, MS, and PhD programs.{" "}
        </p>
      ),
    },
  ];

  const categories = [
    "General",
    "Courses & Workshops",
    "Admissions & Enrollment",
  ];
  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  useEffect(()=>{
      document.title="FAQ | SciGeeks";
    });

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="relative bg-slate-50 dark:bg-gray-800 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
              Have a question? Find answers to common inquiries about our
              courses, admissions, and platform.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <AnimatedSection animationClass="-translate-x-10">
                <div className="sticky top-28">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
                    Categories
                  </h3>
                  <div className="flex flex-col items-start gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                          activeCategory === category
                            ? "bg-slate-600 text-white"
                            : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-9">
              <AnimatedSection>
                <div className="bg-slate-50 dark:bg-gray-800 rounded-lg shadow-lg">
                  {filteredFaqs.map((faq, index) => (
                    <FaqItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openQuestion === index}
                      onClick={() =>
                        setOpenQuestion(openQuestion === index ? null : index)
                      }
                    />
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-600 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-slate-200 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help.
            Get in touch with us for any inquiries.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-white text-slate-800 font-semibold px-8 py-3 rounded-md hover:bg-slate-200 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
