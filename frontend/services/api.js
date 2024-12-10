import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
 
});

export const fetchBlogs = () => api.get('blog/posts/');
export const fetchPolls = () => api.get('polls/polls/');