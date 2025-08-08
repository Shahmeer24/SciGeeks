import React from 'react';
import { Link } from 'react-router-dom';
import { FilePenLine, Clock, HelpCircle } from 'lucide-react';
import useIntersectionObserver from "../utility/useIntersectionObserver.js";

const AnimatedSection = ({ children, animationClass = 'translate-y-10' }) => {
  const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <div ref={ref} className={`transition-all duration-1000 ${entry?.isIntersecting ? 'opacity-100 translate-y-0' : `opacity-0 ${animationClass}`}`}>
      {children}
    </div>
  );
};

const FreeTestPanel = () => {
  const freeTests = [
    {
      title: 'SciGeeks Scholarship Test - Class XI',
      description: 'A comprehensive test to assess your aptitude in science and mathematics for scholarship opportunities.',
      questions: 50,
      duration: '60 mins',
      link: '#'
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="relative bg-slate-50 dark:bg-gray-800 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">
              Free Assessment Tests
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
              Test your knowledge, challenge yourself, and discover your strengths with our free scholarship and assessment tests.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                Available Tests ({freeTests.length})
              </h2>
              <div className="space-y-6">
                {freeTests.map((test, index) => (
                  <div key={index} className="bg-slate-50 dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-slate-600 text-white rounded-lg flex items-center justify-center">
                        <FilePenLine className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">{test.title}</h3>
                        <div className="flex items-center gap-4 mt-2 text-sm text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1.5"><HelpCircle size={14} /> {test.questions} Questions</span>
                          <span className="flex items-center gap-1.5"><Clock size={14} /> {test.duration}</span>
                        </div>
                      </div>
                    </div>
                    <Link 
                      to={test.link}
                      className="w-full sm:w-auto flex-shrink-0 bg-green-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-600 transition-colors duration-300 text-center"
                    >
                      Attempt Test
                    </Link>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeTestPanel;
