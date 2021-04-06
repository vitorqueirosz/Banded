import { Genre, Params } from 'pages/Search';
import { useForm } from 'react-hook-form';
import { FiXCircle } from 'react-icons/fi';
import { Button } from 'components/structure';
import { Checkbox, SelectField, Option } from 'components/form';
import { useFetch } from 'hooks/useFetch';
import { CITIES } from 'constants/endpoints';
import { useCallback, useMemo, useState } from 'react';
import { Title } from '../Typography/Typography.styles';
import * as S from './Modal.styles';
import { brazilianState } from './states';

export type ModalProps = {
  show: boolean;
  handleCloseModal: () => void;
  handleFiltersSubmit: (value: Params) => void;
  genres: Genre[];
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

export const Modal = ({
  show,
  handleCloseModal,
  handleFiltersSubmit,
  genres }: ModalProps) => {
  const { register, control, handleSubmit } = useForm<Payload>();
  const [selectedUf, setSelectedUf] = useState('');

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

  return (
    <S.Wrapper show={show}>
      <S.Content>
        <Title>Filtros</Title>
        <FiXCircle color="#fff" size={18} onClick={handleCloseModal} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <S.FilterContainer>
            <S.Divisor>
              <S.SubTitle>Gêneros</S.SubTitle>
              {genres.map(({ label, value }) => (
                <Checkbox
                  register={register}
                  key={value}
                  name="genres"
                  label={label}
                  value={value}
                  id={label}
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
      </S.Content>
    </S.Wrapper>
  );
};
