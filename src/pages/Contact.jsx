import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:neerajkumarsharma013@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;

    // Desktop & Mobile friendly — no popup blocker issue
    window.location.href = mailtoLink;
  };


  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Showroom',
      details: [` Unit H, Kelvin Road, Swindon, SN3 3JW   Mirelo LTD UK and Wales Registration Number: 12840417`],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+44 7393 282490'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@mirelo.co.uk']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto">
              We're here to help with all your bathroom essential needs
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm sm:text-base outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm sm:text-base outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm sm:text-base outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm sm:text-base outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="installation">Installation Help</option>
                    <option value="warranty">Warranty Claim</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm sm:text-base outline-none"
                  placeholder="Please describe your inquiry or how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-700 hover:bg-gary-500 text-white font-bold py-3 px-6 rounded-lg transition-colors text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                Have questions about our products or need help choosing the right bathroom
                essentials for your space? Our team is here to help!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-3 rounded-lg flex-shrink-0">
                      <info.icon className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm sm:text-base font-semibold text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>


            {/* Embedded Google Map */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Find Us</h3>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                <iframe
                  title="Mirelo Showroom Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.585153819696!2d-1.418151984082489!3d52.38882817978998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487730e6c90c9d8f%3A0x1b3f4dbdc858089f!2sThe%20Old%20Ferrari%20Garage%2C%20Rugby%20Rd%2C%20Brandon%2C%20Coventry%20CV8%203GH%2C%20UK!5e0!3m2!1sen!2sin!4v1691377228571!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;