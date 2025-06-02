import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-heading leading-tight animate-slide-up">
            Build Accessible Websites with Confidence
          </h1>
          
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Curated tools, certifications, and university programs to help you design inclusive digital experiences — no prior experience required.
          </p>
          
          <div className="mt-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              type="button" 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '#resources'}
              className="inline-flex items-center"
            >
              Explore
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;