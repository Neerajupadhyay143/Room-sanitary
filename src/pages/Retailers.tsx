import React, { useState } from 'react';
import { MapPin, Phone, Clock, Search } from 'lucide-react';

interface Retailer {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: string;
  distance?: number;
}

const Retailers: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [retailers] = useState<Retailer[]>([
    {
      id: '1',
      name: 'Home Design Center',
      address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      phone: '(555) 123-4567',
      hours: 'Mon-Sat: 9AM-7PM, Sun: 11AM-5PM',
      distance: 2.3,
    },
    {
      id: '2',
      name: 'Bathroom World',
      address: '456 Broadway Ave',
      city: 'New York',
      state: 'NY',
      zip: '10002',
      phone: '(555) 234-5678',
      hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-5PM',
      distance: 4.1,
    },
    {
      id: '3',
      name: 'Luxury Bath & Beyond',
      address: '789 Fifth Avenue',
      city: 'New York',
      state: 'NY',
      zip: '10003',
      phone: '(555) 345-6789',
      hours: 'Mon-Sun: 10AM-8PM',
      distance: 5.7,
    },
    {
      id: '4',
      name: 'Premium Fixtures Store',
      address: '321 Park Avenue',
      city: 'New York',
      state: 'NY',
      zip: '10004',
      phone: '(555) 456-7890',
      hours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
      distance: 6.2,
    },
    {
      id: '5',
      name: 'Modern Bath Solutions',
      address: '654 Madison Ave',
      city: 'New York',
      state: 'NY',
      zip: '10005',
      phone: '(555) 567-8901',
      hours: 'Mon-Sat: 9AM-7PM, Sun: 12PM-5PM',
      distance: 8.9,
    },
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Searching for retailers near:', searchLocation);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find a Retailer
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Locate authorized retailers near you to see our products in person
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Search by Location
          </h2>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex space-x-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Enter city, state, or ZIP code"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
                <Search className="absolute left-3 top-3.5 h-6 w-6 text-gray-400" />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Results Header */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900">
            Showing {retailers.length} retailers near you
          </h3>
          <p className="text-gray-600 mt-2">
            Results are sorted by distance from your location
          </p>
        </div>

        {/* Retailers Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Retailers List */}
          <div className="space-y-6">
            {retailers.map((retailer) => (
              <div key={retailer.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {retailer.name}
                  </h3>
                  {retailer.distance && (
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {retailer.distance} mi
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-gray-700">{retailer.address}</p>
                      <p className="text-gray-700">
                        {retailer.city}, {retailer.state} {retailer.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <a
                      href={`tel:${retailer.phone}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {retailer.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <p className="text-gray-700">{retailer.hours}</p>
                  </div>
                </div>

                <div className="mt-6 flex space-x-4">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Get Directions
                  </button>
                  <button className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors">
                    Call Store
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Store Locations
              </h3>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-center">
                  Interactive Map Coming Soon<br />
                  <span className="text-sm">Showing retailer locations</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Become an Authorized Retailer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Interested in carrying Bathroom Essentials products in your store? 
              Join our network of authorized retailers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prime Locations</h3>
              <p className="text-gray-600">
                Get access to our premium product lines for your showroom
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dedicated Support</h3>
              <p className="text-gray-600">
                Receive ongoing training and support from our team
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick turnaround times and reliable supply chain
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Apply to Become a Retailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retailers;