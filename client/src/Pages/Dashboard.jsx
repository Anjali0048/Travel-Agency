import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero.jsx'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../env'
import FeaturedDestinationCard from '../components/FeaturedDestinationCard.jsx'
import DestinationCard from '../components/DestinationCard.jsx'

const Dashboard = ({userDetails}) => {

  const [data,setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Search Filter
  const [filteredTour, setFilteredTour] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
//   const handleSearchTermChange = (event) => {
//     const term = event.target.value;
//     setSearchTerm(term);
  
//     const filtered = tours.filter((dest) =>
//       dest.title.toLowerCase().includes(term.toLowerCase()) ||
//       dest.address.toLowerCase().includes(term.toLowerCase())
//     );
//     setFilteredTour(filtered);
//    };

  const getDestinations = async () => {
    setIsLoading(true);
    try{
      const {data} = await axios.get(`${API_URL}/destination`);
      setTours(data)
      setFilteredTour(data)
      // console.log(data)
    }catch(e){
      console.log(e)
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getDestinations();
  }, []);

  return (
    <div className='text-black bg-slate-100 ml-6 mr-6'>
      {
        userDetails.isAdmin === true && (
          <div className='flex justify-end'>
            <Link to="/destinationForm">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Destination
            </button>

            </Link>
          </div>
        )
      }

        <Hero/>

      {/* featured section */}
      <div className='flex justify-center mt-4 mb-4'>
        <h1 className='text-4xl font-bold text-blue-500'>Featured Destinations</h1>
      </div>
      <div className="flex flex-wrap  p-4 bg-gray-100 justify-between">
      {
        data.map((item) => {
              return item.featured ? <FeaturedDestinationCard key={item._id} item={item} /> : null
        })
      }
      </div>



    </div>
  )
}

export default Dashboard
