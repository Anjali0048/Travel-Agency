import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DestinationCard = ({ item }) => {

  const navigate = useNavigate();

  const onBookPackageHandler = async () => {
    navigate(`/destination/${item._id}`)
  }

  useEffect(() => {
    console.log(item);
  }, [item]);

  return (
    <div className="w-full max-w-4xl justify-center items-center rounded overflow-hidden shadow-lg bg-white text-black flex mb-4">
      <img className="w-1/3 h-full object-cover ml-3" src={item.photos[0]} alt={item.title} />
      <div className="w-2/3 p-6">
        
        <div className='flex'>
            <div>
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.description}</p>
                <div className="mt-4">
                  <span className="text-gray-700 font-bold">Address:</span>
                  <span className="ml-2 text-gray-600">{item.address}</span>
                </div>
            </div>

            <div>
                <div className="mt-4">
                  <span className="text-gray-700 font-bold">Price:</span>
                  <span className="ml-2 text-gray-600">${item.price}</span>
                </div>
                <div className="mt-4">
                  <span className="text-gray-700 font-bold">Duration:</span>
                  <span className="ml-2 text-gray-600">{item.duration} days</span>
                </div>
                <div className="mt-4">
                  <span className="text-gray-700 font-bold">Rating:</span>
                  <span className="ml-2 text-gray-600">{item.rating} / 5</span>
                </div>
            </div>
        </div>
        
        
        {/* <div className="mt-4">
          <span className="text-gray-700 font-bold">Available Dates:</span>
          <div className="ml-2 text-gray-600">
            {item.availableDates.map((date, index) => (
              <span key={index} className="block">{new Date(date).toLocaleDateString()}</span>
            ))}
          </div>
        </div> */}

        {/* <div className="mt-4 flex flex-wrap">
          {item.packages.map((pkg, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {pkg}
            </span>
          ))}
        </div> */}
        
        
          <div onClick={onBookPackageHandler} className="mt-4 bg-blue-300 text-yellow-800 cursor-pointer font-bold text-center p-2 rounded">
            Book Package
          </div>


      </div>
    </div>
  );
};

export default DestinationCard;
