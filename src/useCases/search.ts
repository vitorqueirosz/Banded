import { useFetch } from 'hooks/useFetch';
import { Genre } from 'pages/Search';
import { BANDS } from 'constants/endpoints';
import { BandResponse } from './feed';

export type FilterParams = {
  genres: Genre[];
  name: string;
  city: string;
}

export const useSearchByFilters = (params?: FilterParams) =>
  useFetch<BandResponse[]>(BANDS.BY_FILTERS, { params });
