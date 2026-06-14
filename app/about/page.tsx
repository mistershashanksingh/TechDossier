import React from 'react';
import {
  FaCalendarDays as Calendar,
  FaLocationDot as MapPin,
  FaGraduationCap as GraduationCap,
  FaAward as Award,
  FaRocket as Rocket,
  FaStar as Star,
  FaHandshake as Handshake,
  FaBookOpen as BookOpen
} from 'react-icons/fa6';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';

const About: React.FC = () => {
  const timeline = [
    {
      year: '2023-2025',
      title: 'Master\'s Degree (specializing in Machine Learning)',
      description: 'Completed advanced courses in ML, Deep Learning, and started exploring MLOps.',
      type: 'education'
    },
    {
      year: '2023',
      title: 'DevOps Internship at codinixcloud',
      description: 'Began focusing on DevOps practices, CI/CD pipelines, and cloud technologies.',
      type: 'career'
    },
    {
      year: '2022',
      title: 'Inernship at PW skill(former iNeuron)',
      description: 'Graduated with Computer Science degree, focusing on software engineering.',
      type: 'career'
    },
    {
      year: '2019-2022',
      title: 'Bachelor\'s Degree',
      description: 'Graduated with Computer Science degree, focusing on software engineering.',
      type: 'education'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Constantly exploring new technologies and methodologies to solve complex problems.',
      icon: Rocket
    },
    {
      title: 'Quality',
      description: 'Committed to delivering high-quality, scalable, and maintainable solutions.',
      icon: Star
    },
    {
      title: 'Collaboration',
      description: 'Believing in the power of teamwork and knowledge sharing.',
      icon: Handshake
    },
    {
      title: 'Continuous Learning',
      description: 'Always staying updated with the latest trends and best practices.',
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <ScrollAnimatedSection animation="fade-in" duration={800}>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A passionate technologist dedicated to bridging the gap between development and operations,
              while exploring the frontiers of AI and quantum computing.
            </p>
          </div>
        </ScrollAnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Personal Info */}
          <ScrollAnimatedSection animation="slide-right" delay={200}>
            <div className="group p-8 glass-card rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-glass dark:hover:shadow-glass-dark transition-all duration-300 ">
              
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 ">
                Personal Info
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: Calendar, label: 'Age', value: '24 Years', gradient: 'from-cyan-500 to-blue-600' },
                  { icon: MapPin, label: 'Location', value: 'Remote / Global', gradient: 'from-sky-500 to-blue-600' },
                  { icon: GraduationCap, label: 'Education', value: 'Computer Science', gradient: 'from-cyan-500 to-teal-600' },
                  { icon: Award, label: 'Experience', value: 'Fresher', gradient: 'from-teal-500 to-cyan-600' }
                ].map((item, index) => (
                  <ScrollAnimatedSection
                    key={index}
                    animation="slide-left"
                    delay={index * 100}
                    threshold={0.8}
                  >
                    <div className="flex items-center space-x-4 group">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">{item.label}</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">{item.value}</p>
                      </div>
                    </div>
                  </ScrollAnimatedSection>
                ))}
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* Bio */}
          <ScrollAnimatedSection animation="slide-left" delay={400}>
            <div className="group p-8 glass-card rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-glass dark:hover:shadow-glass-dark transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                My Story
              </h2>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                {[
                  "As a fresh graduate in Computer Science, I'm passionate about the intersection of development and operations, with a keen interest in machine learning operations and emerging quantum computing technologies.",
                  "My journey began with traditional software development, but I quickly became fascinated by the challenges of deploying, scaling, and maintaining applications in production environments. This led me to explore DevOps practices and cloud technologies.",
                  "Currently, I'm diving deep into MLOps, understanding how to build robust pipelines for machine learning models, and exploring the potential of quantum machine learning to solve complex computational problems.",
                  "I believe in continuous learning and staying updated with the latest technological advancements. My goal is to contribute to building more efficient, scalable, and intelligent systems that can make a positive impact on society."
                ].map((paragraph, index) => (
                  <ScrollAnimatedSection
                    key={index}
                    animation="fade-in"
                    delay={index * 200}
                    threshold={0.9}
                  >
                    <p>{paragraph}</p>
                  </ScrollAnimatedSection>
                ))}
              </div>
            </div>
          </ScrollAnimatedSection>
        </div>

        {/* Timeline */}
        <ScrollAnimatedSection animation="slide-up" threshold={0.2}>
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
              My Journey
            </h2>
            
            <div className="relative max-w-6xl mx-auto">
              {/* Timeline line - responsive positioning */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-sky-400 md:transform md:-translate-x-0.5"></div>
              
              <div className="space-y-16 md:space-y-12">
                {timeline.map((item, index) => (
                  <ScrollAnimatedSection
                    key={index}
                    animation="slide-up"
                    delay={index * 200}
                    threshold={0.3}
                  >
                    <div className="relative">
                      {/* Mobile layout - all items on right side */}
                      <div className="md:hidden ml-20">
                        <div className="group p-8 glass-card rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-sky-400 text-white text-sm font-medium rounded-full">
                              {item.year}
                            </span>
                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                              item.type === 'education' 
                                ? 'bg-neural-100 dark:bg-neural-900/30 text-neural-700 dark:text-neural-300'
                                : 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300'
                            }`}>
                              {item.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        {/* Mobile timeline dot */}
                        <div className="absolute left-8 top-8 w-4 h-4 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full border-4 border-white dark:border-gray-900 animate-pulse transform -translate-x-1/2"></div>
                      </div>
                      
                      {/* Desktop layout - alternating sides */}
                      <div className={`hidden md:flex items-center ${
                        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                      }`}>
                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                          <div className="group p-8 glass-card rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                            <div className="flex items-center space-x-3 mb-3">
                              <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-sky-400 text-white text-sm font-medium rounded-full">
                                {item.year}
                              </span>
                              <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                                item.type === 'education' 
                                  ? 'bg-neural-100 dark:bg-neural-900/30 text-neural-700 dark:text-neural-300'
                                  : 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300'
                              }`}>
                                {item.type}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Desktop timeline dot */}
                        <div className="absolute left-1/2 top-8 w-4 h-4 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full border-4 border-white dark:border-gray-900 transform -translate-x-1/2 animate-pulse"></div>
                        
                        {/* Empty space for alternating layout */}
                        <div className="w-1/2"></div>
                      </div>
                    </div>
                  </ScrollAnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* Values */}
        <ScrollAnimatedSection animation="slide-up" threshold={0.2}>
          <div>
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
              My Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                <ScrollAnimatedSection
                  key={index}
                  animation="scale-in"
                  delay={index * 150}
                  threshold={0.3}
                >
                  <div className="text-center group p-8 glass-card rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </ScrollAnimatedSection>
                );
              })}
            </div>
          </div>
        </ScrollAnimatedSection>
      </div>
    </div>
  );
};

export default About;