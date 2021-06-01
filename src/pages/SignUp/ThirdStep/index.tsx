import { useCallback, useState } from 'react';
import { Checkbox, TextField } from 'components/form';
import { Add, Button, Spinner } from 'components/structure';
import { FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { MusicProps, AlbumPayload, Image } from 'interfaces';
import { ROUTES } from 'constants/routes';
import { useCreateUser } from 'useCases/SignUp';
import { useSignUpContext } from 'contexts/SignUp';
import { yupResolver } from '@hookform/resolvers/yup';
import { FileHandler, MusicList } from 'components/contexts';
import { useTheme } from 'styled-components';
import { defaultValues, schemaValidate } from './ThirdStep.validation';
import * as S from './ThirdStep.styles';

export type AlbumProps = {
  previewImage?: string;
  checkImage?: string;
} & AlbumPayload;

type Album = {
  images?: Image;
  music?: MusicProps;
} & Omit<AlbumProps, 'musics'>;

export const ThirdStep = () => {
  const { colors } = useTheme();
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

  const handleAlbumMusicsPayload = useCallback((userAlbum: Album) => {
    const { music } = userAlbum;
    const mergedMusics = music?.music_name ? [...musics, music] : musics;

    const updatedUserAlbum = {
      ...userAlbum,
      musics: musics.length ? mergedMusics : music?.music_name ? [music] : [],
    };

    return updatedUserAlbum;
  }, [musics]);

  const handleAddAlbum = useCallback((album: Album) => {
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
        album_image: image!,
        checkImage: image?.name,
        album_name,
        year_release,
        previewImage,
        musics,
      };

      setAlbums([...albums, updatedAlbum]);
      setAlbumError('');
      setCurrentAlbumImage('');
      setMusics([]);
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
    navigate(ROUTES.signUp.setLink('fourthStep'));
  }, 2000), [navigate]);

  const onSubmit = useCallback((userAlbum: Album) => {
    const albumWithMusics = handleAlbumMusicsPayload(userAlbum);

    const { id,
      album_name,
      year_release,
      musics, images: { image } = {} } = albumWithMusics;

    const updatedUserAlbum = {
      id,
      album_image: image!,
      checkImage: image?.name,
      album_name,
      year_release,
      musics,
    };

    setIsLoading(true);
    handleCreateUser!({ ...user,
      userMusician: {
        ...user.userMusician,
        albums: [...albums, updatedUserAlbum],
      },
    });
  }, [albums, handleCreateUser, user, handleAlbumMusicsPayload]);

  const handleUserPayload = useCallback((userAlbum: Album) => {
    setIsReady(true);
    const albumWithMusics = handleAlbumMusicsPayload(userAlbum);

    const { id,
      album_name,
      year_release,
      musics,
      images: { image } = {} } = albumWithMusics;

    const updatedUserAlbum = { id,
      album_image: image!,
      checkImage: image?.name,
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmitByMusicsList = useCallback((e: any) => {
    e.preventDefault();
    setIsLoading(true);

    handleCreateUser!({ ...user,
      userMusician: {
        ...user.userMusician,
        albums,
      },
    });
  }, [albums, handleCreateUser, user]);

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
        onSubmit={!albumName && albums.length || user.userMusician?.albums?.length
          ? onSubmitByMusicsList : handleSubmit(onSubmit)}
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
          ref={register}
          name="album_name"
          label="Nome do album"
          placeholder="Nome do álbum "
          error={errors.album_name?.message}
        />
        <TextField
          ref={register}
          name="year_release"
          label="Ano de lançamento"
          placeholder="Ano de lançamento"
          error={errors.year_release?.message}
        />
        <FileHandler
          name="images"
          control={control}
          image={currentAlbumImage}
          handlePreviewImage={handlePreviewImage}
        />
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
          ref={register}
          name="music.music_name"
          label="Nome da música"
          placeholder="Nome da música"
          error={errors.music?.music_name?.message}
        />
        <TextField
          ref={register}
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
        <Link to={ROUTES.signUp.setLink('secondStep')}>
          <FiArrowLeft color={colors.light.lighter} size={22} />
          Voltar
        </Link>
      </S.HasAccount>
    </S.Container>
  );
};
