import { TextField, Checkbox } from 'components/form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/structure/Button';
import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { User, useSignUp } from 'contexts/SignUp';
import { useState } from 'react';
import * as Yup from 'yup';
import { useCreateUser } from 'useCases/SignUp';
import * as S from './SecondStep.styles';

const schemaValidate = Yup.object().shape({
  instrument: Yup.string().required('Nome obrigatorio'),
  bandsName: Yup.string().required('Senha obrigatorio'),
});

type MusicianPayload = {
  bandsName: string
  instrument: string
}

export const SecondStep = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemaValidate),
  });
  const [isChecked, setIsChecked] = useState(false);
  const handleCreateUser = useCreateUser();
  const { user, setUser } = useSignUp();

  const onSubmit = (payload: User) => {
    handleCreateUser!({
      ...user,
      ...payload,
    });
  };

  const handleAddUserMusic = (userMusician: MusicianPayload) => {
    setUser(prevState => ({ ...prevState, userMusician }));
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
          error={errors.instrument?.message}
        />
        <TextField
          register={register}
          name="bandsName"
          label="Banda"
          placeholder="Banda"
          error={errors.bandsName?.message}
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
        <Link to={ROUTES.signUp.firstStep}>
          <FiArrowLeft color="#DEDEEA" size={22} />
          Voltar
        </Link>
      </S.HasAccount>
    </S.Container>
  );
};
