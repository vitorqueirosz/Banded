import { TextField } from 'components/form/TextField';
import { Button } from 'components/structure/Button';
import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import routes from 'constants/routes';
import { User, useSignUp } from 'contexts/SignUp';
import * as S from './FirstStep.styles';

export const FirstStep = () => {
  const { register, handleSubmit } = useForm();

  const { setUser } = useSignUp();
  const navigate = useNavigate();

  const onSubmit = ({ name, email, password, city }: User) => {
    setUser({
      name,
      email,
      password,
      city,
    });

    navigate(routes.signUp.secondStep);
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
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
          type="email"
        />
        <TextField
          register={register}
          name="password"
          label="Senha"
          placeholder="Senha"
          type="password"
        />
        <TextField
          register={register}
          name="city"
          label="Cidade"
          placeholder="Cidade"
        />

        <Button type="submit">PROXIMO</Button>
      </S.Form>

      <S.HasAccount>
        <Link to={routes.signIn.base}>
          <FiArrowLeft color="#DEDEEA" size={22} />
          Já tenho conta
        </Link>
      </S.HasAccount>
    </S.Container>
  );
};
