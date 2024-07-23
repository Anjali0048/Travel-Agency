import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../env';
import { toast } from "react-hot-toast";

const DestinationForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    address: '',
    photos: '',
    description: '',
    price: '',
    packages: '',
    duration: '',
    rating: '',
    availableDates: '',
    featured: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const {title,address,photos,description,price,packages,duration,rating,availableDates,featured} = formData;
      if(title && address && photos && description && price && duration && availableDates){
        await axios.post(`${API_URL}/destination`,formData)
         .then(res =>{
           console.log(res)
           toast.success("Destination added Successfully!", {
            autoClose: 5000,
          });
           navigate("/destinations");
         })
      }else{
        alert("please fill all the fields");
      }
    }catch(err){
      console.log(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Add Destination</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
  
        <div className="relative z-0 w-full mb-5 group">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Photos</label>
          <input
            type="file"
            name="photos"
            value={formData.photos}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter comma-separated URLs"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Packages</label>
          <input
            type="text"
            name="packages"
            value={formData.packages}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter comma-separated packages"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Duration (in days)</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
            min="0"
            max="5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Available Dates</label>
          <input
            type="date"
            name="availableDates"
            value={formData.availableDates}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter comma-separated dates (YYYY-MM-DD)"
            required
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label className="ml-2 block text-sm text-gray-900">Featured</label>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Destination
        </button>
      </form>
    </div>
  

  );
};

export default DestinationForm;
