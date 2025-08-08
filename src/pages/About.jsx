import React from 'react';
import { Award, Users, Wrench, Star } from 'lucide-react';
import aboutus from "../assets/Products/About.png"

const About = () => {
  const stats = [
    { icon: Award, label: 'Years of Experience', value: '10+' },
    { icon: Users, label: 'Happy Customers', value: '20K+' },
    { icon: Wrench, label: 'Products', value: '10+' },
    { icon: Star, label: 'Customer Rating', value: '4.3/5' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Quality Manager',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About Mirelo Bathrooms
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto">
              Crafted with care to elevate your everyday comfort — where style meets purpose.
            </p>

          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Functional, stylish and enforced with Guarantees. Our Products will help you create the dream bathroom you are looking for. Our
                vast range of PVC Furniture, Close Coupled Toilets, Back to Wall Toilets, Wall Hung Toilets, Bidet Toilets, Wall Hung Frames, Basin
                Mixers, Douche's, Wetroom Drains, LED Mirrors and Accessories have exactly what you're looking for to create the perfect
                relaxing sanctuary in which to start or finish your day.

              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                We pride ourselves in our quality of products and cutting edge luxury designs. Our PVC Furniture comes with a 10 Year
                Guarantee and 5 Years for Sanitaryware. All our products are CE Approved and Certified. Our products are manufactured to the
                highest quality and subjected to rigorous testing and quality control in compliance with ISO Certificated standards. All of our
                products perform to the highest of standards to enhance your everyday bathroom experience coupled with our continuous
                customer after sales support services. Our experienced team will strive to source you the best quality products made from the
                best material serving you day after day believing that our customers deserve only the best

              </p>

            </div>
            <div>
              <img
                src={aboutus}
                alt="Mirelo bathroom"
                className="w-full h-64 sm:h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals is committed to bringing you the best in
              bathroom design and functionality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-sm sm:text-base text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-gray-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Quality First</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We never compromise on quality. Every product is rigorously tested to ensure
                it meets our high standards.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-gray-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Customer Focus</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our customers are at the heart of everything we do. We listen, we learn,
                and we deliver solutions that exceed expectations.
              </p>
            </div>

            <div className="text-center p-6 sm:col-span-2 lg:col-span-1">
              <div className="bg-gray-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We continuously innovate to bring you the latest in bathroom technology
                and design trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;