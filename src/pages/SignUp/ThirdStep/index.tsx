import { useCallback, useState } from 'react';
import { Checkbox, TextField } from 'components/form';
import { Add, Button, Spinner } from 'components/structure';
import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { MusicProps, Album } from 'interfaces';
import { ROUTES } from 'constants/routes';
import { useCreateUser } from 'useCases/SignUp';
import { useSignUpContext } from 'contexts/SignUp';
import { yupResolver } from '@hookform/resolvers/yup';
import FileField from 'components/form/FileField';
import { MusicList } from 'components/contexts';
import { defaultValues, schemaValidate } from './ThirdStep.validation';
import * as S from './ThirdStep.styles';

export type AlbumProps = {
  previewImage?: string;
} & Album;

type AlbumPayload = {
  images?: {
    previewImage?: string;
    image: string;
  };
  music?: MusicProps;
} & Omit<AlbumProps, 'musics'>;

export const ThirdStep = () => {
  const { register, handleSubmit, watch, reset, errors, control, getValues } = useForm({
    resolver: yupResolver(schemaValidate),
    defaultValues,
  });

  const { user, setUser } = useSignUpContext();

  const [musics, setMusics] = useState<MusicProps[]>([]);
  const [musicError, setMusicError] = useState('');
  const [albumError, setAlbumError] = useState('');
  const [albums, setAlbums] = useState<AlbumProps[]>([]);
  const [currentAlbumImage, setCurrentAlbumImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const musicName = watch('music.music_name');
  const albumName = watch('album_name');

  const handleCreateUser = useCreateUser();
  const navigate = useNavigate();

  const handleAlbumMusicsPayload = useCallback((userAlbum: AlbumPayload) => {
    const currentMusic = userAlbum.music!;
    const mergedMusics = [...musics, currentMusic];

    const updatedUserAlbum = {
      ...userAlbum,
      musics: currentMusic.music_name && musics.length ? mergedMusics : [currentMusic],
    };

    return updatedUserAlbum;
  }, [musics]);

  const handleAddAlbum = useCallback((album: AlbumPayload) => {
    if (albums.some(a => a.album_name === album.album_name)) {
      setAlbumError('Album ja adicionado');
    } else {
      const albumWithMusics = handleAlbumMusicsPayload(album);

      const { id,
        album_name,
        year_release,
        musics, images: { image, previewImage } = {} } = albumWithMusics;

      const updatedAlbum = {
        id,
        album_image: image,
        album_name,
        year_release,
        previewImage,
        musics,
      };

      setAlbums([...albums, updatedAlbum]);
      setAlbumError('');
      setCurrentAlbumImage('');
      setMusics([]);
      setCurrentAlbumImage('');
      reset({ ...defaultValues });
    }
  }, [albums, reset, handleAlbumMusicsPayload]);

  const handleAddMusic = useCallback((music: MusicProps) => {
    if (!musics.some(m => m.music_name === music.music_name)) {
      reset({ ...getValues(), music: defaultValues.music });
      setMusicError('');
      return setMusics([...musics, music]);
    }

    return setMusicError('Musica ja adicionada');
  }, [musics, reset, getValues]);

  const handleRemoveMusic = (music: MusicProps) => {
    setMusics(prevState =>
      prevState.filter(m => m !== music));
  };

  const handleRemoveAlbum = (album: AlbumProps) => {
    setAlbums(prevState =>
      prevState.filter(a => a !== album));
  };

  const setTimeOutAndNavigate = useCallback(() => setTimeout(() => {
    setIsReady(false);
    navigate('/sign-up/fourth-step');
  }, 2000), [navigate]);

  const onSubmit = useCallback((userAlbum: AlbumPayload) => {
    const albumWithMusics = handleAlbumMusicsPayload(userAlbum);

    const { id,
      album_name,
      year_release,
      musics, images: { image } = {} } = albumWithMusics;

    const updatedUserAlbum = { id,
      album_image: image,
      album_name,
      year_release,
      musics };

    setIsLoading(true);
      handleCreateUser!({ ...user,
        userMusician: {
          ...user.userMusician,
          albums: [...albums, updatedUserAlbum],
        },
      });
  }, [albums, handleCreateUser, handleAlbumMusicsPayload, user]);

  const handleUserPayload = useCallback((userAlbum: Album) => {
    setIsReady(true);
    const albumWithMusics = handleAlbumMusicsPayload(userAlbum);

    const { id,
      album_name,
      year_release,
      musics,
      images: { image } = {} } = albumWithMusics;

    const updatedUserAlbum = { id,
      album_image: image,
      album_name,
      year_release,
      musics };

    setUser(prevState => ({
      ...prevState,
      userMusician: {
        ...user.userMusician,
        albums: [...albums, updatedUserAlbum],
      },
    }));
    setTimeOutAndNavigate();
  }, [albums, setUser, user.userMusician, setTimeOutAndNavigate, handleAlbumMusicsPayload]);

  const onSubmitByMusicsList = () => {
    setIsLoading(true);
    handleCreateUser!({ ...user,
      userMusician: { ...user.userMusician,
        albums,
      },
    });
  };

  const handlePreviewImage = useCallback((image: string) =>
    setCurrentAlbumImage(image), []);

  const handleUserWithoutPayload = useCallback(() => {
    setIsReady(true);
    setUser(prevState => ({ ...prevState,
      userMusician: {
        bandsName: user.userMusician?.bandsName,
        instrument: user.userMusician?.instrument,
        albums,
      },
    }));
    setTimeOutAndNavigate();
  }, [
    albums,
    setUser,
    user.userMusician?.bandsName,
    user.userMusician?.instrument,
    setTimeOutAndNavigate,
  ]);

  const handleCheckState = () => {
    if (albumName) {
      return handleSubmit(handleUserPayload)();
    }
    return handleUserWithoutPayload();
  };

  return (
    <S.Container>
      <S.Form
        onSubmit={!albumName && albums.length ? onSubmitByMusicsList : handleSubmit(onSubmit)}
      >
        <S.Header>
          <S.Label>Álbuns</S.Label>
          {!!albumName && (
            <Add
              title="Adicionar álbum"
              handleAdd={handleSubmit(handleAddAlbum)}
            />
          )}
        </S.Header>

        {!!albums.length && (
        <MusicList
          items={albums}
          handleRemoveItem={handleRemoveAlbum}
          error={albumError}
        />
        )}
        <TextField
          register={register}
          name="album_name"
          label="Nome do album"
          placeholder="Nome do álbum "
          error={errors.album_name?.message}
        />
        <TextField
          register={register}
          name="year_release"
          label="Ano de lançamento"
          placeholder="Ano de lançamento"
          error={errors.year_release?.message}
        />
        <S.Divisor hasImage={!!currentAlbumImage}>
          <S.AlbumImage src={currentAlbumImage} alt="AlbumImage" />
          <FileField
            control={control}
            name="images"
            handlePreviewImage={handlePreviewImage}
          />
        </S.Divisor>
        <S.Header>
          <S.Label>Músicas do álbum</S.Label>
          {!!musicName && (
            <Add
              title="Adicionar música"
              handleAdd={handleSubmit(({ music }) => handleAddMusic(music))}
            />
          )}
        </S.Header>
        {!!musics.length && (
        <MusicList
          items={musics}
          handleRemoveItem={handleRemoveMusic}
          error={musicError}
        />
        )}
        <TextField
          register={register}
          name="music.music_name"
          label="Nome da música"
          placeholder="Nome da música"
          error={errors.music?.music_name?.message}
        />
        <TextField
          register={register}
          name="music.duration_ms"
          label="Duração da música"
          placeholder="Duração da música"
          error={errors.music?.duration_ms?.message}
        />
        <Checkbox
          register={register}
          name="hasMusic"
          label="Tem músicas independentes?"
          onChange={handleCheckState}
        />

        {isReady && <Spinner size={24} />}
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
