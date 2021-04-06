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

export type Params = {
  name?: string;
  city?: string;
  genres?: string[];
}

export const Search = () => {
  const { register, errors } = useForm();
  const [params, setParams] = useState<Params>({} as Params);

  const { data: genres } = useFetch<Genre[]>(GENRES.BASE);
  const { data: dataByFilters } = useSearchByFilters(params);

  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleFitersSubmit = useCallback(
    ({ genres, city }: Omit<Params, 'name'>) => setParams({ genres, city }), [],
  );

  const handleCloseModal = useCallback(() => setShowFilterModal(false), []);

  const handleCleanParams = () => setParams({} as Params);

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

        {!!params.genres?.length && (
        <S.Divisor>
          <S.Filters>
            {params.genres.length && (
              <S.Display>
                <span>Gênero</span>
              </S.Display>
            )}

            {params.city && (
              <S.Display>
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
          show={showFilterModal}
          handleCloseModal={handleCloseModal}
          handleFiltersSubmit={handleFitersSubmit}
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
