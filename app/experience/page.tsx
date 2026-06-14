import React from 'react';
import {
  FaCalendarDays as Calendar,
  FaLocationDot as MapPin,
  FaBuilding as Building,
  FaTrophy as Trophy,
  FaBookOpen as BookOpen
} from 'react-icons/fa6';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'DevOps Engineer',
      company: 'Tech Startup (Internship)',
      location: 'Remote',
      period: 'Jun 2024 - Present',
      type: 'internship',
      description: 'Working on containerizing applications, setting up CI/CD pipelines, and learning cloud deployment strategies.',
      achievements: [
        'Containerized 5+ applications using Docker',
        'Set up automated testing pipelines with GitHub Actions',
        'Learned Kubernetes fundamentals and deployment strategies',
        'Assisted in infrastructure monitoring setup'
      ],
      technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS', 'Python', 'Bash']
    },
    {
      title: 'ML Research Assistant',
      company: 'University Lab',
      location: 'Campus',
      period: 'Jan 2024 - May 2024',
      type: 'research',
      description: 'Assisted in machine learning research projects, focusing on data preprocessing and model evaluation.',
      achievements: [
        'Preprocessed datasets for 3 research projects',
        'Implemented various ML algorithms from scratch',
        'Contributed to research paper on quantum ML applications',
        'Presented findings at university symposium'
      ],
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Jupyter', 'Qiskit']
    },
    {
      title: 'Software Development Intern',
      company: 'Local Tech Company',
      location: 'Hybrid',
      period: 'Jul 2023 - Sep 2023',
      type: 'internship',
      description: 'Developed web applications and learned full-stack development principles.',
      achievements: [
        'Built responsive web application using React and Node.js',
        'Implemented RESTful APIs with Express.js',
        'Worked with PostgreSQL database design',
        'Collaborated with team using Git and Agile methodologies'
      ],
      technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Git', 'JavaScript']
    }
  ];

  const projects = [
    {
      title: 'Automated CI/CD Pipeline',
      description: 'Built end-to-end CI/CD pipeline for microservices deployment',
      period: '2024',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'AWS'],
      achievements: ['Reduced deployment time by 60%', 'Zero-downtime deployments']
    },
    {
      title: 'ML Model Deployment Platform',
      description: 'Created MLOps platform for model versioning and deployment',
      period: '2024',
      technologies: ['MLflow', 'Docker', 'FastAPI', 'PostgreSQL'],
      achievements: ['Automated model lifecycle', 'Real-time monitoring dashboard']
    },
    {
      title: 'Quantum ML Research',
      description: 'Explored quantum algorithms for machine learning applications',
      period: '2023-2024',
      technologies: ['Qiskit', 'Python', 'Numpy', 'Matplotlib'],
      achievements: ['Published research findings', 'Quantum advantage demonstration']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      period: '2020 - 2024',
      grade: 'First Class Honours',
      specialization: 'Software Engineering & AI',
      courses: [
        'Data Structures and Algorithms',
        'Machine Learning',
        'Database Systems',
        'Software Engineering',
        'Computer Networks',
        'Quantum Computing Fundamentals'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      status: 'In Progress'
    },
    {
      name: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: '2024',
      status: 'Planned'
    },
    {
      name: 'Machine Learning Specialization',
      issuer: 'Coursera/Stanford',
      date: '2023',
      status: 'Completed'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <ScrollAnimatedSection animation="fade-in" duration={800}>
          <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My journey through internships, research, and hands-on projects in DevOps, 
            MLOps, and emerging technologies.
          </p>
          </div>
        </ScrollAnimatedSection>

        {/* Professional Experience */}
        <div className="mb-20">
          <ScrollAnimatedSection animation="slide-up" threshold={0.2}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-16">
            Professional Experience
          </h2>
          </ScrollAnimatedSection>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ScrollAnimatedSection
                key={index}
                animation="slide-up"
                delay={index * 200}
                threshold={0.1}
              >
                <div className="group group p-8 glass-card rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        exp.type === 'internship' 
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                          : 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <Building size={16} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start space-x-2 text-gray-600 dark:text-gray-300"
                      >
                        <Trophy size={16} className="text-primary-500 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-sky-100 dark:from-blue-900/30 dark:to-sky-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>

        {/* Notable Projects */}
        <div className="mb-20">
          <ScrollAnimatedSection animation="slide-up" threshold={0.2}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-16">
            Notable Projects
          </h2>
          </ScrollAnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimatedSection
                key={index}
                animation="scale-in"
                delay={index * 150}
                threshold={0.2}
              >
                <div className="group p-8 glass-card rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.period}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-1">
                  {project.achievements.map((achievement, achIndex) => (
                    <div
                      key={achIndex}
                      className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <ScrollAnimatedSection animation="slide-right" delay={200} threshold={0.2}>
            <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Education
            </h2>
            
            {education.map((edu, index) => (
              <div
                key={index}
                className="group p-8 glass-card rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {edu.institution} • {edu.period}
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                        {edu.grade}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {edu.specialization}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-2 gap-1 text-sm text-gray-600 dark:text-gray-300">
                    {edu.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            </div>
          </ScrollAnimatedSection>

          {/* Certifications */}
          <ScrollAnimatedSection animation="slide-left" delay={400} threshold={0.2}>
            <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Certifications
            </h2>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group p-8 glass-card rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      cert.status === 'Completed' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                        : cert.status === 'In Progress'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Experience;