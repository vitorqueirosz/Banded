import { useFetch } from 'hooks/useFetch';
import { BANDS } from 'constants/endpoints';
import { BandResponse } from './feed';

export type FilterParams = {
  genres?: string[];
  name?: string;
  city?: string;
}

export const useSearchByFilters = (params?: FilterParams) =>
  useFetch<BandResponse[]>(BANDS.BY_FILTERS, { params });
