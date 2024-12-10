import Link from 'next/link';
import { ProtectedRoute } from '../components/ProtectedRoute';
export default function Home() {
  return (
    <ProtectedRoute>
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Fullstack App</h1>
      <div className="flex space-x-4">
        <Link href="/blogs" legacyBehavior>
          <a className="text-blue-500">Blogs</a>
        </Link>
        <Link href="/polls" legacyBehavior>
          <a className="text-blue-500">Polls</a>
        </Link>
        <Link href="/login" legacyBehavior>
          <a className="text-blue-500">Login</a>
        </Link>
        <Link href="/logout" legacyBehavior>
          <a className="text-blue-500">logout</a>
        </Link>
        <Link href="/register" legacyBehavior>
          <a className="text-blue-500">register</a>
        </Link>
      </div>
    </div>
    </ProtectedRoute>
  ); 
}