import { Checkbox, Option, SelectField } from 'components/form';
import { Title, Button } from 'components/structure';
import { useFetch } from 'hooks';
import { Genre, Params } from 'pages/Search';
import { CITIES } from 'constants/endpoints';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './ModalGenres.styles';

import { brazilianState } from './states';

export type ModalGenres = {
  handleCloseModal: () => void;
  hasToClean: boolean;
  handleFiltersSubmit: (value: Params) => void;
  genres: Genre[];
}

type ModalInputForm = {
  city: string;
  uf: string;
  genres: string[];
  }

type City = {
  id: string;
  nome: string;
}

type Payload = {
  city: Option;
  uf: string;
  genres: string[];
}

export const ModalGenres = ({
  handleCloseModal,
  handleFiltersSubmit,
  genres,
  hasToClean }: ModalGenres) => {
  const [selectedUf, setSelectedUf] = useState('');

  const { register, control, handleSubmit, reset } = useForm<ModalInputForm>({
    defaultValues: {
      city: '',
      uf: '',
      genres: [],
    },
  });

  const { data, isLoading } = useFetch<City[]>(CITIES.BY_STATE(selectedUf));

  const onChange = useCallback(({ value }: Option) => setSelectedUf(value), []);

  const cities = useMemo(
    () => data?.map(({ id, nome }) => ({ value: id, label: nome })),
    [data],
  );

  const onSubmit = ({ genres, city }: Payload) => {
    handleFiltersSubmit({ genres, city: city && city.label });
    handleCloseModal();
  };

  useEffect(() => {
    if (hasToClean) {
      reset();
      setSelectedUf('');
    }
  }, [hasToClean, reset]);
  return (
    <>
      <Title>Filtros</Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <S.FilterContainer>
          <S.Divisor>
            <S.SubTitle>Gêneros</S.SubTitle>
            {genres.map(({ label, value }) => (
              <Checkbox
                id={label}
                register={register}
                key={value}
                name="genres"
                label={label}
                value={value}
              />
            ))}
          </S.Divisor>

          <S.Divisor>
            <S.SubTitle>Cidade</S.SubTitle>
            <div>
              <SelectField
                control={control}
                name="uf"
                options={brazilianState}
                placeholder="UF"
                label="Selecione um estado"
                onChange={onChange}
              />
              <SelectField
                control={control}
                name="city"
                options={cities ?? []}
                label="Selecione uma cidade"
                placeholder="Selecione uma cidade"
                isLoading={isLoading}
              />
            </div>
          </S.Divisor>
        </S.FilterContainer>

        <Button type="button">Salvar</Button>
      </form>
    </>
  );
};
