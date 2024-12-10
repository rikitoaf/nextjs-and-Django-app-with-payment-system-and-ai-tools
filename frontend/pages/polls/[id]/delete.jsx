import { useState } from 'react';
import axios from 'axios';

export default function DeletePoll({ pollId }) {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/polls/polls/${pollId}/`);
      setSuccess(true);
      setError('');
    } catch (error) {
      setError('Failed to delete poll. Please try again.');
      setSuccess(false);
      console.error('Error deleting poll:', error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Delete Poll</h1>
      {success && <p className="text-green-500">Poll deleted successfully!</p>}
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handleDelete}
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Delete Poll
      </button>
    </div>
  );
}