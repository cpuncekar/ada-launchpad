import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import Card from '../ui/Card';

interface CertificationCardProps {
  title: string;
  organization: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  link: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  organization,
  description,
  difficulty,
  duration,
  link,
}) => {
  const difficultyColors = {
    Beginner: 'bg-success-50 text-success-700',
    Intermediate: 'bg-warning-50 text-warning-700',
    Advanced: 'bg-error-50 text-error-700',
  };

  return (
    <Card className="h-full transition-shadow hover:shadow-lg">
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
            <Award size={24} className="text-primary-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm">{organization}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
          <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
            {duration}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary-600 font-medium inline-flex items-center hover:text-primary-800 transition-colors"
        >
          Learn More
          <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </Card>
  );
};

export default CertificationCard;