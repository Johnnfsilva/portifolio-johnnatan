
import { Mail, Phone, Linkedin } from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

const ContactInfo = () => {
  return (
    <section className="h-[50vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 items-center">
        {/* Photo Section */}
        <div className="text-center lg:text-left animate-fade-in">
          <div className="relative inline-block">
            <img
              src={contactInfo.photo}
              alt={contactInfo.name}
              className="w-40 h-40 rounded-full object-cover shadow-2xl mx-auto lg:mx-0"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-gray-500/20"></div>
          </div>
        </div>

        {/* Info Section */}
        <div className="text-center lg:text-left space-y-3 animate-slide-up">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              {contactInfo.name}
            </h1>
            <h2 className="text-sm lg:text-base text-blue-600 font-semibold mb-3">
              {contactInfo.title}
            </h2>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed max-w-xl">
            {contactInfo.summary}
          </p>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start pt-3">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg text-xs"
            >
              <Mail size={14} />
              <span className="font-medium">Email</span>
            </a>
            
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg text-xs"
            >
              <Phone size={14} />
              <span className="font-medium">Telefone</span>
            </a>
            
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-all duration-300 hover:scale-105 shadow-lg text-xs"
            >
              <Linkedin size={14} />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
