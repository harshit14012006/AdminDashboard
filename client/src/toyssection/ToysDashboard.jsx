import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ToysForm from './ToysForm';
import ToysFilter from './ToysFilter';
import ToysAccordion from './ToysAccordion';

const AddToys = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    ageGroup: '',
    description: '',
    image: [],
  });

  const [products, setProducts] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [resetTrigger, setResetTrigger] = useState(false);


  const fetchToys = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get('https://playplatesadmindashboardbackend.onrender.com/api/toys/get-all-toys');
      setProducts(res.data || []);
    } catch (err) {
      console.error('Error fetching toys:', err);
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchToys();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', formData.name);
    form.append('price', formData.price);
    form.append('category', formData.category);
    form.append('ageGroup', formData.ageGroup);
    form.append('description', formData.description);
    if (formData.image[0]) {
      form.append('image', formData.image[0]);
    }

    try {
      if (isEditMode) {
        await axios.put(`https://playplatesadmindashboardbackend.onrender.com/api/toys/${editingId}`, form, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await axios.post('https://playplatesadmindashboardbackend.onrender.com/api/toys/add-toy', form, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
      fetchToys();
      resetForm();
    } catch (err) {
      console.error('❌ Failed to save toy:', err);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      price: '',
      category: '',
      ageGroup: '',
      description: '',
      image: [],
    });
    setIsEditMode(false);
    setEditingId(null);
    setResetTrigger(prev => !prev);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://playplatesadmindashboardbackend.onrender.com/api/toys/${id}`);
      fetchToys();
    } catch (err) {
      console.error('❌ Failed to delete toy:', err);
    }
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
      ageGroup: product.ageGroup,
      description: product.description,
      image: [],
    });
    setIsEditMode(true);
    setEditingId(product._id);
  };

  const filteredProducts = (products || []).filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedAgeGroup === '' || product.ageGroup === selectedAgeGroup) &&
    (selectedCategory === '' || product.category === selectedCategory)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Heading Section */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Toys Management</h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">Manage your toy inventory efficiently</p>
            </div>

            {/* Info Boxes */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <span className="text-blue-700 font-semibold">{products.length}</span>
                <span className="text-blue-600 text-sm ml-1">Total Products</span>
              </div>

              {searchQuery && (
                <div className="bg-green-50 px-4 py-2 rounded-lg">
                  <span className="text-green-700 font-semibold">{filteredProducts.length}</span>
                  <span className="text-green-600 text-sm ml-1">Filtered Results</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Form Section */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              {isEditMode ? 'Edit Toy Details' : 'Add New Toy Details'}
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              {isEditMode ? 'Update toy information' : 'Fill in the details to add a new toy product'}
            </p>
          </div>
          <div className="p-6">
            <ToysForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isEditMode={isEditMode}
              resetTrigger={resetTrigger}
            />
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <svg className="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search & Filter
            </h2>
            <p className="text-gray-600 text-sm mt-1">Find products quickly using the search functionality</p>
          </div>
          <div className="p-6">
            <ToysFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedAgeGroup={selectedAgeGroup}
              setSelectedAgeGroup={setSelectedAgeGroup}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Toys Inventory
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  {searchQuery
                    ? `Showing ${filteredProducts.length} filtered results`
                    : `Total ${products.length} toys in inventory`
                  }
                </p>
              </div>
              {isLoading && (
                <div className="flex items-center text-blue-600">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </div>
              )}
            </div>
          </div>
          <div className="overflow-hidden">
            <ToysAccordion
              products={filteredProducts}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-6">
              <span>Last updated: {new Date().toLocaleDateString()}</span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                System Online
              </span>
            </div>
            <div className="text-gray-500">
              Admin Dashboard v1.0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToys;
