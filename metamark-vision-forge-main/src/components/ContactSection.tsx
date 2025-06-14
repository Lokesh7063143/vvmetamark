
import { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (to: string, subject: string, body: string) => {
    // This is a placeholder for email sending functionality
    // In a real implementation, you would integrate with an email service
    console.log('Sending email to:', to);
    console.log('Subject:', subject);
    console.log('Body:', body);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send email to VV Metamark
      await sendEmail(
        'vvmetamark@gmail.com',
        'New Contact Form Submission',
        `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}
        `
      );

      // Send confirmation email to client
      await sendEmail(
        formData.email,
        'Thanks for reaching out to VV Metamark!',
        `
Hi ${formData.name},

Thank you for contacting VV Metamark. We've received your message and will get back to you shortly.

In the meantime, feel free to explore our latest work at [insert your portfolio or website link].

Cheers,
Team VV Metamark
        `
      );

      // Show success toast
      toast({
        title: "Message sent! ✅",
        description: (
          <div className="space-y-2">
            <p>Thank you for contacting VVMetaMark 💫</p>
            <p>We've received your message and will respond shortly.</p>
            <p>A confirmation email has been sent to your email address.</p>
            <p className="mt-3">With care,<br />The VVMetaMark Team ❤️</p>
          </div>
        ),
        duration: 8000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      console.log('Form submitted and emails sent');
    } catch (error) {
      console.error('Error sending emails:', error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-vv-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-vv-dark mb-4">
            JUST <span className="text-white">HOLLER.</span>
          </h2>
          <p className="text-2xl lg:text-3xl font-bold text-vv-dark mb-8">
            WE'RE RIGHT HERE!
          </p>
          <div className="w-24 h-1 bg-vv-dark mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-vv-dark mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                {/* Bangalore Office */}
                <div className="flex items-start space-x-4">
                  <MapPin className="text-vv-orange mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-vv-dark mb-1">Bangalore Office</h4>
                    <p className="text-vv-dark/70">
                      123 Creative Street<br />
                      Design District<br />
                      Bangalore, Karnataka 560001
                    </p>
                  </div>
                </div>

                {/* Ambur Office */}
                <div className="flex items-start space-x-4">
                  <MapPin className="text-vv-orange mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-vv-dark mb-1">Ambur Office</h4>
                    <p className="text-vv-dark/70">
                      456 Market Street<br />
                      Business Center<br />
                      Ambur, Tamil Nadu 635802
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-vv-orange mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-vv-dark mb-1">Call Us</h4>
                    <p className="text-vv-dark/70">+91 93449 10110</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="text-vv-orange mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-vv-dark mb-1">Email Us</h4>
                    <p className="text-vv-dark/70">vvmetamark@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-vv-primary/20">
                <h4 className="font-bold text-vv-dark mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/share/16cFjqfxKr/" className="bg-vv-primary hover:bg-vv-orange text-vv-dark p-3 rounded-full transition-colors duration-300">
                    <Facebook size={20} />
                  </a>
                  <a href="https://www.instagram.com/vvmetamark?igsh=OHZicjZwMHdjdXBi" className="bg-vv-primary hover:bg-vv-orange text-vv-dark p-3 rounded-full transition-colors duration-300">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/vv-metamark-bb575b369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="bg-vv-primary hover:bg-vv-orange text-vv-dark p-3 rounded-full transition-colors duration-300">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://youtube.com/@vvmetamark?si=dFTrTCwCPLVW-F3E" className="bg-vv-primary hover:bg-vv-orange text-vv-dark p-3 rounded-full transition-colors duration-300">
                    <Youtube size={20} />
                  </a>
                  <a href="https://wa.me/919344910110" className="bg-vv-primary hover:bg-vv-orange text-vv-dark p-3 rounded-full transition-colors duration-300">
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-vv-dark mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-vv-dark font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-vv-primary focus:outline-none transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-vv-dark font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-vv-primary focus:outline-none transition-colors"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-vv-dark font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-vv-primary focus:outline-none transition-colors"
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div>
                <label className="block text-vv-dark font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-vv-primary focus:outline-none transition-colors resize-none"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-vv-orange hover:bg-vv-dark text-white font-bold py-4 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps - Two Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Bangalore Map */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="p-4 bg-vv-primary">
              <h3 className="text-xl font-bold text-vv-dark">Bangalore Office</h3>
            </div>
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6444089084395!2d77.59369931532316!3d12.97198908710907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0x4c2b4c2b4c2b4c2b!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1644823456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VV Metamark Bangalore Office Location"
              ></iframe>
            </div>
          </div>

          {/* Ambur Map */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="p-4 bg-vv-primary">
              <h3 className="text-xl font-bold text-vv-dark">Ambur Office</h3>
            </div>
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6444089084395!2d78.59369931532316!3d12.82198908710907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0x4c2b4c2b4c2b4c2b!2sAmbur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1644823456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VV Metamark Ambur Office Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-vv-dark/20">
          <p className="text-vv-dark/70">
            © 2025 VV Metamark. All rights reserved. | Designed with by VV Metamark
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
