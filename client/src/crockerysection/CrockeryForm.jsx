import React from 'react';

const CrockeryForm = ({ formData, handleChange, handleSubmit, isEditMode }) => {
    return (
        <div className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-5xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center text-blue-600 mb-6 sm:mb-8">
                {isEditMode ? 'Update Item' : 'Add New Crockery Item'}
            </h2>

            <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
                <div>
                    <label className="block text-sm font-medium mb-1">Item Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="e.g. Ceramic Plate"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Price (₹)</label>
                    <input
                        type="number"
                        name="price"
                        placeholder="e.g. 299"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white outline-none"
                        required
                    >
                        <option value="">Select category</option>
                        <option value="Plates">Plates</option>
                        <option value="Bowls">Bowls</option>
                        <option value="Cups">Cups</option>
                        <option value="Glasses">Glasses</option>
                        <option value="Cutlery">Cutlery</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Material</label>
                    <select
                        name="material"
                        value={formData.material}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white outline-none"
                        required
                    >
                        <option value="">Select material</option>
                        <option value="Ceramic">Ceramic</option>
                        <option value="Glass">Glass</option>
                        <option value="Steel">Steel</option>
                        <option value="Plastic">Plastic</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                        name="description"
                        rows="3"
                        placeholder="Enter item description..."
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
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
                       file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 h-9"
                        required={!isEditMode}
                    />
                </div>

                <div className="md:col-span-2 text-center">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                    >
                        {isEditMode ? 'Update Crockery' : 'Add Crockery'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CrockeryForm;
