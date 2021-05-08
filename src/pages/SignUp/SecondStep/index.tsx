import { TextField, Checkbox, SelectField } from 'components/form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/structure/Button';
import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { UserPayload, useSignUpContext } from 'contexts/SignUp';
import { useCallback, useEffect, useState } from 'react';
import { useCreateUser } from 'useCases/SignUp';
import { Spinner } from 'components/structure/Spinner';
import { defaultValues, schemaValidate } from './SeconStep.validation';
import * as S from './SecondStep.styles';

type MusicianPayload = {
  bandsName: string
  instrument: string
}

const instruments = [
  {
    value: 'Microfone',
    label: 'Microfone',
  },
  {
    value: 'Guitarra',
    label: 'Guitarra',
  },
  {
    value: 'Bateria',
    label: 'Bateria',
  },
  {
    value: 'Teclado',
    label: 'Teclado',
  },
  {
    value: 'Violão',
    label: 'Violão',
  },
  {
    value: 'Baixo',
    label: 'Baixo',
  },
];

export const SecondStep = () => {
  const { register, handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schemaValidate),
    defaultValues,
  });
  const [isSubmitReady, setIsSubmitReady] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const handleCreateUser = useCreateUser();
  const { user, setUser } = useSignUpContext();
  const navigate = useNavigate();

  const onSubmit = (payload: UserPayload) => {
    handleCreateUser!({
      ...user,
      ...payload,
    });
  };

  const handleAddUserMusic = useCallback((userMusician: MusicianPayload) => {
    setUser(prevState => ({ ...prevState, userMusician }));
    setIsReady(prevState => !prevState);

    setTimeout(() => {
      setIsReady(prevState => !prevState);
      navigate(ROUTES.signUp.setLink('thirdStep'));
    }, 2000);
  }, [setUser, navigate]);

  useEffect(() => {
    isSubmitReady && handleSubmit(handleAddUserMusic)();
  }, [isSubmitReady, handleSubmit, handleAddUserMusic]);

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label>Dados musicais</S.Label>
        <SelectField
          control={control}
          name="instrument"
          options={instruments}
          placeholder="Selecione um instrumento"
          label="Selecione um instrumento"
          error={errors.instrument?.message}
          inputSize
        />
        <TextField
          register={register}
          name="bandsName"
          label="Banda"
          placeholder="Banda"
          error={errors.bandsName?.message}
        />
        <Checkbox
          register={register}
          name="hasMusic"
          label="Tem músicas próprias?"
          onChange={() => setIsSubmitReady(prevState => !prevState)}
        />
        {isReady && <Spinner size={24} />}
        <Button type="submit">FINALIZAR</Button>
      </S.Form>

      <S.HasAccount>
        <Link to={ROUTES.signUp.setLink('base')}>
          <FiArrowLeft color="#DEDEEA" size={22} />
          Voltar
        </Link>
      </S.HasAccount>
    </S.Container>
  );
};
