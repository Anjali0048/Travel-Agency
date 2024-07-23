import React, { useEffect, useState } from 'react'
import DestinationCard from '../components/DestinationCard';
import { API_URL } from '../env';
import axios from 'axios';

const DestinationPage = () => {

    const [data,setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
    <div className='flex flex-col items-center mt-3'>
      {
        data.map((item) => {
            return <DestinationCard key={item._id} item={item} />
        })
      }
    </div>
  )
}

export default DestinationPage
