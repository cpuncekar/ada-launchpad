import React, { useEffect } from 'react';
import { BookOpen } from 'lucide-react';
import Container from '../components/ui/Container';
import PageHeader from '../components/shared/PageHeader';
import ResourceCard from '../components/shared/ResourceCard';

const IntermediateA11yPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Intermediate Accessibility Resources | ADA Launchpad';
    window.scrollTo(0, 0);
  }, []);

  const resources = [
    {
      title: 'Microsoft Learn – Inclusive Design',
      description: 'Comprehensive resources and techniques from Microsoft on designing products that can be used by people with diverse abilities and preferences.',
      link: 'https://learn.microsoft.com/en-us/windows/apps/design/accessibility/designing-inclusive-software',
      image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Design', 'Microsoft', 'Free']
    },
    {
      title: 'Figma Able Plugin',
      description: 'A Figma plugin that helps designers check and improve the accessibility of their designs, including color contrast and text readability.',
      link: 'https://www.figma.com/community/plugin/734693888346260052/Able-%E2%80%93-Friction-free-accessibility',
      image: 'https://images.pexels.com/photos/6804047/pexels-photo-6804047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Tool', 'Design', 'Figma']
    },
    {
      title: 'axe DevTools Chrome Extension',
      description: 'A powerful browser extension that helps developers find and fix accessibility issues during development with automated testing.',
      link: 'https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg',
      tags: ['Tool', 'Development', 'Free']
    },
    {
      title: 'Deque University',
      description: 'In-depth courses and resources for intermediate to advanced accessibility learning, covering WCAG 2.1 techniques and implementation.',
      link: 'https://dequeuniversity.com/',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Course', 'Comprehensive', 'Paid']
    },
    {
      title: 'Web Accessibility In Mind (WebAIM) Articles',
      description: 'Detailed articles and resources covering advanced accessibility topics like ARIA, keyboard navigation, and screen reader compatibility.',
      link: 'https://webaim.org/articles/',
      image: 'https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Articles', 'Technical', 'Free']
    },
    {
      title: 'Smashing Magazine Accessibility Guide',
      description: 'In-depth technical articles on implementing accessibility in real-world projects, covering both front-end and back-end considerations.',
      link: 'https://www.smashingmagazine.com/guides/accessibility/',
      image: 'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Guide', 'Technical', 'Free']
    },
  ];

  return (
    <>
      <PageHeader
        title="Intermediate Techniques & Best Practices"
        description="Take your accessibility skills to the next level with these more advanced resources, tools, and techniques for creating truly inclusive digital experiences."
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
        
        <div className="mt-12 p-6 bg-secondary-50 rounded-lg border border-secondary-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Advancing Your Accessibility Skills</h2>
          <p className="text-gray-700 mb-4">
            These intermediate resources build upon foundational knowledge to help you implement more advanced 
            accessibility techniques. You'll learn how to use specialized tools, understand complex WCAG requirements, 
            and integrate accessibility throughout your design and development workflows.
          </p>
          <p className="text-gray-700">
            By mastering these intermediate concepts, you'll be better equipped to create digital experiences that are 
            not just technically accessible, but truly inclusive and user-friendly for people with a wide range of abilities.
          </p>
        </div>
      </Container>
    </>
  );
};

export default IntermediateA11yPage;