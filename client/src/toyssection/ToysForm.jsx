import React, { useState, useRef, useEffect } from 'react';
import {
    FiPackage, FiDollarSign, FiTag, FiUser,
    FiEdit2, FiImage, FiX, FiCheck
} from 'react-icons/fi';

const ToysForm = ({ formData, handleChange, handleSubmit, isEditMode, isLoading, onCancel, resetTrigger }) => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const fileInputRef = useRef();

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);
        handleChange(e); // propagate to parent
    };

    // ✅ Reset file input & selected files when resetTrigger changes
    useEffect(() => {
        if (resetTrigger && fileInputRef.current) {
            fileInputRef.current.value = '';        // clears file input
            setSelectedFiles([]);                   // clears UI preview
        }
    }, [resetTrigger]);

    return (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                    {isEditMode ? (
                        <>
                            <FiEdit2 className="mr-2 text-indigo-600" />
                            Edit Toy Product
                        </>
                    ) : (
                        <>
                            <FiPackage className="mr-2 text-indigo-600" />
                            Add New Toy Product
                        </>
                    )}
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6 grid gap-6 md:grid-cols-2">
                <InputField
                    label="Toy Name"
                    name="name"
                    value={formData.name}
                    handleChange={handleChange}
                    icon={<FiPackage className="text-gray-400" />}
                />

                <InputField
                    label="Price (₹)"
                    name="price"
                    type="number"
                    value={formData.price}
                    handleChange={handleChange}
                    icon={<FiDollarSign className="text-gray-400" />}
                />

                <SelectField
                    label="Category"
                    name="category"
                    value={formData.category}
                    handleChange={handleChange}
                    options={[
                        'Soft Toys', 'Educational', 'Action Figures', 'Puzzles', 'Outdoor',
                        'Vehicles & Remote Control', 'Building Blocks', 'Musical Toys',
                        'Arts & Crafts', 'Board Games', 'Dolls & Dollhouses', 'Role Play & Pretend Play',
                        'STEM Toys', 'Electronic Toys', 'Bath Toys', 'Sports & Outdoor Games',
                        'Plush Toys', 'Infant Toys', 'Science Kits', 'Construction Toys',
                        'Magic Sets', 'Learning Tablets', 'Wooden Toys', 'Toy Guns & Blasters',
                        'Die-Cast & Collectibles'
                    ]}
                    icon={<FiTag className="text-gray-400" />}
                />

                <SelectField
                    label="Age Group"
                    name="ageGroup"
                    value={formData.ageGroup}
                    handleChange={handleChange}
                    options={[
                        '0-6 months', '6-12 months', '1-2 years', '2-3 years', '3-5 years',
                        '5-7 years', '6-8 years', '8-10 years', '10-12 years', '12+ years', 'Teens & Adults'
                    ]}
                    icon={<FiUser className="text-gray-400" />}
                />

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <FiEdit2 className="mr-2 text-gray-400" />
                        Toy Description
                    </label>
                    <textarea
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                        required
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <FiImage className="mr-2 text-gray-400" />
                        Toy Images
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <span>Upload files</span>
                                    <input
                                        id="file-upload"
                                        name="image"
                                        type="file"
                                        className="sr-only"
                                        onChange={handleFileChange}
                                        accept="image/*"
                                        multiple
                                        required={!isEditMode}
                                        ref={fileInputRef} // <-- assign the ref here
                                    />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>

                            {/* ✅ Show selected file names */}
                            {selectedFiles.length > 0 && (
                                <div className="mt-2 text-sm text-gray-700 text-left">
                                    <strong>Selected Files:</strong>
                                    <ul className="list-disc list-inside mt-1">
                                        {selectedFiles.map((file, index) => (
                                            <li key={index}>{file.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 flex justify-end space-x-3 pt-2">
                    {isEditMode && (
                        <button
                            type="button"
                            onClick={onCancel}
                            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
                        >
                            <FiX className="mr-2" />
                            Cancel
                        </button>
                    )}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ${isLoading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
                            }`}
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </>
                        ) : (
                            <>
                                <FiCheck className="mr-2" />
                                {isEditMode ? 'Update Product' : 'Add Product'}
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

const InputField = ({ label, name, value, handleChange, type = 'text', icon }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
            {icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>}
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
                className={`block w-full ${icon ? 'pl-10' : 'pl-3'} pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}
                required
            />
        </div>
    </div>
);

const SelectField = ({ label, name, value, handleChange, options, icon }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
            {icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>}
            <select
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
                className={`block w-full ${icon ? 'pl-10' : 'pl-3'} pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 appearance-none bg-white`}
                required
            >
                <option value="">Select {label.toLowerCase()}</option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    </div>
);

export default ToysForm;
