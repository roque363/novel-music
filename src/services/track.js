/* eslint-disable no-console */
import config from './config';

const baseUrl = config.apiUrl;
const trackService = {};

trackService.search = async function(q, offset = 0) {
  const type = 'track';
  return fetch(`${baseUrl}/search?q=${q}&type=${type}&offset=${offset}`)
    .then(res => res.json())
    .catch(error => {
      return error;
    })
    .then(res => {
      return res;
    });
};

trackService.getById = async function(id) {
  return fetch(`${baseUrl}/tracks/${id}`)
    .then(res => res.json())
    .catch(error => {
      return error;
    })
    .then(res => {
      return res;
    });
};

export default trackService;
