import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedDestinationCard = ({ item }) => {

  const navigate = useNavigate();

  const handleClick = async () => {
    navigate(`/destination/${item._id}`)
  }

  return (
    <div onClick={handleClick} className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-black cursor-pointer transform transition-transform duration-300 hover:scale-105">
      <img className="w-full h-48 object-cover" src={item.photos[0]} alt={item.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="text-gray-700 text-base">{item.description}</p>
        <div className="mt-4">
          <span className="text-gray-700 font-bold">Address:</span>
          <span className="ml-2 text-gray-600">{item.address}</span>
        </div>
        <div className="mt-4">
          <span className="text-gray-700 font-bold">Price:</span>
          <span className="ml-2 text-gray-600">${item.price}</span>
        </div>
        </div>
    </div>
  );
};

export default FeaturedDestinationCard;
