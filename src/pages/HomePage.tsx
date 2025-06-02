import React from 'react';
import Hero from '../components/home/Hero';
import TrustedBy from '../components/home/TrustedBy';
import ResourcesSection from '../components/home/ResourcesSection';
import BeginnerA11yPage from './BeginnerA11yPage';
import IntermediateA11yPage from './IntermediateA11yPage';
import CertificationsPage from './CertificationsPage';
import UniversitiesPage from './UniversitiesPage';
import TestingToolsPage from './TestingToolsPage';
import DesignPluginsPage from './DesignPluginsPage';
import JobPrepPage from './JobPrepPage';

const HomePage: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'ADA Launchpad | Accessibility Resources';
  }, []);
  
  return (
    <>
      <Hero />
      <TrustedBy />
      <div id="resources">
        <ResourcesSection />
      </div>
      <div id="beginner">
        <BeginnerA11yPage />
      </div>
      <div id="intermediate">
        <IntermediateA11yPage />
      </div>
      <div id="certifications">
        <CertificationsPage />
      </div>
      <div id="universities">
        <UniversitiesPage />
      </div>
      <div id="testing-tools">
        <TestingToolsPage />
      </div>
      <div id="design-plugins">
        <DesignPluginsPage />
      </div>
      <div id="job-prep">
        <JobPrepPage />
      </div>
    </>
  );
};

export default HomePage;