import Radio from 'components/form/Radio';
import { Genre } from 'pages/Search';
import { useForm } from 'react-hook-form';
import { FiXCircle } from 'react-icons/fi';
import { Button } from 'components/structure';
import { SelectField } from 'components/form';
import { useFetch } from 'hooks/useFetch';
import { CITIES } from 'constants/endpoints';
import { useCallback, useMemo, useState } from 'react';
import { Title } from '../Typography/Typography.styles';
import * as S from './Modal.styles';
import { brazilianState } from './states';

export type ModalProps = {
  show: boolean;
  handleCloseModal: () => void;
  handleSelectGenres: (value: Genre) => void;
  genres: Genre[];
  selectedGenres: Genre[];
}

type City = {
  id: string;
  nome: string;
}

export const Modal = ({
  show,
  handleCloseModal,
  handleSelectGenres,
  genres,
  selectedGenres }: ModalProps) => {
  const { register, control } = useForm();
  const [selectedUf, setSelectedUf] = useState('');

  const { data, isLoading } = useFetch<City[]>(CITIES.BY_STATE(selectedUf));

  const onChange = useCallback((value: string) => setSelectedUf(value), []);

  const cities = useMemo(
    () => data?.map(({ id, nome }) => ({ value: id, label: nome })),
    [data],
  );

  return (
    <S.Wrapper show={show}>
      <S.Content>
        <Title>Filtros</Title>
        <FiXCircle color="#fff" size={18} onClick={handleCloseModal} />

        <form>
          <S.FilterContainer>
            <S.Divisor>
              <S.SubTitle>Generos</S.SubTitle>
              {genres.map(({ label, value }, index) => (
                <Radio
                  onClick={() => handleSelectGenres(genres[index])}
                  key={value}
                  name={label}
                  label={label}
                  register={register}
                  checked={selectedGenres.includes(genres[index])}
                  value={value}
                  readOnly
                />
              ))}
            </S.Divisor>

            <S.Divisor>
              <S.SubTitle>Cidade</S.SubTitle>
              <S.FormGroupCustom>
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

              </S.FormGroupCustom>
            </S.Divisor>
          </S.FilterContainer>

          <Button type="submit">Salvar</Button>
        </form>
      </S.Content>
    </S.Wrapper>
  );
};
