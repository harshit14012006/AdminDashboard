import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ToysForm from './ToysForm';
import ToysFilter from './ToysFilter';
import ToysTable from './ToysTable';

const AddToys = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    ageGroup: '',
    description: '',
    images: [],
  });

  const [products, setProducts] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchToys = async () => {
    try {
      const res = await axios.get('https://playplatesadmindashboardbackend.onrender.com/api/toys/get-all-toys');
      setProducts(res.data || []);
    } catch (err) {
      console.error('Error fetching toys:', err);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchToys();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {
      setFormData({ ...formData, images: Array.from(files) });
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
    if (formData.images[0]) {
      form.append('images', formData.images[0]);
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
      images: [],
    });
    setIsEditMode(false);
    setEditingId(null);
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
      images: [],
    });
    setIsEditMode(true);
    setEditingId(product._id);
  };

  const filteredProducts = (products || []).filter((product) =>
    [product.name, product.category, product.ageGroup]
      .join(' ')
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-pink-50 px-4 py-10">
      <ToysForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isEditMode={isEditMode}
      />
      <ToysFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ToysTable
        products={filteredProducts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default AddToys;
