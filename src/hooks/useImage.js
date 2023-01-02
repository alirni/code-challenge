import { configurationApi } from 'api';
import { useQuery } from 'react-query';

export const imageSizeKey = {
  backdrop: 'backdrop_sizes',
  poster: 'poster_sizes',
  logo: 'logo_sizes',
  profile: 'profile_sizes',
};

const useImage = ({ path = '', size = '', sizeIndex = 0 }) => {
  const { data: config, isLoading } = useQuery(['config'], () => configurationApi());

  if (isLoading) return '';

  return `${config?.images?.base_url}${config?.images?.[size][sizeIndex]}${path}`;
};

export default useImage;
