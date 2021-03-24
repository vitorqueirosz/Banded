import { TextField } from 'components/form/TextField';
import { Add, Button } from 'components/structure';
import { ShortMusic, MusicProps } from 'components/contexts/music';
import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import routes from 'constants/routes';
import { useCallback, useState } from 'react';
import { useCreateUser } from 'useCases/SignUp';
import { useSignUp } from 'contexts/SignUp';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import * as S from './ThirdStep.styles';

const schemaValidate = Yup.object().shape({
  name: Yup.string().required('Nome obrigatorio'),
  email: Yup.string().email('Digite um e-mail valido').required('Email obrigatorio'),
  password: Yup.string().required('Senha obrigatorio'),
  city: Yup.string().required('Nome obrigatorio'),
});

export const ThirdStep = () => {
  const { register, handleSubmit, watch, reset } = useForm({
    resolver: yupResolver(schemaValidate),
    defaultValues: {
      music_name: '',
      duration_ms: '',
      album_name: '',
      album_image: '',
    },
  });
  const musicName = watch('music_name');

  const [musics, setMusics] = useState<MusicProps[]>([]);
  const [musicError, setMusicError] = useState('');
  const handleCreateUser = useCreateUser();
  const { user } = useSignUp();

  const handleAddMusic = useCallback((music: MusicProps) => {
    if (musics.some(m => m.music_name === music.music_name)) {
      setMusicError('Musica ja adicionada');
    } else {
      setMusics([...musics, music]);
      setMusicError('');
    }

    reset();
  }, [musics, reset]);

  const handleRemoveMusic = (music_name: string) => {
    setMusics(prevState =>
      prevState.filter(music => music.music_name !== music_name));
  };

  const onSubmit = (musics: MusicProps) => {
    if (handleCreateUser) {
      handleCreateUser({ ...user, ...[musics] });
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Header>
          <S.Label>Músicas</S.Label>
          {!!musicName && <Add title="Adicionar música" handleAdd={handleSubmit(handleAddMusic)} />}
        </S.Header>

        {!!musics.length && (
        <S.MusicList>
          <S.MusicWrap>
            {musics.map(music => (
              <ShortMusic
                {...music}
                handleRemoveMusic={() => handleRemoveMusic(music.music_name)}
              />
            ))}
          </S.MusicWrap>
          {!!musicError && <S.Error>{musicError}</S.Error>}
        </S.MusicList>
        )}

        <TextField
          register={register}
          name="music_name"
          label="Nome da música"
          placeholder="Nome da música"
        />
        <TextField
          register={register}
          name="duration_ms"
          label="Duração"
          placeholder="Duração"
        />
        <TextField
          register={register}
          name="artist_name"
          label="Nome do Artista"
          placeholder="Nome do Artista"
        />
        <TextField
          register={register}
          name="album_name"
          label="Nome do Álbum"
          placeholder="Nome do Álbum"
        />
        <TextField
          register={register}
          name="album_image"
          label="Imagem do Álbum"
          placeholder="Imagem do Álbum"
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
