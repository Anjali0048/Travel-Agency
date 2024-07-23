import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../env';

const DestinationDetail = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/destination/${id}`)
      .then(response => response.json())
      .then(data => setDestination(data));
  }, [id]);

  if (!destination) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="rounded overflow-hidden shadow-lg bg-white text-black mb-4">
        <img className="w-full h-64 object-cover" src={destination.photos[0]} alt={destination.title} />
        <div className="p-6">
          <div className="font-bold text-2xl mb-2">{destination.title}</div>
          <p className="text-gray-700 text-base">{destination.description}</p>
          <div className="mt-4">
            <span className="text-gray-700 font-bold">Address:</span>
            <span className="ml-2 text-gray-600">{destination.address}</span>
          </div>
          <div className="mt-4">
            <span className="text-gray-700 font-bold">Price:</span>
            <span className="ml-2 text-gray-600">${destination.price}</span>
          </div>
          <div className="mt-4">
            <span className="text-gray-700 font-bold">Duration:</span>
            <span className="ml-2 text-gray-600">{destination.duration} days</span>
          </div>
          <div className="mt-4">
            <span className="text-gray-700 font-bold">Rating:</span>
            <span className="ml-2 text-gray-600">{destination.rating} / 5</span>
          </div>
          <div className="mt-4">
            <span className="text-gray-700 font-bold">Available Dates:</span>
            <div className="ml-2 text-gray-600">
              {destination.availableDates.map((date, index) => (
                <span key={index} className="block">{new Date(date).toLocaleDateString()}</span>
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap">
            {destination.packages.map((pkg, index) => (
              <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {pkg}
              </span>
            ))}
          </div>
          {destination.featured && (
            <div className="mt-4 bg-yellow-300 text-yellow-800 font-bold text-center p-2 rounded">
              Book Now
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
