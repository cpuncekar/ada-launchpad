import React from 'react';
import { ExternalLink } from 'lucide-react';
import Card from '../ui/Card';

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  image?: string;
  tags?: string[];
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  description, 
  link, 
  image,
  tags = [] 
}) => {
  return (
    <Card className="h-full transition-shadow hover:shadow-lg">
      <div className="flex flex-col h-full">
        {image && (
          <div className="mb-4 -mt-6 -mx-6 overflow-hidden">
            <img 
              src={image} 
              alt={`${title} thumbnail`} 
              className="w-full h-40 object-cover"
            />
          </div>
        )}
        
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs font-medium bg-primary-50 text-primary-700 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary-600 font-medium inline-flex items-center hover:text-primary-800 transition-colors"
        >
          Visit Resource
          <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </Card>
  );
};

export default ResourceCard;