import React from 'react';
import Container from '../ui/Container';

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-primary-50 py-12 border-b border-gray-200">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            {icon && <div className="mr-3 text-primary-600">{icon}</div>}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">{title}</h1>
          </div>
          {description && (
            <p className="text-xl text-gray-700 max-w-3xl">{description}</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default PageHeader;