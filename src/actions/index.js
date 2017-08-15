import axios from 'axios';
export const TWITTER_POSTS = 'twitter_posts'

const API_URL = 'https://mighty-ridge-24884.herokuapp.com/api/'

export function getTwitterPosts() {
  const url = `${API_URL}/twitter`,
  request = axios.get(url);

  return {
    type: TWITTER_POSTS,
    payload: request
  }
}
