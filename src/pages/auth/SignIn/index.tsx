import { TextField } from 'components/form/TextField';
import { Button } from 'components/structure/Button';

import { FiLogIn } from 'react-icons/fi';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import routes from 'constants/routes';
import * as S from './SignIn.styles';

const SignIn = () => {
  const { register } = useForm();

  return (
    <S.Container>
      <S.Form>
        <TextField register={register} label="E-mail" placeholder="E-mail" />
        <TextField register={register} label="Senha" placeholder="Senha" />

        <S.ForgotPassword>Esqueci a senha</S.ForgotPassword>

        <Button>ENTRAR</Button>
      </S.Form>

      <S.CreateAccount>
        <Link to={routes.signUp.firstStep}>
          <FiLogIn color="#fff" size={22} />
          Criar conta
        </Link>
      </S.CreateAccount>
    </S.Container>
  );
};

export default SignIn;
