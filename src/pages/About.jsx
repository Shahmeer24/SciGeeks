import React from 'react';
import { Target, BookCopy, Users, FlaskConical } from 'lucide-react';
import useIntersectionObserver from '../utility/useIntersectionObserver.js';
import styles from "../pagestyles/About.module.css";

const AnimatedSection = ({ children, animationClass = 'translate-y-10' }) => {
  const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <div ref={ref} className={`transition-all duration-1000 ${entry?.isIntersecting ? 'opacity-100 translate-y-0' : `opacity-0 ${animationClass}`}`}>
      {children}
    </div>
  );
};

const About = () => {
  const philosophy = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Our core mission is to make high-quality science education accessible and to inspire a genuine passion for scientific discovery.'
    },
    {
      icon: BookCopy,
      title: 'Comprehensive Resources',
      description: 'We provide exhaustive study materials, practical labs, and tailored guidance for top science exams like IAT, NEST, and ISI.'
    },
    {
      icon: Users,
      title: 'Supportive Community',
      description: 'Join a vibrant community of like-minded learners and experienced faculty dedicated to helping you achieve your academic dreams.'
    }
  ];

  const timeline = [
    { year: '2019', title: 'The Spark', description: 'Scigeeks was founded by a community of passionate scientists with a vision to nurture the next generation of innovators.' },
    { year: '2021', title: 'First Successes', description: 'Our first batches of students achieve top ranks in national science entrance examinations.' },
    { year: '2023', title: 'Community Growth', description: 'Expanded our course offerings and grew our community to hundreds of aspiring scientists across the nation.' },
    { year: 'Today', title: 'Inspiring the Future', description: 'We continue to innovate, providing a launchpad for students to confidently step into the world of scientific discovery.' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-slate-700 dark:text-slate-300">
      <section className="relative bg-slate-50 dark:bg-gray-800 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">
              Empowering the Next Generation of <span className="text-slate-600 dark:text-slate-400">Geeky Scientists.</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection animationClass="-translate-x-10">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img src="https://placehold.co/800x600/e2e8f0/475569?text=Our+Community" alt="Scigeeks Community" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection animationClass="translate-x-10">
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white">From a Shared Passion to a Thriving Community.</h2>
                <p className="text-lg text-justify">
                  <strong>SciGeeks</strong> is more than an educational platform; it's a community of passionate scientists dedicated to nurturing the next generation of researchers and innovators. Founded with a vision to make high-quality science education accessible, we focus on preparing students for top science entrance exams like the <strong>IISER Aptitude Test (IAT)</strong>, <strong>National Entrance Screening Test (NEST)</strong>, and the <strong>ISI Admission Test</strong>.
                </p>
                <p className='text-justify'>
                  Our mission transcends mere exam preparation. We aim to ignite a lifelong passion for science through hands-on learning, practical labs, and a vibrant community where curiosity thrives. Join us to unlock your potential and step confidently into the world of scientific discovery.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 bg-white text-slate-800 font-semibold my-4 px-8 py-3 rounded-md hover:bg-slate-200 transition-colors duration-300 cursor-pointer"><a href="https://forms.gle/h2rwpd6477L8ZHRK8">Know More</a></button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">Our Educational Philosophy</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                We believe in a holistic approach that combines academic rigor with genuine inspiration.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {philosophy.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-slate-100 dark:bg-gray-700">
                    <item.icon className="w-8 h-8 text-slate-600 dark:text-slate-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <AnimatedSection>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">Our Journey So Far</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                  From a simple idea to a launchpad for future scientists.
                </p>
              </div>
            <div className={styles.timeline}>
              {timeline.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineIcon}>
                    <FlaskConical className="w-6 h-6" />
                  </div>
                  <div className={styles.timelineContent}>
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{item.year}</span>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mt-1">{item.title}</h3>
                    <p className="mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
           </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
