import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Award, TrendingUp } from 'lucide-react';
import useIntersectionObserver from '../utility/useIntersectionObserver.js';
import Loader from '../components/Loader.jsx';
import styles from '../pagestyles/Home.module.css';

const AnimatedSection = ({ children, animationClass }) => {
  const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
  const isVisible = !!entry;

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${animationClass} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};


const Home = () => {

  const [loading, setLoading] =useState(false);
  const stats = [
    { icon: Users, value: '500+', label: 'Students Trained' },
    { icon: BookOpen, value: '25+', label: 'Courses Offered' },
    { icon: Award, value: '95%', label: 'Success Rate' },
    { icon: TrendingUp, value: '5+', label: 'Years of Experience' }
  ];

  const featuredCourses = [
    {
      title: 'ISI Entrance Preparation',
      description: 'Comprehensive preparation for ISI B.Stat/B.Math entrance exams.',
      image: 'https://placehold.co/600x400/e2e8f0/475569?text=Math+Course'
    },
    {
      title: 'NEST & IISER Aptitude',
      description: 'Complete course for National Entrance Screening Test and IAT.',
      image: 'https://placehold.co/600x400/e2e8f0/475569?text=Science+Course'
    },
    {
      title: 'Research Methodology',
      description: 'Advanced course on scientific research methods and statistics.',
      image: 'https://placehold.co/600x400/e2e8f0/475569?text=Research+Course'
    }
  ];
  
  const institutes = [
    { name: 'ISI', logo: 'https://placehold.co/200x100/ffffff/475569?text=ISI' },
    { name: 'CEBS', logo: 'https://placehold.co/200x100/ffffff/475569?text=CEBS' },
    { name: 'IISER', logo: 'https://placehold.co/200x100/ffffff/475569?text=IISER' },
    { name: 'IISc', logo: 'https://placehold.co/200x100/ffffff/475569?text=IISc' },
    { name: 'CMI', logo: 'https://placehold.co/200x100/ffffff/475569?text=CMI' },
    { name: 'NISER', logo: 'https://placehold.co/200x100/ffffff/475569?text=NISER' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black z-10">
          <div className="w-full h-full bg-slate-800 flex items-center justify-center">
             <p className="text-slate-500">Video Background Placeholder</p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-20"></div>
        <div className="relative z-30 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Made for Science Geeks
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-200 mb-8">
            <strong>SciGeeks</strong> is your trusted partner in preparing for top science entrance exams like the IISER Aptitude Test (IAT) and National Entrance Screening Test (NEST). Powered by JAM Coaching Kolkata, we provide expert-guided courses, comprehensive study materials, and targeted practice to help school students achieve their dream of studying at premier science National and International institutions. Join us today to kickstart your scienctific career.
          </p>
          <Link to="/courses" className="inline-flex items-center gap-2 bg-white text-slate-800 font-semibold px-8 py-3 mx-4 my-4 rounded-md hover:bg-slate-200 transition-colors duration-300">
            Explore Courses <ArrowRight size={20} />
          </Link>
          <Link to="/freetestpanel" className="inline-flex items-center gap-2 bg-white text-slate-800 font-semibold px-8 py-3 rounded-md hover:bg-slate-200 transition-colors duration-300">
            Give a Free Test <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <AnimatedSection animationClass="translate-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-10 h-10 mx-auto mb-3 text-slate-500 dark:text-slate-400" />
                  <p className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">{stat.value}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
           </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animationClass="translate-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">Explore Our Premier Courses</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Kickstart your journey with our most popular and comprehensive programs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group">
                  <div className="overflow-hidden h-56">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{course.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">{course.description}</p>
                    <Link to="/courses" className="font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors">
                      Learn More &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-gray-800">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Our Esteemed Research Partners</h2>
             <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">We collaborate with the best to provide you with unparalleled opportunities.</p>
         </div>
         <div className={`relative w-full overflow-hidden ${styles.carouselContainer}`}>
            <div className={styles.carouselTrack}>
              {[...institutes, ...institutes].map((institute, index) => (
                <div key={index} className={styles.carouselSlide}>
                  <div className="h-24 w-48 bg-white rounded-lg shadow-md flex items-center justify-center p-4">
                     <img src={institute.logo} alt={institute.name} className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animationClass="opacity-0">
            <div className="bg-slate-600 dark:bg-gray-800 rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Ahead of the Curve</h2>
              <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest courses, research updates, and educational insights delivered to your inbox.
              </p>
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className=" text-white w-full px-4 py-3 ring-2 rounded-md focus:ring-2 focus:ring-green-500"
                  required
                />
                <button type="submit" className="bg-white text-slate-800 font-semibold px-6 py-3 rounded-md hover:bg-slate-200 transition-colors duration-300 cursor-pointer">
                  Subscribe
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
