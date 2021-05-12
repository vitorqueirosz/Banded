import { useFetch } from 'hooks/useFetch';
import { BANDS } from 'constants/endpoints';
import { BandResponse } from './feed';

export type FilterParams = {
  genres?: string[];
  name?: string;
  city?: string;
};

const getSearchByFiltersUrl = (url: string, params: FilterParams) => {
  const { name = '', genres = [], city = '' } = params;

  const genresJoined = genres.join('&');

  return `${url}?name=${name}&city=${city}&genres=${genresJoined}`;
};

export const useSearchByFilters = (params: FilterParams) =>
  useFetch<BandResponse[]>(
    getSearchByFiltersUrl(BANDS.BY_FILTERS, params),
    {},
    {
      refetchOnWindowFocus: false,
    },
  );
