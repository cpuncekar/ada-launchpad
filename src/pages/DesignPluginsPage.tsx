import React, { useEffect } from 'react';
import { Palette } from 'lucide-react';
import Container from '../components/ui/Container';
import PageHeader from '../components/shared/PageHeader';
import ResourceCard from '../components/shared/ResourceCard';

const DesignPluginsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Accessibility Design Plugins | ADA Launchpad';
    window.scrollTo(0, 0);
  }, []);

  const plugins = [
    {
      title: 'Able – Figma Plugin',
      description: 'An accessibility assistant for Figma that helps designers identify and fix accessibility issues directly within their design workflow.',
      link: 'https://www.figma.com/community/plugin/734693888346260052/Able-%E2%80%93-Friction-free-accessibility',
      image: 'https://images.pexels.com/photos/6804047/pexels-photo-6804047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Figma', 'Free', 'Color Testing']
    },
    {
      title: 'Stark – Figma, Adobe XD & Sketch',
      description: 'A suite of integrated accessibility tools for designers, including color contrast checker, color blindness simulation, and focus order checker.',
      link: 'https://www.getstark.co/',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Figma', 'Adobe XD', 'Sketch', 'Paid']
    },
    {
      title: 'Contrast Checker – Coolors',
      description: 'A simple web-based tool to check the contrast ratio of text and background colors against WCAG standards.',
      link: 'https://coolors.co/contrast-checker',
      image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Web Tool', 'Free', 'Color Testing']
    },
    {
      title: 'A11y – Color Contrast Checker',
      description: 'A plugin that lets you check the contrast ratio of colors directly within Figma, ensuring your designs meet WCAG requirements.',
      link: 'https://www.figma.com/community/plugin/733159460536249875/A11y---Color-Contrast-Checker',
      image: 'https://images.pexels.com/photos/4101181/pexels-photo-4101181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Figma', 'Free', 'Color Testing']
    },
    {
      title: 'Axe for Designers',
      description: 'A Figma plugin from Deque that brings enterprise-level accessibility testing to your design workflow.',
      link: 'https://www.deque.com/axe/devtools/figma-plugin/',
      image: 'https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Figma', 'Free', 'Comprehensive']
    },
    {
      title: 'Leonardo Color',
      description: 'An open-source tool from Adobe that helps create accessible color palettes with proper contrast ratios between colors.',
      link: 'https://leonardocolor.io/',
      image: 'https://images.pexels.com/photos/3699295/pexels-photo-3699295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Web Tool', 'Free', 'Color Systems']
    },
  ];

  return (
    <>
      <PageHeader
        title="Accessibility Plugins for Designers"
        description="Integrate accessibility directly into your design workflow with these plugins and tools for popular design applications."
        icon={<Palette size={28} />}
      />
      
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plugins.map((plugin) => (
            <ResourceCard
              key={plugin.title}
              title={plugin.title}
              description={plugin.description}
              link={plugin.link}
              image={plugin.image}
              tags={plugin.tags}
            />
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-error-50 rounded-lg border border-error-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Designing with Accessibility in Mind</h2>
          <p className="text-gray-700 mb-4">
            The most effective approach to accessibility is to consider it from the very beginning of the design process. 
            These plugins help integrate accessibility checks directly into your workflow, making it easier to create 
            inclusive designs from the start, rather than retrofitting them later.
          </p>
          <p className="text-gray-700">
            While these tools are invaluable, remember that they're just one part of accessible design. Understanding 
            the principles behind accessibility guidelines and considering diverse user needs throughout your design 
            process will lead to the most inclusive results.
          </p>
        </div>
      </Container>
    </>
  );
};

export default DesignPluginsPage;