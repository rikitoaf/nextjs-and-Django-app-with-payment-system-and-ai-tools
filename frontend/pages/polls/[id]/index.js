import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function PollDetail() {
  const [poll, setPoll] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`http://127.0.0.1:8000/api/polls/polls/${id}`)
        .then(response => {
          setPoll(response.data);
        })
        .catch(error => {
          console.error('Error fetching poll:', error);
        });
    }
  }, [id]);

  if (!poll) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{poll.question}</h1>
      <div className="mt-4">
        {poll.options.map(option => (
          <div key={option.id} className="flex items-center space-x-2">
            <p>{option.option_text}</p>
            <span className="text-gray-500">Votes: {option.votes}</span>
          </div>
        ))}
      </div>
    </div>
  );
}