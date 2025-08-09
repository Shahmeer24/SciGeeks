import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, BookOpen, Filter, Cpu } from 'lucide-react';
import useIntersectionObserver from '../utility/useIntersectionObserver.js';

const AnimatedSection = ({ children, animationClass = 'translate-y-10' }) => {
  const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <div ref={ref} className={`transition-all duration-1000 ${entry?.isIntersecting ? 'opacity-100 translate-y-0' : `opacity-0 ${animationClass}`}`}>
      {children}
    </div>
  );
};

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Courses' },
    { id: 'ug-entrance', label: 'UG Entrance' },
    { id: 'pg-entrance', label: 'PG Entrance' },
    { id: 'research', label: 'Research Programs' }
  ];

  const courses = [
    {
      id: 1,
      title: 'ISI B.Stat/B.Math Preparation',
      category: 'ug-entrance',
      duration: '6 months',
      students: '150+',
      modules: 4,
      description: 'Comprehensive preparation for ISI entrance exams with a focus on advanced mathematics and statistics.',
      price: '₹25,000',
      image: 'https://placehold.co/600x400/e2e8f0/475569?text=ISI+Prep',
      featured: true
    },
    {
      id: 2,
      title: 'NEST & IAT Commander',
      category: 'ug-entrance',
      duration: '4 months',
      students: '200+',
      modules: 5,
      description: 'A complete course for the National Entrance Screening Test (NEST) and IISER Aptitude Test (IAT).',
      price: '₹20,000',
      image: 'https://placehold.co/600x400/e2e8f0/475569?text=NEST/IAT',
      featured: false
    },
    {
      id: 3,
      title: 'IIT JAM Physics',
      category: 'pg-entrance',
      duration: '8 months',
      students: '100+',
      modules: 6,
      description: 'Intensive preparation for the IIT Joint Admission Test for M.Sc in Physics.',
      price: '₹30,000',
      image: 'https://placehold.co/600x400/e2e8f0/475569?text=IIT+JAM',
      featured: true
    },
    {
      id: 4,
      title: 'Advanced Research Methodology',
      category: 'research',
      duration: '3 months',
      students: '50+',
      modules: 4,
      description: 'An advanced course on scientific research methods, data analysis, and scientific writing.',
      price: '₹15,000',
      image: 'https://placehold.co/600x400/e2e8f0/475569?text=Research',
      featured: false
    }
  ];

  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  useEffect(()=>{
      document.title="Courses | SciGeeks";
    });

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="relative bg-slate-50 dark:bg-gray-800 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">
              Find Your Path to Scientific Excellence
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
              Explore our comprehensive programs designed to prepare you for success in the world of science and research.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 sticky top-20 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-slate-500" />
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${activeFilter === filter.id ? 'bg-slate-600 text-white' : 'bg-slate-200 dark:bg-gray-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-gray-600'}`}
                    onClick={() => setActiveFilter(filter.id)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
            {/* <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-gray-600 transition-colors">
              <Cpu className="w-5 h-5" />
              AI Course Pathfinder
            </button> */}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <AnimatedSection key={course.id}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col group">
                  <div className="relative overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                    {course.featured && <div className="absolute top-4 left-4 bg-slate-600 text-white text-xs font-bold px-3 py-1 rounded-full">FEATURED</div>}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{course.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">{course.description}</p>
                    <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 border-t border-b border-slate-200 dark:border-gray-700 py-3 my-3">
                      <span className="flex items-center gap-2"><Clock size={14} /> {course.duration}</span>
                      <span className="flex items-center gap-2"><Users size={14} /> {course.students}</span>
                      <span className="flex items-center gap-2"><BookOpen size={14} /> {course.modules} Modules</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-2xl font-bold text-slate-800 dark:text-white">{course.price}</p>
                      <Link to="#" className="bg-slate-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-slate-700 transition-colors duration-300">
                        Buy Course
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500 dark:text-slate-400">No courses found for this category. Please try another!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;
