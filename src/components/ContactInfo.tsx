
import { Mail, Phone, Linkedin, User } from 'lucide-react';
import { contactInfo } from '@/data/portfolio';
import { Button } from '@/components/ui/button';

const ContactInfo = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-xl">
            <img
              src={contactInfo.photo}
              alt={contactInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
            {contactInfo.name}
          </h1>
          
          <p className="text-xl text-blue-700 font-medium mb-6 max-w-3xl mx-auto">
            {contactInfo.title}
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            {contactInfo.summary}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
          <Button 
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2">
              <Mail size={20} />
              Email
            </a>
          </Button>
          
          <Button 
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            <a href={`https://wa.me/${contactInfo.phone.replace(/[^\d]/g, '')}`} className="flex items-center gap-2">
              <Phone size={20} />
              WhatsApp
            </a>
          </Button>
          
          <Button 
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
