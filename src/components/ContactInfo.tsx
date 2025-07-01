
import { Mail, MessageCircle, Linkedin } from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

const ContactInfo = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 px-4 py-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Photo Section */}
        <div className="text-center lg:text-left animate-fade-in">
          <div className="relative inline-block">
            <img
              src={contactInfo.photo}
              alt={contactInfo.name}
              className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl mx-auto lg:mx-0 border-8 border-white"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-gray-500/10"></div>
          </div>
        </div>

        {/* Info Section */}
        <div className="text-center lg:text-left space-y-6 animate-slide-up">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {contactInfo.name}
            </h1>
            <h2 className="text-xl lg:text-2xl text-blue-600 font-semibold mb-6 leading-relaxed">
              {contactInfo.title}
            </h2>
          </div>

          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
            {contactInfo.summary}
          </p>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg font-medium"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            
            <a
              href={`https://wa.me/${contactInfo.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg font-medium"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
            
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-blue-800 text-white rounded-xl hover:bg-blue-900 transition-all duration-300 hover:scale-105 shadow-lg font-medium"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
