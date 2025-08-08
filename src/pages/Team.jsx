import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, GraduationCap, BookOpen } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
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

const Team = () => {
  const founders = [
    {
      name: "Dr. Atasi Sarkar",
      designation: "Founder & Director",
      image: "https://placehold.co/400x400/e2e8f0/475569?text=A.S.",
      linkedin: "#",
      education: "M.Tech-Ph.D. Biological Science, IIT KGP",
      experience: "10+ Years",
    },
    {
      name: "Dr. Soumya Sarkar",
      designation: "Co-Founder & Academic Head",
      image: "https://placehold.co/400x400/e2e8f0/475569?text=S.S.",
      linkedin: "#",
      education: "Ph.D. Biological Science, ISI Kolkata",
      experience: "15+ Years",
    },
    {
      name: "Soubantik Sengupta",
      designation: "Chief Operating Officer and Co-founder",
      image: "https://placehold.co/400x400/e2e8f0/475569?text=S.S.",
      linkedin: "#",
      education: "M.Sc. Cognitive Science, IIT Delhi",
      experience: "5+ Years",
    },
    {
      name: "Rajritwik Tarafdar",
      designation: "Chief Marketing Officer",
      image: "https://placehold.co/400x400/e2e8f0/475569?text=R.T.",
      linkedin: "#",
      education: "B.Tech Electrical Engineering",
      experience: "12+ Years",
    },
  ];

  const mentors = [
    {
      name: "Avik Ghosh",
      image: "https://placehold.co/400x400/e2e8f0/475569?text=A.G.",
      linkedin: "#",
      education: "M.Sc. Mathematics, Jadavpur University",
      experience: "5+ Years",
      specialization: "Mathematics",
    },
    {
      name: "Debarghya De",
      image: "https://placehold.co/400x400/e2e8f0/475569?text=D.D.",
      linkedin: "#",
      education: "i-Ph.D. Biological Science, IISER Pune",
      experience: "3+ Years",
      specialization: "Biology",
    },
    {
      name: "Shubhradip Adhikary",
      image: "https://placehold.co/400x400/e2e8f0/475569?text=S.A.",
      linkedin: "#",
      education: "M.Sc. Biological Science, IISc Bangalore",
      experience: "3+ Years",
      specialization: "Biology",
    },
    {
      name: "Ahamadullah Khan",
      image: "https://placehold.co/400x400/e2e8f0/475569?text=A.K.",
      linkedin: "#",
      education: "Ph.D. Physics, IISER Kolkata",
      experience: "5+ Years",
      specialization: "Physics",
    },
    {
      name: "Soumyadeep Dey",
      image: "https://placehold.co/400x400/e2e8f0/475569?text=S.D.",
      linkedin: "#",
      education: "Ph.D. Chemistry, IISER Mohali",
      experience: "5+ Years",
      specialization: "Chemistry",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="relative bg-slate-50 dark:bg-gray-800 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">
              Meet Our Team
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
              The passionate educators and researchers dedicated to making
              Scigeeks a center of excellence in science education.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
              The Founders
            </h2>
            <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-12">
              A Team of Perfectionists in Pedagogy
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {founders.map((member, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-50 dark:bg-gray-800 rounded-lg overflow-hidden text-center"
                >
                  <div className="relative pt-[100%]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <h3 className="text-xl font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="text-sm text-slate-300">
                        {member.designation}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
                      <p className="flex items-center gap-2">
                        <GraduationCap size={16} /> {member.education}
                      </p>
                      <p className="flex items-center gap-2">
                        <Briefcase size={16} /> {member.experience} Experience
                      </p>
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-600 text-white hover:bg-slate-700 transition-colors"
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
              Our Mentors
            </h2>
            <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-12">
              A Team of Geeky Scientists
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {mentors.map((member, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden text-center"
                >
                  <div className="relative pt-[100%]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <h3 className="text-lg font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="flex items-center justify-center gap-2">
                        <BookOpen size={16} /> {member.specialization}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-4 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                      <p className="flex items-center justify-center gap-2">
                        <GraduationCap /> {member.education}
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <Briefcase size={16} /> {member.experience} Experience
                      </p>
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-600 text-white hover:bg-slate-700 transition-colors  active:bg-slate-700"
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </a>
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

export default Team;
