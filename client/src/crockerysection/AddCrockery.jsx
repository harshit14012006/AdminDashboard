import React, { useState } from 'react';
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
    const imagePreview = formData.images.length
      ? URL.createObjectURL(formData.images[0])
      : 'https://via.placeholder.com/80';

    if (isEditMode) {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === editingId
            ? {
                ...product,
                ...formData,
                image: formData.images.length ? imagePreview : product.image,
              }
            : product
        )
      );
      setIsEditMode(false);
      setEditingId(null);
    } else {
      const newProduct = {
        id: Date.now(),
        ...formData,
        image: imagePreview,
      };
      setProducts([...products, newProduct]);
    }

    setFormData({
      name: '',
      price: '',
      category: '',
      material: '',
      description: '',
      images: [],
    });
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    if (editingId === id) {
      setIsEditMode(false);
      setEditingId(null);
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
    setEditingId(product.id);
  };

  const filteredProducts = products.filter((product) =>
    [product.name, product.category, product.material]
      .join(' ')
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-50 px-4 py-10">
      <CrockeryForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isEditMode={isEditMode}
      />
      <CrockeryFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <CrockeryTable
        products={filteredProducts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default AddCrockery;
