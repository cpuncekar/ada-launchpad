import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import BeginnerA11yPage from './pages/BeginnerA11yPage';
import IntermediateA11yPage from './pages/IntermediateA11yPage';
import CertificationsPage from './pages/CertificationsPage';
import UniversitiesPage from './pages/UniversitiesPage';
import TestingToolsPage from './pages/TestingToolsPage';
import DesignPluginsPage from './pages/DesignPluginsPage';
import JobPrepPage from './pages/JobPrepPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beginner-a11y" element={<BeginnerA11yPage />} />
          <Route path="/intermediate-a11y" element={<IntermediateA11yPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/universities" element={<UniversitiesPage />} />
          <Route path="/testing-tools" element={<TestingToolsPage />} />
          <Route path="/design-plugins" element={<DesignPluginsPage />} />
          <Route path="/job-prep" element={<JobPrepPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;