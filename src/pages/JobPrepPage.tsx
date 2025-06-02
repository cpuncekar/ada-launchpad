import React, { useEffect } from 'react';
import { Briefcase } from 'lucide-react';
import Container from '../components/ui/Container';
import PageHeader from '../components/shared/PageHeader';
import Card from '../components/ui/Card';

const JobPrepPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Accessibility Job Preparation | ADA Launchpad';
    window.scrollTo(0, 0);
  }, []);

  const jobResources = [
    {
      title: 'Accessibility-Focused Job Boards',
      items: [
        { name: 'Accessibility Jobs Board', link: 'https://www.accessibilityjobsboard.com/' },
        { name: 'A11Y Jobs', link: 'https://www.a11yjobs.com/' },
        { name: 'Inclusive Jobs', link: 'https://inclusivejobs.com/' },
        { name: 'LinkedIn Jobs (search "accessibility")', link: 'https://www.linkedin.com/jobs/' },
      ]
    },
    {
      title: 'Highlighting Accessibility in Your Portfolio',
      items: [
        { name: 'Document your accessibility process', link: '#' },
        { name: 'Show before/after accessibility improvements', link: '#' },
        { name: 'Include accessibility testing results', link: '#' },
        { name: 'Demonstrate screen reader compatibility', link: '#' },
      ]
    },
    {
      title: 'Explaining WCAG Knowledge in Interviews',
      items: [
        { name: 'Prepare specific examples of implementing WCAG guidelines', link: '#' },
        { name: 'Practice explaining technical concepts in simple terms', link: '#' },
        { name: 'Be ready to discuss accessibility testing methodologies', link: '#' },
        { name: 'Understand the business case for accessibility', link: '#' },
      ]
    },
    {
      title: 'Listing Certifications on Resume/LinkedIn',
      items: [
        { name: 'Add certifications to the dedicated LinkedIn section', link: '#' },
        { name: 'Include certification logos where appropriate', link: '#' },
        { name: 'Mention accessibility skills in your professional summary', link: '#' },
        { name: 'Join accessibility-focused LinkedIn groups', link: '#' },
      ]
    },
  ];

  const commonRoles = [
    {
      title: 'Accessibility Specialist',
      description: 'Focused role dedicated to ensuring digital products meet accessibility standards through testing, remediation, and guidance.',
      skills: ['WCAG expertise', 'Assistive technology knowledge', 'Accessibility testing', 'Remediation techniques'],
    },
    {
      title: 'UX Designer (Accessibility Focus)',
      description: 'Design role with specialized focus on creating inclusive user experiences that work for people with disabilities.',
      skills: ['Inclusive design patterns', 'Color contrast expertise', 'User testing with diverse users', 'Accessible prototyping'],
    },
    {
      title: 'Frontend Developer (Accessibility Focus)',
      description: 'Developer who specializes in implementing accessible HTML, CSS, and JavaScript with proper ARIA attributes and keyboard navigation.',
      skills: ['Semantic HTML', 'ARIA implementation', 'JavaScript accessibility', 'CSS accessibility techniques'],
    },
    {
      title: 'Digital Accessibility Consultant',
      description: 'External expert who advises organizations on accessibility compliance, testing methodologies, and implementation strategies.',
      skills: ['Accessibility auditing', 'Compliance knowledge', 'Remediation planning', 'Training delivery'],
    },
    {
      title: 'Accessibility Program Manager',
      description: 'Organizational leader who develops and implements accessibility strategies, policies, and training programs.',
      skills: ['Program management', 'Stakeholder communication', 'Accessibility policy development', 'Training coordination'],
    },
  ];

  return (
    <>
      <PageHeader
        title="ADA in UX Interviews & Job Skills"
        description="Learn how to showcase your accessibility knowledge in job applications, interviews, and portfolios to stand out in the industry."
        icon={<Briefcase size={28} />}
      />
      
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {jobResources.map((resource) => (
            <Card key={resource.title} title={resource.title} className="h-full">
              <ul className="space-y-3">
                {resource.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-primary-100 text-primary-700 p-1 rounded-full mr-2 mt-0.5">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item.link !== '#' ? (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-primary-700 transition-colors"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <span className="text-gray-700">{item.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 font-heading mb-6">Common Accessibility-Focused Roles</h2>
        
        <div className="space-y-6">
          {commonRoles.map((role) => (
            <Card key={role.title} className="border-l-4 border-primary-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{role.title}</h3>
              <p className="text-gray-700 mb-4">{role.description}</p>
              <div className="flex flex-wrap gap-2">
                {role.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-primary-50 rounded-lg border border-primary-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Standing Out in the Accessibility Field</h2>
          <p className="text-gray-700 mb-4">
            As organizations increasingly prioritize digital accessibility, professionals with expertise in this area are in high demand. 
            To stand out in this growing field, showcase both your technical knowledge and your understanding of the human impact of 
            accessible design.
          </p>
          <p className="text-gray-700">
            Consider contributing to open-source accessibility projects, participating in accessibility communities, and documenting 
            your accessibility work in case studies. Employers value both practical skills and a genuine commitment to creating 
            inclusive digital experiences.
          </p>
        </div>
      </Container>
    </>
  );
};

export default JobPrepPage;