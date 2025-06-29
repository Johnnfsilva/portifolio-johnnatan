
import { Mail, Phone, Linkedin } from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

const ContactInfo = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Photo Section */}
        <div className="text-center lg:text-left animate-fade-in">
          <div className="relative inline-block">
            <img
              src={contactInfo.photo}
              alt={contactInfo.name}
              className="w-80 h-80 rounded-2xl object-cover shadow-2xl mx-auto lg:mx-0"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-emerald-500/20"></div>
          </div>
        </div>

        {/* Info Section */}
        <div className="text-center lg:text-left space-y-6 animate-slide-up">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {contactInfo.name}
            </h1>
            <h2 className="text-xl lg:text-2xl gradient-text font-semibold mb-6">
              {contactInfo.title}
            </h2>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            {contactInfo.summary}
          </p>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Mail size={20} />
              <span className="font-medium">Email</span>
            </a>
            
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-3 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone size={20} />
              <span className="font-medium">Telefone</span>
            </a>
            
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Linkedin size={20} />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
