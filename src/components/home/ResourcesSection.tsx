import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, School, TestTube, Palette, Briefcase } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  color: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, icon, to, color }) => {
  return (
    <Link 
      to={to} 
      className="block transition-transform hover:translate-y-[-4px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded-lg"
    >
      <Card className="h-full">
        <div className="flex flex-col h-full">
          <div className={`${color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 flex-grow">{description}</p>
          <div className="mt-4 text-primary-600 font-medium flex items-center">
            Explore resources
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Card>
    </Link>
  );
};

const ResourcesSection: React.FC = () => {
  const resources = [
    {
      title: 'Beginner A11y',
      description: 'Start your accessibility journey with foundational resources for beginners.',
      icon: <BookOpen size={24} className="text-white" />,
      to: '/beginner-a11y',
      color: 'bg-primary-600',
    },
    {
      title: 'Intermediate A11y',
      description: 'Take your accessibility skills to the next level with advanced techniques.',
      icon: <BookOpen size={24} className="text-white" />,
      to: '/intermediate-a11y',
      color: 'bg-secondary-600',
    },
    {
      title: 'Certifications',
      description: 'Get professionally certified in accessibility and showcase your expertise.',
      icon: <Award size={24} className="text-white" />,
      to: '/certifications',
      color: 'bg-accent-500',
    },
    {
      title: 'Universities',
      description: 'Explore accessibility degrees and certificate programs from top universities.',
      icon: <School size={24} className="text-white" />,
      to: '/universities',
      color: 'bg-success-600',
    },
    {
      title: 'Testing Tools',
      description: 'Discover the best tools for testing and validating accessibility compliance.',
      icon: <TestTube size={24} className="text-white" />,
      to: '/testing-tools',
      color: 'bg-warning-500',
    },
    {
      title: 'Design Plugins',
      description: 'Enhance your design workflow with accessibility-focused plugins and tools.',
      icon: <Palette size={24} className="text-white" />,
      to: '/design-plugins',
      color: 'bg-error-600',
    },
    {
      title: 'Job Prep',
      description: 'Prepare for accessibility-focused roles and showcase your skills to employers.',
      icon: <Briefcase size={24} className="text-white" />,
      to: '/job-prep',
      color: 'bg-primary-800',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-heading mb-4">Accessibility Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our curated collection of resources to build your accessibility expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.title}
              title={resource.title}
              description={resource.description}
              icon={resource.icon}
              to={resource.to}
              color={resource.color}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ResourcesSection;