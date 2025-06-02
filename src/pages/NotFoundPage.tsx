import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found | ADA Launchpad';
  }, []);

  return (
    <Container className="py-20">
      <div className="max-w-lg mx-auto text-center">
        <div className="flex justify-center mb-6">
          <AlertTriangle size={64} className="text-warning-500" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 font-heading mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-700 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center">
          <Link to="/">
            <Button variant="primary" size="lg">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundPage;