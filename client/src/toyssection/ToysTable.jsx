import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ToysTable = ({ products, handleEdit, handleDelete }) => {
  return (
    <div className="bg-white shadow-xl rounded-xl max-w-6xl mx-auto overflow-x-auto mt-6">
      <div className="hidden sm:grid grid-cols-7 bg-gray-100 text-gray-700 font-semibold p-4 text-sm rounded-t-xl">
        <div>Image</div>
        <div>Name</div>
        <div>Category</div>
        <div>Age Group</div>
        <div>Price</div>
        <div>Description</div>
        <div className="text-center">Actions</div>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-6 text-gray-400">No products added yet.</div>
      ) : (
        products.map((product) => (
          <div key={product.id} className="grid sm:grid-cols-7 grid-cols-1 gap-y-4 gap-x-4 p-4 border-b border-gray-200 text-sm">
            <tableCell label="Image">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
            </tableCell>
            <tableCell label="Name">{product.name}</tableCell>
            <tableCell label="Category">{product.category}</tableCell>
            <tableCell label="Age Group">{product.ageGroup}</tableCell>
            <tableCell label="Price">₹{product.price}</tableCell>
            <tableCell label="Description">
              <p className="text-gray-700">{product.description}</p>
            </tableCell>
            <div className="flex sm:justify-center gap-4">
              <button onClick={() => handleEdit(product)} className="text-blue-500 hover:text-blue-700" title="Edit">
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(product.id)} className="text-red-500 hover:text-red-700" title="Delete">
                <FaTrash />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ToysTable;
