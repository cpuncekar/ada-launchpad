import React from 'react';
import { School, ExternalLink } from 'lucide-react';
import Card from '../ui/Card';

interface Program {
  name: string;
  link: string;
}

interface UniversityCardProps {
  name: string;
  programs: Program[];
  logo?: string;
}

const UniversityCard: React.FC<UniversityCardProps> = ({ name, programs, logo }) => {
  return (
    <Card className="h-full transition-shadow hover:shadow-lg">
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          {logo ? (
            <img 
              src={logo} 
              alt={`${name} logo`} 
              className="w-12 h-12 object-contain mr-3"
            />
          ) : (
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
              <School size={24} className="text-primary-600" />
            </div>
          )}
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        </div>
        
        <ul className="space-y-3 flex-grow mb-4">
          {programs.map((program, index) => (
            <li key={index} className="flex items-start">
              <span className="bg-primary-100 text-primary-700 p-1 rounded-full mr-2 mt-0.5">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <a 
                href={program.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary-700 transition-colors flex-grow"
              >
                {program.name}
              </a>
            </li>
          ))}
        </ul>
        
        <a 
          href={`https://www.google.com/search?q=${encodeURIComponent(name)}+accessibility+programs`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary-600 font-medium inline-flex items-center hover:text-primary-800 transition-colors self-start"
        >
          Visit University
          <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </Card>
  );
};

export default UniversityCard;