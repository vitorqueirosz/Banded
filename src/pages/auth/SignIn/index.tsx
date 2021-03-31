import { TextField } from 'components/form/TextField';
import { Button } from 'components/structure/Button';
import { FiLogIn } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAuth } from 'useCases/auth';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as S from './SignIn.styles';

const schemaValidation = Yup.object().shape({
  email: Yup.string().required('Email obrigatorio').email('Digite um e-mail valido'),
  password: Yup.string().required('Nome obrigatorio').min(6, 'Minimo 6 caracteres'),
});

type Form = {
  email: string;
  password: string;
}

export const SignIn = () => {
  const { register, handleSubmit, errors } = useForm<Form>({
    resolver: yupResolver(schemaValidation),
  });
  const { isFetching, handleAuthenticate } = useAuth();

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(handleAuthenticate)}>
        <TextField
          name="email"
          register={register}
          type="email"
          label="E-mail"
          placeholder="E-mail"
          error={errors.email?.message}
        />
        <TextField
          name="password"
          register={register}
          type="password"
          label="Senha"
          placeholder="Senha"
          error={errors.password?.message}
        />

        <S.ForgotPassword>Esqueci a senha</S.ForgotPassword>

        <Button isLoading={isFetching}>ENTRAR</Button>
      </S.Form>

      <S.CreateAccount>
        <Link to="/sign-up">
          <FiLogIn color="#fff" size={22} />
          Criar conta
        </Link>
      </S.CreateAccount>
    </S.Container>
  );
};
