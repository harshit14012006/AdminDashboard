import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

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
      const updatedProducts = products.map((product) =>
        product.id === editingId
          ? {
            ...product,
            name: formData.name,
            price: formData.price,
            category: formData.category,
            ageGroup: formData.ageGroup,
            description: formData.description,
            image: formData.images.length ? imagePreview : product.image,
          }
          : product
      );
      setProducts(updatedProducts);
      setIsEditMode(false);
      setEditingId(null);
    } else {
      const newProduct = {
        id: Date.now(),
        name: formData.name,
        price: formData.price,
        category: formData.category,
        ageGroup: formData.ageGroup,
        description: formData.description,
        image: imagePreview,
      };
      setProducts([...products, newProduct]);
    }

    setFormData({
      name: '',
      price: '',
      category: '',
      ageGroup: '',
      description: '',
      images: [],
    });
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    if (id === editingId) {
      setIsEditMode(false);
      setEditingId(null);
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
    setEditingId(product.id);
  };

  const filteredProducts = products.filter((product) =>
    [product.name, product.category, product.ageGroup]
      .join(' ')
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-pink-50 px-4 py-10">
      {/* Form */}
      <div className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-pink-600 mb-6 sm:mb-8">
          {isEditMode ? 'Update Toy' : 'Add New Toy'}
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1">Toy Name</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Teddy Bear"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Price (₹)</label>
            <input
              type="number"
              name="price"
              placeholder="e.g. 799"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 bg-white outline-none"
              required
            >
              <option value="">Select category</option>
              <option value="Soft Toys">Soft Toys</option>
              <option value="Educational">Educational</option>
              <option value="Action Figures">Action Figures</option>
              <option value="Puzzles">Puzzles</option>
              <option value="Outdoor">Outdoor</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Age Group</label>
            <select
              name="ageGroup"
              value={formData.ageGroup}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 bg-white outline-none"
              required
            >
              <option value="">Select age group</option>
              <option value="0-2 years">0-2 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="6-8 years">6-8 years</option>
              <option value="9+ years">9+ years</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Enter toy description..."
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Upload Images</label>
            <input
              type="file"
              name="images"
              accept="image/*"
              multiple
              onChange={handleChange}
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-white file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0 file:text-sm file:font-semibold
                         file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500 h-9"
              required={!isEditMode}
            />
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              {isEditMode ? 'Update Toy' : 'Add Toy'}
            </button>
          </div>
        </form>
      </div>

      {/* Search Filter */}
      <div className="max-w-6xl mx-auto mb-6 px-4 sm:px-0">
        <input
          type="text"
          placeholder="Search by name, category or age group..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
        />
      </div>

      {/* Products List */}
      <div className="bg-white shadow-xl rounded-xl max-w-6xl mx-auto overflow-x-auto mt-6">
        {/* Table Headings (Desktop Only) */}
        <div className="hidden sm:grid grid-cols-7 bg-gray-100 text-gray-700 font-semibold p-4 text-sm rounded-t-xl">
          <div>Image</div>
          <div>Name</div>
          <div>Category</div>
          <div>Age Group</div>
          <div>Price</div>
          <div>Description</div>
          <div className="text-center">Actions</div>
        </div>

        {/* Products List */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-6 text-gray-400">
            {searchQuery ? 'No products match your search.' : 'No products added yet.'}
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="grid sm:grid-cols-7 grid-cols-1 gap-y-4 gap-x-4 p-4 border-b border-gray-200 text-sm"
            >
              {/* Image */}
              <div className="flex items-center sm:block gap-3">
                <span className="sm:hidden w-32 font-semibold text-gray-600">Image</span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </div>

              {/* Name */}
              <div className="flex sm:block gap-3 items-center">
                <span className="sm:hidden w-32 font-semibold text-gray-600">Name</span>
                <span>{product.name}</span>
              </div>

              {/* Category */}
              <div className="flex sm:block gap-3 items-center">
                <span className="sm:hidden w-32 font-semibold text-gray-600">Category</span>
                <span>{product.category}</span>
              </div>

              {/* Age Group */}
              <div className="flex sm:block gap-3 items-center">
                <span className="sm:hidden w-32 font-semibold text-gray-600">Age Group</span>
                <span>{product.ageGroup}</span>
              </div>

              {/* Price */}
              <div className="flex sm:block gap-3 items-center">
                <span className="sm:hidden w-32 font-semibold text-gray-600">Price</span>
                <span>₹{product.price}</span>
              </div>

              {/* Description */}
              <div className="flex sm:block gap-3 items-start">
                <span className="sm:hidden w-32 font-semibold text-gray-600">Description</span>
                <p className="text-gray-700">{product.description}</p>
              </div>

              {/* Actions */}
              <div className="flex sm:justify-center gap-4">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => handleEdit(product)}
                  title="Edit"
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(product.id)}
                  title="Delete"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AddToys;