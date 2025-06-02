import React, { useEffect } from 'react';
import { School } from 'lucide-react';
import Container from '../components/ui/Container';
import PageHeader from '../components/shared/PageHeader';
import UniversityCard from '../components/shared/UniversityCard';

const UniversitiesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'University Accessibility Programs | ADA Launchpad';
    window.scrollTo(0, 0);
  }, []);

  const universities = [
    {
      name: 'Arizona State University',
      programs: [
        { name: 'BA in Disability Studies (Online)', link: 'https://asuonline.asu.edu/' },
        { name: 'Disability Studies Minor', link: 'https://asuonline.asu.edu/' },
        { name: 'Disability Studies Certificate', link: 'https://asuonline.asu.edu/' },
        { name: 'Graduate Certificate in Disability Studies', link: 'https://asuonline.asu.edu/' },
        { name: 'AccessZone Training Program', link: 'https://asuonline.asu.edu/' },
      ],
    },
    {
      name: 'University of Illinois Urbana-Champaign',
      programs: [
        { name: 'Information Accessibility Design & Policy Certificate', link: 'https://online.illinois.edu/online-programs/graduate-certificates/information-accessibility-design-and-policy' },
      ],
    },
    {
      name: 'University of Michigan',
      programs: [
        { name: 'Certificate in Disability Inclusion and Accessible Design (DIAD)', link: 'https://sites.google.com/umich.edu/um-diad-certificate/home' },
      ],
    },
    {
      name: 'University of Washington',
      programs: [
        { name: 'Specialization in Web & Digital Accessibility', link: 'https://www.washington.edu/accessibility/' },
      ],
    },
    {
      name: 'Gallaudet University',
      programs: [
        { name: 'MS in Accessible Human-Centered Computing', link: 'https://www.gallaudet.edu/' },
      ],
    },
    {
      name: 'Central Washington University',
      programs: [
        { name: 'Accessibility Studies Certificate', link: 'https://www.cwu.edu/accessibility-studies/' },
        { name: 'Master of Accessibility Studies', link: 'https://www.cwu.edu/accessibility-studies/' },
      ],
    },
    {
      name: 'University of Wisconsin–Madison',
      programs: [
        { name: 'Graphic Design for Accessibility Course', link: 'https://continuingstudies.wisc.edu/' },
      ],
    },
    {
      name: 'Columbia University',
      programs: [
        { name: 'Accessibility Research via CEAL Lab', link: 'https://www.columbia.edu/' },
      ],
    },
  ];

  return (
    <>
      <PageHeader
        title="University Degrees & Certificates in Accessibility"
        description="Explore formal education options in accessibility and disability studies from top universities, including both online and on-campus programs."
        icon={<School size={28} />}
      />
      
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((university) => (
            <UniversityCard
              key={university.name}
              name={university.name}
              programs={university.programs}
            />
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-success-50 rounded-lg border border-success-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Why Pursue Formal Education in Accessibility?</h2>
          <p className="text-gray-700 mb-4">
            University programs offer comprehensive, structured learning experiences with access to expert faculty, 
            research opportunities, and peer collaboration. They provide a deep understanding of accessibility within 
            broader contexts like disability studies, human-computer interaction, and inclusive design.
          </p>
          <p className="text-gray-700">
            Whether you're looking for a full degree program or a focused certificate, these educational offerings can 
            help you build specialized knowledge that bridges technical skills with the social, legal, and ethical dimensions 
            of accessibility.
          </p>
        </div>
      </Container>
    </>
  );
};

export default UniversitiesPage;