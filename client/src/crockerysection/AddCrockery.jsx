import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CrockeryForm from './CrockeryForm';
import CrockeryFilter from './CrockeryFilter';
import CrockeryTable from './CrockeryTable';

const AddCrockery = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    material: '',
    description: '',
    images: [],
  });

  const [products, setProducts] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [resetKey, setResetKey] = useState(0);

  // ✅ Fetch crockery data from backend
  const fetchCrockery = async () => {
    try {
      const res = await axios.get('https://admindashboard-fgmu.onrender.com/api/crockery/get-all-crockery');
      setProducts(res.data || []); // fallback to empty array
    } catch (error) {
      console.error('Error fetching crockery:', error);
      setProducts([]); // prevent undefined on error
    }
  };

  useEffect(() => {
    fetchCrockery();
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
    form.append('material', formData.material);
    form.append('description', formData.description);
    if (formData.images[0]) {
      form.append('images', formData.images[0]);
    }

    try {
      if (isEditMode) {
        await axios.put(`https://admindashboard-fgmu.onrender.com/api/crockery/update-crockery/${editingId}`, form, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await axios.post('https://admindashboard-fgmu.onrender.com/api/crockery/add-crockery', form, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }

      fetchCrockery();
      resetForm();
    } catch (error) {
      console.error('❌ Failed to save crockery:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      price: '',
      category: '',
      material: '',
      description: '',
      images: [],
    });
    setIsEditMode(false);
    setEditingId(null);
    setResetKey((prev) => prev + 1); // 🔁 Force form re-render to reset file input
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://admindashboard-fgmu.onrender.com/api/crockery/delete-crockery/${id}`);
      fetchCrockery();
    } catch (error) {
      console.error('❌ Failed to delete crockery:', error);
    }
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
      material: product.material,
      description: product.description,
      images: [],
    });
    setIsEditMode(true);
    setEditingId(product._id);
  };

  // ✅ Make sure products is always an array
  const filteredProducts = (products || []).filter((product) =>
    [product.name, product.category, product.material]
      .join(' ')
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-50 px-4 py-10">
      <CrockeryForm
        key={resetKey}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isEditMode={isEditMode}
      />

      <CrockeryFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CrockeryTable
        products={filteredProducts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default AddCrockery;
