import { TextField } from 'components/form';
import { Add, Button } from 'components/structure';
import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { MusicProps } from 'interfaces/music';
import { useCallback, useState } from 'react';
import { useCreateUser } from 'useCases/SignUp';
import { useSignUpContext } from 'contexts/SignUp';
import { yupResolver } from '@hookform/resolvers/yup';
import { MusicList } from 'components/contexts';
import { ROUTES } from 'constants/routes';
import { defaultValues, schemaValidate } from './FourthStep.validation';

import * as S from './FourthStep.styles';

export const FourthStep = () => {
  const { register, handleSubmit, watch, reset, errors } = useForm({
    resolver: yupResolver(schemaValidate),
    defaultValues,
  });
  const musicName = watch('music_name');

  const [musics, setMusics] = useState<MusicProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [musicError, setMusicError] = useState('');
  const handleCreateUser = useCreateUser();
  const { user } = useSignUpContext();

  const handleAddMusic = useCallback((music: MusicProps) => {
    if (musics.some(m => m.music_name === music.music_name)) {
      setMusicError('Musica ja adicionada');
    } else {
      setMusics([...musics, music]);
      setMusicError('');
      reset();
    }
  }, [musics, reset]);

  const handleRemoveMusic = (music: MusicProps) => {
    setMusics(prevState => prevState.filter(m => m !== music));
  };

  const onSubmit = (userMusic: MusicProps) => {
    setIsLoading(true);
    handleCreateUser!({ ...user,
      userMusician: {
        ...user.userMusician,
        musics: [...musics, userMusic] },
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmitByMusicsList = (e: any) => {
    e.preventDefault();

    setIsLoading(true);
    handleCreateUser!({ ...user,
      userMusician: {
        ...user.userMusician,
        musics,
      },
    });
  };

  return (
    <S.Container>
      <S.Form
        onSubmit={!musicName && musics.length ? onSubmitByMusicsList : handleSubmit(onSubmit)}
      >
        <S.Header>
          <S.Label>Músicas</S.Label>
          {!!musicName && <Add title="Adicionar música" handleAdd={handleSubmit(handleAddMusic)} />}
        </S.Header>

        {!!musics.length && (
        <MusicList
          items={musics}
          error={musicError}
          handleRemoveItem={handleRemoveMusic}
        />
        )}

        <TextField
          ref={register}
          name="music_name"
          label="Nome da música"
          placeholder="Nome da música"
          error={errors.music_name?.message}
        />
        <TextField
          ref={register}
          name="duration_ms"
          label="Duração"
          placeholder="Duração"
          error={errors.duration_ms?.message}
        />
        <Button isLoading={isLoading} type="submit">FINALIZAR</Button>
      </S.Form>

      <S.HasAccount>
        <Link to={ROUTES.signUp.setLink('thirdStep')}>
          <FiArrowLeft color="#DEDEEA" size={22} />
          Voltar
        </Link>
      </S.HasAccount>
    </S.Container>
  );
};
