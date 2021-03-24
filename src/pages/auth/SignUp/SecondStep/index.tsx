import { TextField } from 'components/form/TextField';
import { Button } from 'components/structure/Button';
import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import routes from 'constants/routes';
import { User, useSignUp } from 'contexts/SignUp';
import Checkbox from 'components/form/Checkbox';
import { useState } from 'react';

import * as S from './SecondStep.styles';

export const SecondStep = () => {
  const { register, handleSubmit } = useForm();
  const [isChecked, setIsChecked] = useState(false);

  const { setUser } = useSignUp();

  const onSubmit = ({ band, instrument }: User) => {
    setUser({
      band,
      instrument,
    });
  };
  if (isChecked) {
    return <Navigate to="/sign-up/third-step" />;
  }
  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label>Dados musicais</S.Label>

        <TextField
          register={register}
          name="instrument"
          label="Instrumento"
          placeholder="Instrumento"
        />
        <TextField
          register={register}
          name="band"
          label="Banda"
          placeholder="Banda"
        />
        <Checkbox
          checked={isChecked}
          handleCheck={() => setIsChecked(prevState => !prevState)}
          name="hasMusic"
          label="Tem músicas próprias?"
        />

        <Button type="submit">FINALIZAR</Button>
      </S.Form>

      <S.HasAccount>
        <Link to={routes.signIn.base}>
          <FiArrowLeft color="#DEDEEA" size={22} />
          Voltar
        </Link>
      </S.HasAccount>
    </S.Container>
  );
};
