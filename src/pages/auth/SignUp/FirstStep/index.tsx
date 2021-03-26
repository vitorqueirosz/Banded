import { TextField } from 'components/form';
import { Button } from 'components/structure/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import routes from 'constants/routes';
import { User, useSignUp } from 'contexts/SignUp';
import * as Yup from 'yup';
import * as S from './FirstStep.styles';

const schemaValidation = Yup.object().shape({
  name: Yup.string().required('Nome obrigatorio'),
  email: Yup.string().required('Email obrigatorio').email('Digite um e-mail valido'),
  password: Yup.string().required('Senha obrigatorio'),
  city: Yup.string().required('Cidade obrigatoria'),
});

export const FirstStep = () => {
  const { register, handleSubmit, errors } = useForm<User>({
    resolver: yupResolver(schemaValidation),
  });
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
          error={errors.name?.message}
        />
        <TextField
          register={register}
          name="email"
          label="E-mail"
          placeholder="Email"
          type="email"
          error={errors.email?.message}
        />
        <TextField
          register={register}
          name="password"
          label="Senha"
          placeholder="Senha"
          type="password"
          error={errors.password?.message}
        />
        <TextField
          register={register}
          name="city"
          label="Cidade"
          placeholder="Cidade"
          error={errors.city?.message}
        />

        <Button type="submit">PROXIMO</Button>
      </S.Form>

      <S.HasAccount>
        <Link to={routes.auth.initial}>
          <FiArrowLeft color="#DEDEEA" size={22} />
          Já tenho conta
        </Link>
      </S.HasAccount>
    </S.Container>
  );
};
