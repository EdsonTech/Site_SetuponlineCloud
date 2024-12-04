import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface LocationInfo {
  title: string;
  address: string;
  city: string;
  phone: string;
  fax?: string;
  email: string;
  maps: string;
}

interface LocationCardProps {
  location: LocationInfo;
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        <Globe className="h-6 w-6 text-brand-primary" />
        <h3 className="text-xl font-semibold ml-2">{location.title}</h3>
      </div>
      <div className="space-y-4">
        <a
          href={location.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start group"
        >
          <MapPin className="h-5 w-5 text-gray-600 mt-1 flex-shrink-0" />
          <div className="ml-3">
            <p className="text-gray-600 group-hover:text-brand-primary transition-colors">
              {location.address}
            </p>
            <p className="text-gray-600">{location.city}</p>
          </div>
        </a>
        <a
          href={`tel:${location.phone}`}
          className="flex items-center group"
        >
          <Phone className="h-5 w-5 text-gray-600" />
          <span className="ml-3 text-gray-600 group-hover:text-brand-primary transition-colors">
            {location.phone}
          </span>
        </a>
        {location.fax && (
          <div className="flex items-center">
            <Phone className="h-5 w-5 text-gray-600" />
            <span className="ml-3 text-gray-600">Fax: {location.fax}</span>
          </div>
        )}
        <a
          href={`mailto:${location.email}`}
          className="flex items-center group"
        >
          <Mail className="h-5 w-5 text-gray-600" />
          <span className="ml-3 text-gray-600 group-hover:text-brand-primary transition-colors">
            {location.email}
          </span>
        </a>
      </div>
    </motion.div>
  );
}