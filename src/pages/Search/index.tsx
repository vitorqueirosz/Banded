import { TextField } from 'components/form';
import { Modal, Title, WrapperList } from 'components/structure';
import { useFetch } from 'hooks/useFetch';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiList } from 'react-icons/fi';

import { GENRES } from 'constants/endpoints';

import { useSearchByFilters } from 'useCases/search';
import { MusicalItem } from 'components/contexts';
import * as S from './Search.styles';

export type Genre = {
  label: string;
  value: string;
}

export const Search = () => {
  const { register, errors } = useForm();
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const { data: genres } = useFetch<Genre[]>(GENRES.BASE);
  const { data: dataByFilters } = useSearchByFilters();

  const handleCloseModal = useCallback(() => setShowFilterModal(false), []);
  const handleSelectGenres = useCallback((value: Genre) => {
    if (!selectedGenres.includes(value)) {
      return setSelectedGenres(prevState => [...prevState, value]);
    }

    const filteredGenres = selectedGenres.filter(genre => genre.value !== value.value);
    return setSelectedGenres(filteredGenres);
  }, [selectedGenres]);

  return (
    <S.Container>
      <Title>Buscar</Title>

      <S.SearchContainer>
        <S.Divisor>
          <TextField
            inputSize="small"
            color="secondary"
            name="search"
            register={register}
            isSearch
            placeholder="Músicos e bandas"
            label="Músicos e bandas"
            error={errors.email?.message}
          />
          <FiList
            color="#fff"
            size={22}
            onClick={() => setShowFilterModal(true)}
          />
        </S.Divisor>

        {!!selectedGenres.length && (
        <S.Divisor>
          <button type="button">Remover filtros</button>
        </S.Divisor>
        )}

        <Modal
          show={showFilterModal}
          handleCloseModal={handleCloseModal}
          handleSelectGenres={handleSelectGenres}
          selectedGenres={selectedGenres}
          genres={genres || []}
        />

      </S.SearchContainer>

      <WrapperList>
        {dataByFilters?.map(item => (
          <MusicalItem key={item.id} item={item} />
        ))}
      </WrapperList>

    </S.Container>
  );
};
