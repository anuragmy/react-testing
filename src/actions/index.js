import axios from 'axios';
import { types } from './types';

export const fetchPosts = () => async (dispach) => {
  await axios.get('http://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((res) => {
      dispach({
        type: types.GET_POSTS,
        payload: res.data,
      })
    })
    .catch(err => console.log(err));
}
