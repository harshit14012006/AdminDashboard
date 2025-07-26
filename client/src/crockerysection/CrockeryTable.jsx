import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const CrockeryTable = ({ products, handleEdit, handleDelete }) => {
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
        <div className="text-center py-6 text-gray-400">
          No crockery items added yet.
        </div>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className="grid sm:grid-cols-7 grid-cols-1 gap-y-4 gap-x-4 p-4 border-b border-gray-200 text-sm"
          >
            <div className="flex items-center sm:block gap-3">
              <span className="sm:hidden w-32 font-semibold text-gray-600">Image</span>
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
            </div>

            <div className="flex sm:block gap-3 items-center">
              <span className="sm:hidden w-32 font-semibold text-gray-600">Name</span>
              <span>{product.name}</span>
            </div>

            <div className="flex sm:block gap-3 items-center">
              <span className="sm:hidden w-32 font-semibold text-gray-600">Category</span>
              <span>{product.category}</span>
            </div>

            <div className="flex sm:block gap-3 items-center">
              <span className="sm:hidden w-32 font-semibold text-gray-600">Material</span>
              <span>{product.material}</span>
            </div>

            <div className="flex sm:block gap-3 items-center">
              <span className="sm:hidden w-32 font-semibold text-gray-600">Price</span>
              <span>₹{product.price}</span>
            </div>

            <div className="flex sm:block gap-3 items-start">
              <span className="sm:hidden w-32 font-semibold text-gray-600">Description</span>
              <p className="text-gray-700">{product.description}</p>
            </div>

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
  );
};

export default CrockeryTable;
