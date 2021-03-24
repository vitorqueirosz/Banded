import { TextField } from 'components/form/TextField';
import { Button } from 'components/structure/Button';
import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import routes from 'constants/routes';
import { User, useSignUp } from 'contexts/SignUp';
import Checkbox from 'components/form/Checkbox';
import { useState } from 'react';

import { useCreateUser } from 'useCases/SignUp';
import * as S from './SecondStep.styles';

export const SecondStep = () => {
  const { register, handleSubmit } = useForm();
  const [isChecked, setIsChecked] = useState(false);
  const handleCreateUser = useCreateUser();

  const { user, setUser } = useSignUp();

  const onSubmit = (data: User) => {
    if (handleCreateUser) {
      handleCreateUser({
        ...user,
        ...data,
      });
    }
  };

  const handleAddUserMusic = ({ band, instrument }: User) => {
    setUser({
      band,
      instrument,
    });
    setIsChecked(prevState => !prevState);
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
          handleCheck={handleSubmit(handleAddUserMusic)}
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
