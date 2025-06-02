import React, { useEffect } from 'react';
import { TestTube } from 'lucide-react';
import Container from '../components/ui/Container';
import PageHeader from '../components/shared/PageHeader';
import ResourceCard from '../components/shared/ResourceCard';

const TestingToolsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Accessibility Testing Tools | ADA Launchpad';
    window.scrollTo(0, 0);
  }, []);

  const tools = [
    {
      title: 'WAVE by WebAIM',
      description: 'A comprehensive web accessibility evaluation tool that identifies accessibility issues directly within your browser, showing them in context on the page.',
      link: 'https://wave.webaim.org/',
      image: 'https://images.pexels.com/photos/7014442/pexels-photo-7014442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Free', 'Browser Extension', 'Visual Reporting']
    },
    {
      title: 'Google Lighthouse',
      description: 'An open-source, automated tool for improving the quality of web pages, including accessibility audits, built into Chrome DevTools.',
      link: 'https://developers.google.com/web/tools/lighthouse',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Free', 'Built-in Chrome', 'Performance Testing']
    },
    {
      title: 'axe DevTools',
      description: 'Powerful accessibility testing tools that integrate into your development workflow, helping you find and fix issues during development.',
      link: 'https://www.deque.com/axe/',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Browser Extension', 'Developer Tools', 'Free & Pro Versions']
    },
    {
      title: 'Accessibility Insights for Web',
      description: 'A Microsoft tool that helps developers find and fix accessibility issues in web apps and sites, with automated and guided manual testing.',
      link: 'https://accessibilityinsights.io/',
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Free', 'Microsoft', 'Automated & Manual Testing']
    },
    {
      title: 'Pa11y',
      description: 'A command-line interface and developer toolkit to improve accessibility testing in your projects, great for integration into CI/CD pipelines.',
      link: 'https://pa11y.org/',
      image: 'https://images.pexels.com/photos/7887800/pexels-photo-7887800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Open Source', 'CLI Tool', 'CI Integration']
    },
    {
      title: 'Colour Contrast Analyser',
      description: 'A desktop application that helps you determine the legibility of text and the contrast of visual elements according to WCAG standards.',
      link: 'https://www.tpgi.com/color-contrast-checker/',
      image: 'https://images.pexels.com/photos/14936129/pexels-photo-14936129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Free', 'Desktop App', 'Color Testing']
    },
  ];

  return (
    <>
      <PageHeader
        title="ADA & WCAG Testing Tools"
        description="Discover tools to help you evaluate and ensure your websites and applications meet accessibility standards and guidelines."
        icon={<TestTube size={28} />}
      />
      
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ResourceCard
              key={tool.title}
              title={tool.title}
              description={tool.description}
              link={tool.link}
              image={tool.image}
              tags={tool.tags}
            />
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-warning-50 rounded-lg border border-warning-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Testing Is Essential, But Not Sufficient</h2>
          <p className="text-gray-700 mb-4">
            While automated testing tools are invaluable for identifying many accessibility issues, they can only catch 
            about 30-40% of potential problems. Comprehensive accessibility testing requires a combination of automated tools, 
            manual testing, and user testing with people who use assistive technologies.
          </p>
          <p className="text-gray-700">
            Use these tools as part of a broader testing strategy that includes keyboard navigation testing, screen reader testing, 
            and evaluations across different devices and browsers. Remember that true accessibility is about the actual user experience, 
            not just technical compliance.
          </p>
        </div>
      </Container>
    </>
  );
};

export default TestingToolsPage;