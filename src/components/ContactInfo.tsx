
import { Mail, Phone, Linkedin } from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

const ContactInfo = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 px-4 py-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Photo Section */}
        <div className="text-center lg:text-left animate-fade-in">
          <div className="relative inline-block">
            <img
              src={contactInfo.photo}
              alt={contactInfo.name}
              className="w-56 h-56 md:w-64 md:h-64 lg:w-48 lg:h-48 rounded-full object-cover shadow-2xl mx-auto lg:mx-0"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-gray-500/20"></div>
          </div>
        </div>

        {/* Info Section */}
        <div className="text-center lg:text-left space-y-4 animate-slide-up">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              {contactInfo.name}
            </h1>
            <h2 className="text-base lg:text-lg text-blue-600 font-semibold mb-4">
              {contactInfo.title}
            </h2>
          </div>

          <p className="text-sm lg:text-base text-gray-600 leading-relaxed max-w-xl">
            {contactInfo.summary}
          </p>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg text-sm"
            >
              <Mail size={16} />
              <span className="font-medium">Email</span>
            </a>
            
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg text-sm"
            >
              <Phone size={16} />
              <span className="font-medium">Telefone</span>
            </a>
            
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-all duration-300 hover:scale-105 shadow-lg text-sm"
            >
              <Linkedin size={16} />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
