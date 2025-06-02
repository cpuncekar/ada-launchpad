import React from 'react';
import Container from '../ui/Container';

const TrustedBy: React.FC = () => {
  const organizations = [
    { name: 'W3C', logo: 'https://www.w3.org/Icons/w3c_home', description: 'Web Standards Organization' },
    { name: 'WebAIM', logo: '/web-aim-logo.png', description: 'Accessibility Evaluation Tool' },
    { name: 'Google Lighthouse', logo: 'https://developers.google.com/web/tools/lighthouse/images/lighthouse-logo.svg', description: 'Web Performance & Accessibility Testing Tool' },
    { name: 'axe DevTools', logo: '/axe-devtools-logo.png', description: 'Accessibility Testing Suite' },
    { name: 'Figma', logo: 'https://static.figma.com/app/icon/1/favicon.svg', description: 'Design Platform' },
    { name: 'Microsoft', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b', description: 'Technology Company' },
    { name: 'Adobe', logo: 'https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg', description: 'Creative Software Company' },
  ];

  return (
    <section id="resources" className="py-12 bg-gray-50 border-t border-b border-gray-200">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold">Highlighted Resources & Tools</h2>
          <p className="text-sm text-gray-500 mt-1 max-w-xl mx-auto">
            A curated selection of industry-standard accessibility tools and resources. We are not affiliated with or endorsed by the organizations shown.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
          {organizations.map((org) => (
            <div 
              key={org.name} 
              className="grayscale opacity-60 hover:opacity-100 transition-opacity duration-300"
              aria-label={`${org.name} - ${org.description}`}
            >
              <img 
                src={org.logo} 
                alt={`${org.name} logo`} 
                className="h-10 max-w-[120px] object-contain" 
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustedBy;