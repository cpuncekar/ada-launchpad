import React, { useEffect } from 'react';
import { BookOpen } from 'lucide-react';
import Container from '../components/ui/Container';
import PageHeader from '../components/shared/PageHeader';
import ResourceCard from '../components/shared/ResourceCard';

const BeginnerA11yPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Beginner Accessibility Resources | ADA Launchpad';
    window.scrollTo(0, 0);
  }, []);

  const resources = [
    {
      title: 'W3C Web Accessibility Introduction',
      description: 'The official introduction to web accessibility from the World Wide Web Consortium, covering fundamental concepts and principles.',
      link: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/',
      image: 'https://images.pexels.com/photos/6804580/pexels-photo-6804580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Official', 'Free', 'Beginner Friendly']
    },
    {
      title: 'Google Accessibility Course',
      description: 'Learn the fundamentals of web accessibility, focusing on both design and development considerations for creating inclusive experiences.',
      link: 'https://web.dev/learn/accessibility/',
      image: 'https://images.pexels.com/photos/5926380/pexels-photo-5926380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Free', 'Interactive', 'Google']
    },
    {
      title: 'WAVE by WebAIM Tool',
      description: 'A web accessibility evaluation tool that helps identify accessibility issues on your websites and provides guidance on fixing them.',
      link: 'https://wave.webaim.org/',
      image: 'https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Tool', 'Free', 'Evaluation']
    },
    {
      title: 'LinkedIn Learning – Accessibility for Designers',
      description: 'A comprehensive course for designers to learn how to create accessible digital experiences through proper design practices.',
      link: 'https://www.linkedin.com/learning/topics/accessibility',
      image: 'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Course', 'Design Focus', 'Paid']
    },
    {
      title: 'Udemy: How to Design for Accessibility',
      description: 'Learn practical design techniques to ensure your websites and applications are accessible to users with disabilities.',
      link: 'https://www.udemy.com/courses/search/?src=ukw&q=web+accessibility',
      image: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Course', 'Design Focus', 'Paid']
    },
    {
      title: 'A11y Project',
      description: 'A community-driven effort to make web accessibility easier, with straightforward resources and practical examples.',
      link: 'https://www.a11yproject.com/',
      image: 'https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Community', 'Free', 'Resources']
    },
  ];

  return (
    <>
      <PageHeader
        title="Beginner Track: Start Learning Accessibility"
        description="Start your journey with these introductory resources designed for beginners. No prior experience required to begin making your digital products more accessible."
        icon={<BookOpen size={28} />}
      />
      
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.title}
              title={resource.title}
              description={resource.description}
              link={resource.link}
              image={resource.image}
              tags={resource.tags}
            />
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-primary-50 rounded-lg border border-primary-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Why Start with Accessibility?</h2>
          <p className="text-gray-700 mb-4">
            Learning accessibility fundamentals helps you create digital experiences that can be used by everyone, 
            including people with disabilities. It's not just about compliance—it's about ensuring equal access to information 
            and functionality for all users.
          </p>
          <p className="text-gray-700">
            These beginner resources will help you understand the basics of web accessibility, including the 
            Web Content Accessibility Guidelines (WCAG), assistive technologies, and inclusive design principles.
          </p>
        </div>
      </Container>
    </>
  );
};

export default BeginnerA11yPage;