import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, MapPin, Calendar, Users } from 'lucide-react';
import useIntersectionObserver from '../utility/useIntersectionObserver.js';

const AnimatedSection = ({ children, animationClass = 'translate-y-10' }) => {
  const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <div ref={ref} className={`transition-all duration-1000 ${entry?.isIntersecting ? 'opacity-100 translate-y-0' : `opacity-0 ${animationClass}`}`}>
      {children}
    </div>
  );
};

const ResearchInstitutes = () => {
  const institutes = [
    {
      name: 'Indian Statistical Institute (ISI)',
      logo: 'https://placehold.co/100x100/e2e8f0/475569?text=ISI',
      location: 'Kolkata, Bangalore, Delhi',
      description: 'A premier institute for statistical sciences, mathematics, and computer science research in India.',
      courses: ['B.Stat', 'B.Math', 'M.Stat', 'M.Math'],
      examInfo: 'ISI Admission Test conducted annually in May.',
      website: 'https://www.isical.ac.in',
      established: '1931',
    },
    {
      name: 'Centre for Excellence in Basic Sciences (CEBS)',
      logo: 'https://placehold.co/100x100/e2e8f0/475569?text=CEBS',
      location: 'Mumbai',
      description: 'An autonomous institute with an integrated BS-MS program, focusing on research and innovation in basic sciences.',
      courses: ['Biology', 'Chemistry', 'Mathematics', 'Physics'],
      examInfo: 'Admission through the National Entrance Screening Test (NEST).',
      website: 'https://www.cebs.ac.in',
      established: '2007',
    },
    {
      name: 'Indian Institutes of Science Education and Research (IISER)',
      logo: 'https://placehold.co/100x100/e2e8f0/475569?text=IISER',
      location: 'Multiple campuses across India',
      description: 'Leading institutes for science education and research with integrated BS-MS dual degree programs.',
      courses: ['Biology', 'Chemistry', 'Earth Sciences', 'Math', 'Physics'],
      examInfo: 'Admission via the IISER Aptitude Test (IAT).',
      website: 'https://www.iiseradmission.in',
      established: '2006',
    },
    {
      name: 'Indian Institute of Science (IISc)',
      logo: 'https://placehold.co/100x100/e2e8f0/475569?text=IISc',
      location: 'Bangalore',
      description: "India's premier institute for advanced scientific and technological research and higher education.",
      courses: ['BS (Research)', 'M.Tech', 'PhD Programs'],
      examInfo: 'Multiple entrance exams including KVPY, JEE, GATE.',
      website: 'https://www.iisc.ac.in',
      established: '1909',
    },
    {
      name: 'National Institute of Science Education and Research (NISER)',
      logo: 'https://placehold.co/100x100/e2e8f0/475569?text=NISER',
      location: 'Bhubaneswar, Odisha',
      description: 'An autonomous research institute dedicated to teaching and research in basic sciences with a 5-year integrated M.Sc program.',
      courses: ['Biology', 'Chemistry', 'Mathematics', 'Physics'],
      examInfo: 'Admission through the National Entrance Screening Test (NEST).',
      website: 'https://www.niser.ac.in',
      established: '2007',
    },
    {
      name: 'Indian Association for the Cultivation of Science (IACS)',
      logo: 'https://placehold.co/100x100/e2e8f0/475569?text=IACS',
      location: 'Jadavpur, Kolkata',
      description: "India's oldest research institute, focused on fundamental research and offering integrated BS-MS and PhD programs.",
      courses: ['IBSMS Program', 'Integrated PhD'],
      examInfo: 'Admission through their own Undergraduate Test (UGT).',
      website: 'http://www.iacs.res.in/',
      established: '1876',
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="relative bg-slate-50 dark:bg-gray-800 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">
              Our Partner Research Institutes
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
              Explore the leading institutions we collaborate with to provide you with world-class science education and research opportunities.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {institutes.map((institute, index) => (
              <AnimatedSection key={index} animationClass={index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}>
                <div className="bg-slate-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                  <div className="p-6">
                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex-shrink-0">
                        <img src={institute.logo} alt={`${institute.name} Logo`} className="h-20 w-20 rounded-md object-contain bg-white p-1" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{institute.name}</h2>
                        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mt-1">
                          <MapPin size={14} className="mr-1.5" /> {institute.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">{institute.description}</p>
                    
                    <div className="border-t border-b border-slate-200 dark:border-gray-700 py-3 my-3">
                      <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2 text-sm">Key Programs</h4>
                      <div className="flex flex-wrap gap-2">
                        {institute.courses.map((course, i) => (
                          <span key={i} className="bg-slate-200 dark:bg-gray-700 text-slate-600 dark:text-slate-300 text-xs font-medium px-2.5 py-1 rounded-full">{course}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2 text-sm">Admission Insight</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{institute.examInfo}</p>
                    </div>
                  </div>

                  <div className="mt-auto bg-white dark:bg-gray-800/50 p-4 border-t border-slate-200 dark:border-gray-700 flex justify-between items-center">
                     <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <Calendar size={14} className="mr-1.5" /> Est. {institute.established}
                      </div>
                    <a 
                      href={institute.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      Visit Website <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-600 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Prepare for Your Dream Institute?</h2>
          <p className="mt-4 text-slate-200 max-w-2xl mx-auto">
            Our specialized courses are designed to give you the competitive edge you need to succeed.
          </p>
          <Link to="/courses" className="mt-8 inline-block bg-white text-slate-800 font-semibold px-8 py-3 rounded-md hover:bg-slate-200 transition-colors duration-300">
            View Preparation Courses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ResearchInstitutes;
