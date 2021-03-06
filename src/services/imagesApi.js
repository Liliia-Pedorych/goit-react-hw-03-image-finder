import axios from 'axios';

const getImages = ({ searchQuery = '', page = 1 }) => {
  const apiKey = '19832494-5cd14cdef5946ada4556f0091';
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => res.data.hits);
};

export default getImages;
