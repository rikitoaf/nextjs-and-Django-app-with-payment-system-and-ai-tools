import api from '../../../utils/axios';  // Import the custom axios instance

const Polls = () => {
  const [polls, setPolls] = useState([]);
  const { isAuthenticated } = useAuth(); // Use authentication context

  useEffect(() => {
    api.get('/api/polls/')
      .then(response => {
        setPolls(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the polls!', error);
      });
  }, []);

  const vote = async (pollId, optionId) => {
    if (!isAuthenticated) {
      alert('You need to be logged in to vote!');
      return; // Exit if the user is not logged in
    }

    try {
      const response = await api.post(`/api/polls/${pollId}/options/${optionId}/vote/`);
      console.log('Vote registered', response.data);
    } catch (error) {
      console.error('There was an error registering the vote!', error);
    }
  };

  return (
    <div>
      {polls.map(poll => (
        <div key={poll.id}>
          <h3>{poll.question}</h3>
          {poll.options.map(option => (
            <div key={option.id}>
              <span>{option.option_text} - {option.votes} votes</span>
              <button onClick={() => vote(poll.id, option.id)}>Vote</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Polls;
