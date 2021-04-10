import { TextField } from 'components/form';
import { Add, Button } from 'components/structure';
// import { ShortMusicalItem } from 'components/contexts/music';
import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { MusicProps } from 'interfaces/music';
import { ROUTES } from 'constants/routes';
import { useCallback, useState } from 'react';
import { useCreateUser } from 'useCases/SignUp';
import { useSignUp } from 'contexts/SignUp';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import * as S from './FourthStep.styles';

const schemaValidate = Yup.object().shape({
  music_name: Yup.string().required('Nome obrigatorio'),
  duration_ms: Yup.string().required('Email obrigatorio'),
  album_name: Yup.string().required('Senha obrigatorio'),
  album_image: Yup.string().required('Nome obrigatorio'),
  artist_name: Yup.string().required('Nome obrigatorio'),
});

export const FourthStep = () => {
  const { register, handleSubmit, watch, reset, errors } = useForm({
    resolver: yupResolver(schemaValidate),
    defaultValues: {
      artist_name: '',
      music_name: '',
      duration_ms: '',
      album_name: '',
      album_image: '',
    },
  });
  const musicName = watch('music_name');

  const [musics, setMusics] = useState<MusicProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [musicError, setMusicError] = useState('');
  const handleCreateUser = useCreateUser();
  const { user } = useSignUp();

  const handleAddMusic = useCallback((music: MusicProps) => {
    if (musics.some(m => m.music_name === music.music_name)) {
      // setMusicError('Musica ja adicionada');
    } else {
      setMusics([...musics, music]);
      // setMusicError('');
    }

    reset();
  }, [musics, reset]);

  // const handleRemoveMusic = (music_name: string) => {
  //   setMusics(prevState =>
  //     prevState.filter(music => music.music_name !== music_name));
  // };

  const onSubmit = (userMusic: MusicProps) => {
    setIsLoading(true);
    const { userMusician } = user;

    handleCreateUser!({ ...user,
      userMusician: {
        bandsName: userMusician?.bandsName,
        instrument: userMusician?.instrument,
        musics: [...musics, userMusic] },
    });
  };

  const onSubmitByMusicsList = () => {
    setIsLoading(true);
    const { userMusician } = user;

    handleCreateUser!({ ...user,
      userMusician: { bandsName: userMusician?.bandsName,
        instrument: userMusician?.instrument,
        musics },
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

        {/* {!!musics.length && (
        <S.MusicList>
          <S.MusicWrap>
            {musics.map(music => (
              <ShortItemMusic
                {...music}
                handleRemoveMusic={() => handleRemoveMusic(music.music_name)}
              />
            ))}
          </S.MusicWrap>
          {!!musicError && <S.Error>{musicError}</S.Error>}
        </S.MusicList>
        )} */}

        <TextField
          register={register}
          name="music_name"
          label="Nome da música"
          placeholder="Nome da música"
          error={errors.music_name?.message}
        />
        <TextField
          register={register}
          name="duration_ms"
          label="Duração"
          placeholder="Duração"
          error={errors.duration_ms?.message}
        />
        <TextField
          register={register}
          name="artist_name"
          label="Nome do Artista"
          placeholder="Nome do Artista"
          error={errors.artist_name?.message}
        />
        <TextField
          register={register}
          name="album_name"
          label="Nome do Álbum"
          placeholder="Nome do Álbum"
          error={errors.album_name?.message}
        />
        <TextField
          register={register}
          name="album_image"
          label="Imagem do Álbum"
          placeholder="Imagem do Álbum"
          error={errors.album_image?.message}
        />

        <Button isLoading={isLoading} type="submit">FINALIZAR</Button>
      </S.Form>

      <S.HasAccount>
        <Link to={ROUTES.signUp.secondStep}>
          <FiArrowLeft color="#DEDEEA" size={22} />
          Voltar
        </Link>
      </S.HasAccount>
    </S.Container>
  );
};
