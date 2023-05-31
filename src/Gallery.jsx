import { useGlobalContext } from './context';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Gallery = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  const url = `https://api.unsplash.com/search/photos?client_id=7fTKG1VIWIDl762kR652aPl2jEMRWGpY2dqrrvHfjEY&query=`;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['search', searchTerm],
    queryFn: async () => {
      const { data } = await axios.get(`${url}${searchTerm}`);
      return data;
    },
    onSuccess: () => {
      // setSearchTerm('');
    },
  });
  if (isLoading) {
    return (
      <section className='image-container'>
        <h2>Loading...</h2>
      </section>
    );
  }
  if (isError) {
    return (
      <section className='image-container'>
        <h2>Error....</h2>
      </section>
    );
  }
  if (data.results.length < 1) {
    return (
      <section className='image-container'>
        <h4>No results found...</h4>
      </section>
    );
  }
  return (
    <section className='image-container'>
      {data.results.map((item) => {
        const url = item.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className='img'
          />
        );
      })}
    </section>
  );
};

export default Gallery;
