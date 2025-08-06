import React from 'react';

const ToysForm = ({ formData, handleChange, handleSubmit, isEditMode }) => {
    return (
        <div className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-5xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center text-pink-600 mb-6 sm:mb-8">
                {isEditMode ? 'Update Toy' : 'Add New Toy'}
            </h2>

            <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
                <InputField label="Toy Name" name="name" value={formData.name} handleChange={handleChange} />
                <InputField label="Price (₹)" name="price" type="number" value={formData.price} handleChange={handleChange} />
                <SelectField
                    label="Category"
                    name="category"
                    value={formData.category}
                    handleChange={handleChange}
                    options={[
                        'Soft Toys',
                        'Educational',
                        'Action Figures',
                        'Puzzles',
                        'Outdoor',
                        'Vehicles & Remote Control',
                        'Building Blocks',
                        'Musical Toys',
                        'Arts & Crafts',
                        'Board Games',
                        'Dolls & Dollhouses',
                        'Role Play & Pretend Play',
                        'STEM Toys',
                        'Electronic Toys',
                        'Bath Toys',
                        'Sports & Outdoor Games',
                        'Plush Toys',
                        'Infant Toys',
                        'Science Kits',
                        'Construction Toys',
                        'Magic Sets',
                        'Learning Tablets',
                        'Wooden Toys',
                        'Toy Guns & Blasters',
                        'Die-Cast & Collectibles'
                    ]}
                />
                <SelectField
                    label="Age Group"
                    name="ageGroup"
                    value={formData.ageGroup}
                    handleChange={handleChange}
                    options={[
                        '0-6 months',
                        '6-12 months',
                        '1-2 years',
                        '2-3 years',
                        '3-5 years',
                        '5-7 years',
                        '6-8 years',
                        '8-10 years',
                        '10-12 years',
                        '12+ years',
                        'Teens & Adults'
                    ]}
                />

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                        name="description"
                        rows="3"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                        required
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Upload Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        multiple
                        onChange={handleChange}
                        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-white file:mr-4 file:py-2 file:px-4
                       file:rounded-lg file:border-0 file:text-sm file:font-semibold
                       file:bg-pink-50
                       file:text-pink-700 hover:file:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500 h-9"
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
    );
};

// 👇 Fixed InputField (with capital name)
const InputField = ({ label, name, value, handleChange, type = 'text' }) => (
    <div>
        <label className="block text-sm font-medium mb-1">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
            required
        />
    </div>
);

// 👇 Fixed SelectField (with capital name)
const SelectField = ({ label, name, value, handleChange, options }) => (
    <div>
        <label className="block text-sm font-medium mb-1">{label}</label>
        <select
            name={name}
            value={value}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 bg-white outline-none"
            required
        >
            <option value="">Select {label.toLowerCase()}</option>
            {options.map((opt) => (
                <option key={opt} value={opt}>
                    {opt}
                </option>
            ))}
        </select>
    </div>
);

export default ToysForm;
