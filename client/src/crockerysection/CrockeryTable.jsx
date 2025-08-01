import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const CrockeryTable = ({ products, handleEdit, handleDelete }) => {
  console.log('Rendering products:', products);

  return (
    <div className="bg-white shadow-xl rounded-xl max-w-6xl mx-auto overflow-x-auto mt-6">
      <div className="hidden sm:grid grid-cols-7 bg-gray-100 text-gray-700 font-semibold p-4 text-sm rounded-t-xl">
        <div>Image</div>
        <div>Name</div>
        <div>Category</div>
        <div>Material</div>
        <div>Price</div>
        <div>Description</div>
        <div className="text-center">Actions</div>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-6 text-gray-400">No crockery items added yet.</div>
      ) : (
        products.map((product) => (
          <div
            key={product._id}
            className="grid sm:grid-cols-7 grid-cols-1 gap-y-4 gap-x-4 p-4 border-b border-gray-200 text-sm"
          >
            <div className="flex items-center sm:block gap-3">
              <img
                src={product.imageUrl || product.image || 'https://via.placeholder.com/80'}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
            </div>
            <div>{product.name}</div>
            <div>{product.category}</div>
            <div>{product.material}</div>
            <div>₹{product.price}</div>
            <div>{product.description}</div>
            <div className="flex sm:justify-center gap-4">
              <button className="text-blue-500 hover:text-blue-700 cursor-pointer" onClick={() => handleEdit(product)}>
                <FaEdit />
              </button>
              <button className="text-red-500 hover:text-red-700 cursor-pointer" onClick={() => handleDelete(product._id)}>
                <FaTrash />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CrockeryTable;
