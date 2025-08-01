import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { email, password } = formData;

    if (email === 'admin@playplates.com' && password === 'admin123') {
      const user = { name: 'Admin', email, role: 'admin' };
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', 'dummy-token');
      navigate('/admin-dashboard'); // 👈 redirect here
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
          onChange={handleChange}
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
        <p className="text-sm text-gray-500 mt-4">
          Use <strong>admin@playplates.com</strong> / <strong>admin123</strong>
        </p>
      </form>
    </div>
  );
};

export default Login;
