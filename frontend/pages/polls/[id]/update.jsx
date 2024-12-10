import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UpdatePoll({ pollId }) {
  const [poll, setPoll] = useState({ question: '', options: [] });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/polls/polls/${pollId}/`)
      .then(response => {
        setPoll(response.data);
      })
      .catch(error => {
        setError('Failed to fetch poll. Please try again.');
        console.error('Error fetching poll:', error);
      });
  }, [pollId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/polls/polls/${pollId}/`, poll);
      setSuccess(true);
      setError('');
    } catch (error) {
      setError('Failed to update poll. Please try again.');
      setSuccess(false);
      console.error('Error updating poll:', error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Update Poll</h1>
      {success && <p className="text-green-500">Poll updated successfully!</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="question" className="block text-sm font-medium text-gray-700">Question</label>
          <input
            type="text"
            id="question"
            value={poll.question}
            onChange={(e) => setPoll({ ...poll, question: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        {poll.options.map((option, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-700">Option {index + 1}</label>
            <input
              type="text"
              value={option.option_text}
              onChange={(e) => {
                const updatedOptions = poll.options.map((o, i) => 
                  i === index ? { ...o, option_text: e.target.value } : o
                );
                setPoll({ ...poll, options: updatedOptions });
              }}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Update Poll
        </button>
      </form>
    </div>
  );
}