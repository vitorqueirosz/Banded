import { TextField } from 'components/form';
import { Modal, Title, WrapperList } from 'components/structure';
import { useFetch } from 'hooks/useFetch';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiList } from 'react-icons/fi';

import { GENRES } from 'constants/endpoints';

import { useSearchByFilters } from 'useCases/search';
import { MusicalItem } from 'components/contexts';
import { useDebounce } from 'hooks/useDebounce';
import { ModalGenres } from 'components/contexts/search/ModalGenres';
import * as S from './Search.styles';

export type Genre = {
  label: string;
  value: string;
}

export type Params = {
  name?: string;
  city?: string;
  genres?: string[];
}

const initialValues = {
  name: '', city: '', genres: [],
};

type InputForm = {
  name: string;
}

export const Search = () => {
  const { register, errors } = useForm<InputForm>();
  const [params, setParams] = useState<Params>(initialValues);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [hasToClean, setHasToClean] = useState(false);

  const { data: genres } = useFetch<Genre[]>(GENRES.BASE);
  const { data: dataByFilters } = useSearchByFilters(params);

  const handleFilterByName = useDebounce(
    (value: string) => setParams(prevState => ({ ...prevState, name: value })), 350,
  );
  const handleFitersSubmit = useCallback(
    ({ genres, city }: Omit<Params, 'name'>) =>
      setParams(prevState => ({ ...prevState, genres, city })),
    [],
  );

  const handleToggleModal = useCallback(() => setShowFilterModal(false), []);

  const handleCleanParams = () => {
    setParams(initialValues);
    setHasToClean(true);
  };

  useEffect(() => {
    hasToClean && setHasToClean(false);
  }, [hasToClean]);

  return (
    <S.Container>
      <Title>Buscar</Title>

      <S.SearchContainer>
        <S.Divisor>
          <TextField
            inputSize="small"
            color="secondary"
            name="name"
            ref={register}
            isSearch
            placeholder="Músicos e bandas"
            label="Músicos e bandas"
            error={errors.name?.message}
            onChange={({ target: { value } }) => handleFilterByName(value)}
          />
          <FiList
            color="#fff"
            size={22}
            onClick={() => setShowFilterModal(true)}
          />
        </S.Divisor>

        {!!params.genres?.length && (
        <S.Divisor>
          <S.Filters>
            {params.genres.length && (
              <S.Display onClick={() => setShowFilterModal(true)}>
                <span>Gênero</span>
              </S.Display>
            )}

            {params.city && (
              <S.Display onClick={() => setShowFilterModal(true)}>
                <span>Cidade</span>
              </S.Display>
            )}
          </S.Filters>

          <S.CleanButton
            type="button"
            onClick={handleCleanParams}
          >
            Remover filtros
          </S.CleanButton>
        </S.Divisor>
        )}
        <Modal
          handleCloseModal={handleToggleModal}
          width="640px"
          show={showFilterModal}
        >
          <ModalGenres
            handleCloseModal={handleToggleModal}
            handleFiltersSubmit={handleFitersSubmit}
            genres={genres || []}
            hasToClean={hasToClean}
          />
        </Modal>
      </S.SearchContainer>

      <WrapperList>
        {dataByFilters?.map(item => (
          <MusicalItem key={item.id} item={item} />
        ))}
      </WrapperList>

    </S.Container>
  );
};
