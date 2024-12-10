// pages/register.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import api from '../utils/axios';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/auth/registration/', {
        username,
        email,
        password1,
        password2
      });

      setMessage('Registration successful! Please check your email to verify your account.');
      router.push('/login');
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center  sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-customPink to-customPurple shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-center text-gray-900 mb-6">Create an Account</h1>
            </div>
            <div className="divide-y  ">
              <form onSubmit={handleSubmit}>
                
                  <div className="mb-4">
                  <label
                      htmlFor="username"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      User Name
                  </label>
                    <input
                      autocomplete="off"
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 "
                      placeholder="username"
                    />
                    
                  </div>
                  <div className="mb-4">
                  <label
                      htmlFor="email"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Email
                  </label>
                    <input
                      autocomplete="off"
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Email"
                    />
                    
                  </div>
                  <div className="mb-4">
                  <label
                      htmlFor="password1"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Password
                  </label>
                    <input
                      autocomplete="off"
                      id="password1"
                      type="password"
                      value={password1}
                      onChange={(e) => setPassword1(e.target.value)}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="password"
                    />
                    
                  </div>
                  <div className="mb-4">
                  <label
                      htmlFor="password2"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Password
                  </label>
                    <input
                      autocomplete="off"
                      id="password2"
                      type="password"
                      value={password2}
                      onChange={(e) => setPassword2(e.target.value)}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="password"
                    />
                    
                  </div>
                
                  <div className="relative flex justify-center items-center">
                  {error && <div className="text-red-500">{error}</div>}
                  {message && <div className="text-green-500">{message}</div>}
                    <div class="relative inline-flex py-3  group">
                      <div class="absolute transitiona-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-customPink to-customPurple rounded-xl blur-lg group-hover:opacity-70 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                      <button
                        type="submit"
                        
                        class="relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-customPink font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customPurple"
                        
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


