import React, { useState } from 'react';

const AddCrockery = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    material: '',
    description: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {
      setFormData({ ...formData, images: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Crockery Form Submitted:', formData);
    // TODO: Send to backend API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-8">Add New Crockery Item</h2>

        <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
          <div className="col-span-full sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Item Name</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Ceramic Plate"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>

          <div className="col-span-full sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
            <input
              type="number"
              name="price"
              placeholder="e.g. 499"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>

          <div className="col-span-full sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 bg-white focus:outline-none"
              required
            >
              <option value="">Select category</option>
              <option value="Plates">Plates</option>
              <option value="Cups">Cups</option>
              <option value="Bowls">Bowls</option>
              <option value="Cutlery">Cutlery</option>
              <option value="Glassware">Glassware</option>
            </select>
          </div>

          <div className="col-span-full sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Material</label>
            <select
              name="material"
              value={formData.material}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 bg-white focus:outline-none"
              required
            >
              <option value="">Select material</option>
              <option value="Ceramic">Ceramic</option>
              <option value="Glass">Glass</option>
              <option value="Stainless Steel">Stainless Steel</option>
              <option value="Plastic">Plastic</option>
              <option value="Melamine">Melamine</option>
            </select>
          </div>

          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Enter a brief description..."
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            ></textarea>
          </div>

          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Images</label>
            <input
              type="file"
              name="images"
              accept="image/*"
              multiple
              onChange={handleChange}
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-white file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0 file:text-sm file:font-semibold
                         file:bg-green-50 file:text-green-700 hover:file:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="col-span-full">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Add Crockery
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCrockery;
