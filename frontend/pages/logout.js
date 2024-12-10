// pages/logout.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';

export default function Logout() {
  const { logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    logout();
    router.push('/login');
  }, [logout, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>Logging out...</div>
    </div>
  );
}