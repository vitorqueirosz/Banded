import { TextField } from 'components/form/TextField';
import { Button } from 'components/structure/Button';
import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import routes from 'constants/routes';
import * as S from './FirstStep.styles';

export const FirstStep = () => {
  const { register } = useForm();

  return (
    <S.Container>
      <S.Form>
        <S.Label>Dados basicos</S.Label>

        <TextField
          register={register}
          name="name"
          label="Nome"
          placeholder="Nome"
        />
        <TextField
          register={register}
          name="mail"
          label="E-mail"
          placeholder="Email"
        />
        <TextField
          register={register}
          name="password"
          label="Senha"
          placeholder="Senha"
        />
        <TextField
          register={register}
          name="city"
          label="Cidade"
          placeholder="Cidade"
        />

        <Button>PROXIMO</Button>
      </S.Form>

      <S.HasAccount>
        <Link to={routes['sign-in']}>
          <FiArrowLeft color="#DEDEEA" size={22} />
          Já tenho conta
        </Link>
      </S.HasAccount>
    </S.Container>
  );
};
