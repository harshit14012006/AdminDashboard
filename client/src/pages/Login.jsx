import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '', remember: false });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = formData;

        // Admin credentials
        if (username === 'admin@playplates.com' && password === 'harshit14012006') {
            alert('Login successful!');
            localStorage.setItem('user', JSON.stringify({ username, role: 'admin' }));
            navigate('/admin-dashboard');
        } else {
            alert('Invalid credentials!');
        }
    };

    return (
        <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
            <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                </svg>
                PlayPlates Admin
            </div>

            <div className="relative mt-12 w-full max-w-lg sm:mt-10">
                <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent" />

                <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
                    <div className="flex flex-col p-6">
                        <h3 className="text-xl font-semibold leading-6 tracking-tighter">Admin Login</h3>
                        <p className="mt-1.5 text-sm font-medium text-white/50">
                            Welcome back to PlayPlates Admin Panel.
                        </p>
                    </div>

                    <div className="p-6 pt-0">
                        <form onSubmit={handleSubmit}>
                            {/* Username */}
                            <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                <div className="flex justify-between">
                                    <label className="text-xs font-medium text-gray-400 group-focus-within:text-white">
                                        Email
                                    </label>
                                    {formData.username && (
                                        <div className="absolute right-3 translate-y-2 text-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd"
                                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                    clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="admin@playplates.com"
                                    autoComplete="off"
                                    className="block w-full border-0 bg-transparent p-0 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-0 sm:leading-7"
                                />
                            </div>

                            {/* Password */}
                            <div className="mt-4 group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                <div className="flex justify-between">
                                    <label className="text-xs font-medium text-gray-400 group-focus-within:text-white">
                                        Password
                                    </label>
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="block w-full border-0 bg-transparent p-0 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-0 sm:leading-7"
                                />
                            </div>

                            {/* Remember + Links */}
                            <div className="mt-4 flex items-center justify-between">
                                <label className="flex items-center gap-2 text-xs">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        checked={formData.remember}
                                        onChange={handleChange}
                                        className="outline-none focus:outline focus:outline-sky-300"
                                    />
                                    Remember me
                                </label>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all hover:bg-white/10 hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
                                >
                                    Log in
                                </button>
                            </div>  
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
