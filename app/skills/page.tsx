import React from 'react';
import {
  FaCloud as Cloud,
  FaDatabase as Database,
  FaCode as Code,
  FaMicrochip as Cpu,
  FaCodeBranch as GitBranch,
  FaGaugeHigh as Monitor
} from 'react-icons/fa6';
import { 
  VscAzureDevops as Devops,
  VscVr as Robot,
  VscChip as Technology,
  VscTasklist as Tasks
 } from 'react-icons/vsc';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';
import TechMarquee from '@/components/TechMarquee';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'DevOps & Infrastructure',
      icon: Devops,
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Docker & Kubernetes', level: 85 },
        { name: 'CI/CD Pipelines', level: 80 },
        { name: 'Infrastructure as Code', level: 75 },
        { name: 'Monitoring & Logging', level: 70 },
        { name: 'Linux Administration', level: 85 }
      ]
    },
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      gradient: 'from-sky-500 to-blue-600',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Google Cloud Platform', level: 70 },
        { name: 'Azure', level: 65 },
        { name: 'Serverless Computing', level: 75 },
        { name: 'Cloud Security', level: 70 }
      ]
    },
    {
      title: 'Programming & Development',
      icon: Code,
      gradient: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'Go', level: 70 },
        { name: 'Bash/Shell Scripting', level: 80 },
        { name: 'React.js', level: 85 }
      ]
    },
    {
      title: 'Data & Databases',
      icon: Database,
      gradient: 'from-cyan-500 to-sky-600',
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Redis', level: 70 },
        { name: 'Data Pipeline Design', level: 75 },
        { name: 'Database Optimization', level: 70 }
      ]
    },
    {
      title: 'ML & MLOps',
      icon: Robot,
      gradient: 'from-teal-500 to-cyan-600',
      skills: [
        { name: 'Machine Learning', level: 80 },
        { name: 'MLflow & Kubeflow', level: 70 },
        { name: 'Model Deployment', level: 75 },
        { name: 'Data Preprocessing', level: 85 },
        { name: 'Model Monitoring', level: 70 }
      ]
    },
    {
      title: 'Quantum Computing',
      icon: Cpu,
      gradient: 'from-blue-500 to-cyan-600',
      skills: [
        { name: 'Qiskit', level: 60 },
        { name: 'Quantum Algorithms', level: 55 },
        { name: 'Quantum ML', level: 50 },
        { name: 'Circuit Design', level: 55 },
        { name: 'Quantum Simulation', level: 50 }
      ]
    },
    {
      title: 'Version Control & Collaboration',
      icon: GitBranch,
      gradient: 'from-teal-500 to-blue-500',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'GitLab CI/CD', level: 80 },
        { name: 'Code Review', level: 85 },
        { name: 'Agile Methodologies', level: 75 },
        { name: 'Documentation', level: 80 }
      ]
    },
    {
      title: 'Monitoring & Security',
      icon: Monitor,
      gradient: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Prometheus & Grafana', level: 75 },
        { name: 'ELK Stack', level: 70 },
        { name: 'Security Best Practices', level: 75 },
        { name: 'Container Security', level: 70 },
        { name: 'Network Security', level: 65 }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <ScrollAnimatedSection animation="fade-in" duration={800}>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              My Skills
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise across DevOps, MLOps, 
              AI/ML, and emerging quantum computing technologies.
            </p>
          </div>
        </ScrollAnimatedSection>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <ScrollAnimatedSection
                key={categoryIndex}
                animation="slide-up"
                delay={categoryIndex * 100}
                threshold={0.2}
              >
                <div className="group p-8 glass-card rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:scale-105 transition-all duration-500 group">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {category.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <ScrollAnimatedSection
                        key={skillIndex}
                        animation="slide-right"
                        delay={(categoryIndex * 100) + (skillIndex * 50)}
                        threshold={0.8}
                      >
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-2 rounded-full bg-gradient-to-r ${category.gradient} transition-all duration-1000 ease-out transform origin-left`}
                              style={{ 
                                width: `${skill.level}%`,
                                animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
                              }}
                            ></div>
                          </div>
                        </div>
                      </ScrollAnimatedSection>
                    ))}
                  </div>
                </div>
              </ScrollAnimatedSection>
            );
          })}
        </div>

        {/* Tools & Technologies — Marquee */}
        <ScrollAnimatedSection animation="slide-up" threshold={0.2}>
          <div>
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
              Tools & Technologies
            </h2>

            <TechMarquee />
          </div>
        </ScrollAnimatedSection>

        {/* Certifications & Learning */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollAnimatedSection animation="slide-right" delay={200}>
            <div className="group p-8 glass-card rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-glass dark:hover:shadow-glass-dark transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Current Learning
              </h3>
              <div className="space-y-4">
                {[
                  'Advanced Kubernetes Administration',
                  'Quantum Machine Learning with Qiskit',
                  'MLOps with Kubeflow and MLflow',
                  'Cloud Security Best Practices',
                  'Terraform Advanced Patterns'
                ].map((item, index) => (
                  <ScrollAnimatedSection
                    key={index}
                    animation="slide-left"
                    delay={index * 100}
                    threshold={0.9}
                  >
                    <div className="flex items-center space-x-3 p-3 glass-card rounded-lg hover:glass-card hover:scale-105 transition-all duration-200 group">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  </ScrollAnimatedSection>
                ))}
              </div>
            </div>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="slide-left" delay={400}>
            <div className="group p-8 glass-card rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-glass dark:hover:shadow-glass-dark transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Future Goals
              </h3>
              <div className="space-y-4">
                {[
                  'AWS Solutions Architect Certification',
                  'Certified Kubernetes Administrator (CKA)',
                  'Machine Learning Engineering Certification',
                  'Quantum Computing Specialization',
                  'DevOps Institute Certifications'
                ].map((item, index) => (
                  <ScrollAnimatedSection
                    key={index}
                    animation="slide-right"
                    delay={index * 100}
                    threshold={0.9}
                  >
                    <div className="flex items-center space-x-3 p-3  glass-card rounded-lg hover: glass-card hover:scale-105 transition-all duration-200 group">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  </ScrollAnimatedSection>
                ))}
              </div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Skills;