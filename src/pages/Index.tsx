
import ContactInfo from '@/components/ContactInfo';
import ProjectsSection from '@/components/ProjectsSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Admin Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button asChild variant="outline" className="glass-effect">
          <Link to="/admin">
            Admin
          </Link>
        </Button>
      </div>

      {/* Contact Section */}
      <ContactInfo />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Johnny Silva. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
