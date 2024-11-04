import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-gray-600" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">No.160/A, Hospital Road, Pallebedda</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-gray-600" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+94 776 333 334</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-gray-600" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">info@dhlanka.lk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;