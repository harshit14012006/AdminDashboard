import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const sampleProducts = [
  {
    id: 1,
    name: 'Toy Car',
    price: 299,
    stock: 12,
    description: 'A cool remote-controlled toy car.',
    category: 'Toy',
    image: 'https://via.placeholder.com/80',
  },
  {
    id: 2,
    name: 'Ceramic Plate Set',
    price: 899,
    stock: 5,
    description: 'Elegant ceramic plates for dining.',
    category: 'Crockery',
    image: 'https://via.placeholder.com/80',
  },
];

const ViewProducts = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">All Products</h2>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Image</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Stock</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Description</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sampleProducts.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{product.name}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded-full font-semibold ${
                      product.category === 'Toy'
                        ? 'bg-pink-100 text-pink-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">₹{product.price}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{product.stock}</td>
                <td className="px-6 py-4 text-sm text-gray-700 max-w-xs">{product.description}</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center gap-4">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewProducts;
