import React, { useEffect } from 'react';
import { Award } from 'lucide-react';
import Container from '../components/ui/Container';
import PageHeader from '../components/shared/PageHeader';
import CertificationCard from '../components/shared/CertificationCard';

const CertificationsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Accessibility Certifications | ADA Launchpad';
    window.scrollTo(0, 0);
  }, []);

  const certifications = [
    {
      title: 'CPACC',
      fullTitle: 'Certified Professional in Accessibility Core Competencies',
      organization: 'International Association of Accessibility Professionals (IAAP)',
      description: 'A foundational certification that demonstrates broad knowledge about disabilities, accessibility and universal design, and relevant laws and standards.',
      difficulty: 'Intermediate',
      duration: '6-12 weeks preparation',
      link: 'https://www.accessibilityassociation.org/s/certified-professional',
    },
    {
      title: 'WAS',
      fullTitle: 'Web Accessibility Specialist',
      organization: 'International Association of Accessibility Professionals (IAAP)',
      description: 'A technical certification that validates your ability to evaluate websites for conformance to WCAG standards and implement accessible solutions.',
      difficulty: 'Advanced',
      duration: '3-6 months preparation',
      link: 'https://www.accessibilityassociation.org/s/web-accessibility-specialist',
    },
    {
      title: 'CPWA',
      fullTitle: 'Certified Professional in Web Accessibility',
      organization: 'International Association of Accessibility Professionals (IAAP)',
      description: 'A comprehensive certification that combines both CPACC and WAS, demonstrating both broad knowledge and technical expertise in web accessibility.',
      difficulty: 'Advanced',
      duration: '6-12 months preparation',
      link: 'https://www.accessibilityassociation.org/s/certified-professional-web-accessibility',
    },
    {
      title: 'ACTCP',
      fullTitle: 'ADA Coordinator Training Certification Program',
      organization: 'University of Missouri & Great Plains ADA Center',
      description: 'A program designed for ADA Coordinators and other professionals responsible for ADA compliance in organizations and government entities.',
      difficulty: 'Intermediate',
      duration: 'Multiple courses',
      link: 'https://www.adacoordinator.org/page/ACTCP',
    },
    {
      title: 'ADA Compliance Certificate',
      fullTitle: 'ADA Compliance Certificate',
      organization: 'National Association of Safety Professionals (NASP)',
      description: 'A certification focused on ADA compliance requirements for businesses and organizations to help prevent discrimination and ensure equal access.',
      difficulty: 'Beginner',
      duration: '4-6 weeks',
      link: 'https://naspweb.com/',
    },
  ];

  return (
    <>
      <PageHeader
        title="Accessibility Certifications"
        description="Build your credentials and demonstrate your expertise with these recognized accessibility certifications, from beginner to advanced levels."
        icon={<Award size={28} />}
      />
      
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <CertificationCard
              key={cert.title}
              title={cert.fullTitle}
              organization={cert.organization}
              description={cert.description}
              difficulty={cert.difficulty as 'Beginner' | 'Intermediate' | 'Advanced'}
              duration={cert.duration}
              link={cert.link}
            />
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-accent-50 rounded-lg border border-accent-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Why Get Certified?</h2>
          <p className="text-gray-700 mb-4">
            Accessibility certifications validate your knowledge and skills, demonstrating to employers and clients that you have 
            the expertise to create accessible digital experiences. They can help advance your career, increase your earning potential, 
            and establish you as a leader in the field of digital accessibility.
          </p>
          <p className="text-gray-700">
            The certifications listed here are recognized industry standards that cover different aspects of accessibility, 
            from broad knowledge to technical implementation. Choose the certification that aligns with your career goals and current expertise level.
          </p>
        </div>
      </Container>
    </>
  );
};

export default CertificationsPage;