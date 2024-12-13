import Head from 'next/head';
import Link from 'next/link';
import HomeCoverSection from '../components/HomeCoverSection';


export default function Home() {
  return (
    <>
      <Head>
        <title>Alumni Network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-100 min-h-screen">
        <header className="bg-purple-700 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Alumni Network</h1>
            <nav>
              <Link href="/" legacyBehavior>
                <a className="px-3 hover:text-gray-200">Home</a>
              </Link>
              <Link href="/blogs" legacyBehavior>
                <a className="px-3 hover:text-gray-200">Blogs</a>
              </Link>
              <Link href="/polls" legacyBehavior>
                <a className="px-3 hover:text-gray-200">Polls</a>
              </Link>
              <Link href="/login" legacyBehavior>
                <a className="px-3 hover:text-gray-200">Login</a>
              </Link>
              <Link href="/logout" legacyBehavior>
                <a className="px-3 hover:text-gray-200">Logout</a>
              </Link>
               <Link href="/register" legacyBehavior>
                <a className="px-3 hover:text-gray-200">Register</a>
              </Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto py-8">
          <HomeCoverSection />
          <section className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">Welcome to the Alumni Network</h2>
            <p className="text-gray-700 text-lg">Connect with fellow alumni, share your experiences, and stay updated on events.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Alumni Spotlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">John Doe</h3>
                <p className="text-gray-600">Class of 2010</p>
                <p className="text-gray-700 mt-2">CEO of Tech Company</p>
              </div>
              <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Jane Smith</h3>
                <p className="text-gray-600">Class of 2012</p>
                <p className="text-gray-700 mt-2">Lead Software Engineer</p>
              </div>
              <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Peter Jones</h3>
                <p className="text-gray-600">Class of 2015</p>
                <p className="text-gray-700 mt-2">Marketing Manager</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-purple-700 text-white py-4 text-center">
          <p>&copy; 2024 Alumni Network</p>
        </footer>
      </div>
    </>
  );
}
