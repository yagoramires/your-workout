import axios from 'axios';

export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export default axios
  .request(exerciseOptions)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.error(error);
  });
