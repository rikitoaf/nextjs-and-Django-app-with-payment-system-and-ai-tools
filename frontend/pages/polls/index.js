import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function Polls() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/polls/polls')
      .then(response => {
        setPolls(response.data);
      })
      .catch(error => {
        console.error('Error fetching polls:', error);
      });
  }, []);
  console.log(typeof polls); // Should log 'object' if it's an array
  return (
    <ProtectedRoute>  
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Polls</h1>
      <Link href="/polls/create" legacyBehavior>
        <a className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Create New Poll
        </a>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {polls.map(poll => (
          <div key={poll.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{poll.question}</h2>
            <Link href={`/polls/${poll.id}`} legacyBehavior>
              <a className="text-blue-500 hover:underline">View Details</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </ProtectedRoute>
  );
}