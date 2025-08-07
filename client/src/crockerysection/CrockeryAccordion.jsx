import React, { useState } from 'react';
import { FaEdit, FaTrash, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CrockeryAccordion = ({ products, handleEdit, handleDelete }) => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 px-4">
      {products.length === 0 ? (
        <div className="bg-white shadow-md rounded-xl p-8 text-center border border-dashed border-gray-300">
          <svg
            className="w-12 h-12 text-gray-300 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <p className="text-lg font-semibold text-gray-600">No crockery items added yet</p>
          <p className="text-sm text-gray-400 mt-2">Add crockery items to start managing inventory.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {products.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-300"
            >
              {/* Accordion Header */}
              <button
                className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                onClick={() => toggleAccordion(item._id)}
                aria-expanded={openId === item._id}
              >
                <div className="flex items-center gap-4 w-full">
                  <img
                    src={item.imageUrl || item.image || 'https://via.placeholder.com/50'}
                    alt={item.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-md object-cover border border-gray-300"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-4 sm:mt-0 text-right">
                  <span className="text-lg font-bold text-green-600 whitespace-nowrap">₹{item.price}</span>
                  {openId === item._id ? (
                    <FaChevronUp className="text-gray-500" />
                  ) : (
                    <FaChevronDown className="text-gray-500" />
                  )}
                </div>
              </button>

              {/* Accordion Content */}
              <div
                className={`transition-all overflow-hidden duration-300 ease-in-out ${openId === item._id ? 'max-h-[1000px] opacity-100 p-4' : 'max-h-0 opacity-0 p-0'
                  }`}
              >
                {openId === item._id && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div className="space-y-2">
                        <p>
                          <span className="font-medium text-gray-600">Category:</span>{' '}
                          {item.category}
                        </p>
                        <p>
                          <span className="font-medium text-gray-600">Material:</span>{' '}
                          {item.material}
                        </p>
                      </div>
                      <div>
                        <div>
                          <span className="font-medium text-gray-600">Description:</span>
                          <div className="mt-1 max-h-40 overflow-y-auto pr-2 text-gray-700">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3">
                      <button
                        onClick={() => handleEdit(item)}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all text-sm font-medium"
                      >
                        <FaEdit className="w-4 h-4" /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all text-sm font-medium"
                      >
                        <FaTrash className="w-4 h-4" /> Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CrockeryAccordion;
