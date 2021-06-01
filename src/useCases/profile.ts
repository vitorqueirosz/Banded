import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useFetch } from 'hooks/useFetch';
import { USERS } from 'constants/endpoints';
import { setUrlWithParams } from 'utils';
import { useRequest, useMutateOnLoad } from 'hooks';
import { UserData } from 'constants/enums';
import { BandResponse } from './feed';

type UserBands = {
  userBands: BandResponse[];
};

type UserAlbums = {
  userAlbums: BandResponse[];
};

export type UserMusics = {
  userMusics: BandResponse[];
  total: number;
};

export type UsersMusician = {
  id: string;
  instrument: string;
  name: string;
  avatar?: string;
};

const MAX_INITIAL_ITEMS = 6;

const useLoadMoreItems = (
  lastSearchedUrl: string,
  setHasMore: Dispatch<SetStateAction<boolean>>,
  setIsFetching: Dispatch<SetStateAction<boolean>>,
  dataKey: string,
) => {
  const api = useRequest();

  const [urlWithoutParams] = lastSearchedUrl.split('?');

  const loadMoreItems = useCallback(
    async (currentPage: number) => {
      try {
        setIsFetching(true);
        const { data } = await api.get(
          setUrlWithParams(urlWithoutParams, {
            page: currentPage,
            pageSize: MAX_INITIAL_ITEMS,
          }),
        );

        !data.total && setHasMore(false);

        return data[dataKey];
      } finally {
        setIsFetching(false);
      }
    },
    [api, dataKey, urlWithoutParams, setHasMore, setIsFetching],
  );

  const mutate = useMutateOnLoad<UserMusics>(
    lastSearchedUrl,
    loadMoreItems,
    dataKey,
  );

  const handleLastSearchedUrl = useCallback(
    (currentPage: number) => {
      mutate(currentPage);
    },
    [mutate],
  );

  return {
    handleLastSearchedUrl,
  };
};

export const useUserBands = () => {
  const [lastUserBandsUrl, setLastUserBandsUrl] = useState('');
  const [isFetchingBands, setIsFetchingBands] = useState(false);
  const [hasMoreBands, setHasMoreBands] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { handleLastSearchedUrl } = useLoadMoreItems(
    lastUserBandsUrl,
    setHasMoreBands,
    setIsFetchingBands,
    UserData.UserBands,
  );

  const useFetchUserBands = () => {
    const params = {
      page: 1,
      pageSize: MAX_INITIAL_ITEMS,
    };
    const url = setUrlWithParams(USERS.BANDS, params);
    const fetchData = useFetch<UserBands>(url);

    useEffect(() => {
      setLastUserBandsUrl(url);
    }, [url]);

    const loadMoreBands = useCallback(() => {
      setCurrentPage(prevState => prevState + 1);
    }, []);

    return {
      ...fetchData,
      loadMoreBands,
      isFetchingBands,
      hasMoreBands,
    };
  };

  useEffect(() => {
    if (currentPage > 1) {
      handleLastSearchedUrl(currentPage);
    }
  }, [currentPage, handleLastSearchedUrl]);

  return {
    useFetchUserBands,
  };
};

export const useUserAlbums = () => {
  const [lastUserAlbumsUrl, setLastUserAlbumsUrl] = useState('');
  const [isFetchingAlbums, setIsFetchingAlbums] = useState(false);
  const [hasMoreAlbums, setHasMoreAlbums] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { handleLastSearchedUrl } = useLoadMoreItems(
    lastUserAlbumsUrl,
    setHasMoreAlbums,
    setIsFetchingAlbums,
    UserData.UserAlbums,
  );

  const useFetchUserAlbums = () => {
    const params = {
      page: 1,
      pageSize: MAX_INITIAL_ITEMS,
    };
    const url = setUrlWithParams(USERS.ALBUMS, params);
    const fetchData = useFetch<UserAlbums>(url);

    useEffect(() => {
      setLastUserAlbumsUrl(url);
    }, [url]);

    const loadMoreAlbums = useCallback(() => {
      setCurrentPage(prevState => prevState + 1);
    }, []);

    return {
      ...fetchData,
      loadMoreAlbums,
      isFetchingAlbums,
      hasMoreAlbums,
    };
  };

  useEffect(() => {
    if (currentPage > 1) {
      handleLastSearchedUrl(currentPage);
    }
  }, [currentPage, handleLastSearchedUrl]);

  return {
    useFetchUserAlbums,
  };
};

export const useUserMusics = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastSearchedUrl, setLastSearchedUrl] = useState('');
  const [isFetchingMusics, setIsFetchingMusics] = useState(false);
  const [hasMoreMusics, setHasMore] = useState(true);
  const { handleLastSearchedUrl } = useLoadMoreItems(
    lastSearchedUrl,
    setHasMore,
    setIsFetchingMusics,
    UserData.UserMusics,
  );

  const useFetchUserMusics = () => {
    const params = {
      page: 1,
      pageSize: MAX_INITIAL_ITEMS,
    };
    const url = setUrlWithParams(USERS.MUSICS, params);
    const fetchMusics = useFetch<UserMusics>(url);

    useEffect(() => {
      setLastSearchedUrl(url);
    }, [url]);

    const loadMoreMusics = useCallback(
      () => setCurrentPage(prevState => prevState + 1),
      [],
    );

    return {
      ...fetchMusics,
      isFetchingMusics,
      loadMoreMusics,
      hasMoreMusics,
    };
  };

  useEffect(() => {
    if (currentPage > 1) {
      handleLastSearchedUrl(currentPage);
    }
  }, [currentPage, handleLastSearchedUrl]);

  return {
    useFetchUserMusics,
  };
};

export const useUserMusicians = (params: { name: string }) => {
  const url = setUrlWithParams(USERS.SEARCH, params);

  return useFetch<UsersMusician[]>(url);
};
