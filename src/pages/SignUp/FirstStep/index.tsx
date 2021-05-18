import { TextField } from 'components/form';
import { Button } from 'components/structure/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { UserPayload, useSignUpContext } from 'contexts/SignUp';
import { defaultValues, schemaValidation } from './FirstStep.validation';
import * as S from './FirstStep.styles';

export const FirstStep = () => {
  const { register, handleSubmit, errors } = useForm<UserPayload>({
    resolver: yupResolver(schemaValidation),
    defaultValues,
  });
  const { setUser } = useSignUpContext();
  const navigate = useNavigate();

  const onSubmit = ({ name, email, password, city }: UserPayload) => {
    setUser({
      name,
      email,
      password,
      city,
    });

    navigate(ROUTES.signUp.setLink('secondStep'));
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label>Dados basicos</S.Label>

        <TextField
          ref={register}
          name="name"
          label="Nome"
          placeholder="Nome"
          error={errors.name?.message}
        />
        <TextField
          ref={register}
          name="email"
          label="E-mail"
          placeholder="Email"
          type="email"
          error={errors.email?.message}
        />
        <TextField
          ref={register}
          name="password"
          label="Senha"
          placeholder="Senha"
          type="password"
          error={errors.password?.message}
        />
        <TextField
          ref={register}
          name="city"
          label="Cidade"
          placeholder="Cidade"
          error={errors.city?.message}
        />

        <Button type="submit">PROXIMO</Button>
      </S.Form>

      <S.HasAccount>
        <Link to={ROUTES.auth.setLink('base')}>
          <FiArrowLeft color="#DEDEEA" size={22} />
          Já tenho conta
        </Link>
      </S.HasAccount>
    </S.Container>
  );
};
