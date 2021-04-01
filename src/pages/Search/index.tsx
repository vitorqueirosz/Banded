import { TextField } from 'components/form';
import { Title } from 'components/structure';
import { useForm } from 'react-hook-form';
import * as S from './Search.styles';

export const Search = () => {
  const { register, errors } = useForm();

  return (
    <S.Container>
      <Title>Buscar</Title>
      <TextField
        name="search"
        register={register}
        isSearch
        placeholder="Músicos e bandas"
        label="Músicos e bandas"
        error={errors.email?.message}
        color="secondary"
      />

    </S.Container>
  );
};
