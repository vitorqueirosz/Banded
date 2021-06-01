import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { TextField, CustomSelect, SelectField } from 'components/form';
import { MultiSelectField } from 'components/form/MultiSelectField';
import { Add, Button, Form, FormGroup, Title, SubTitle, ShortTitle } from 'components/structure';
import { useDebounce, useFetch } from 'hooks';
import { FieldError, useForm } from 'react-hook-form';
import { GENRES } from 'constants/endpoints';
import { useCreateBand, useUserMusicians } from 'useCases';
import { FileHandler, MusicItemList } from 'components/contexts';
import { useMembersContext } from 'contexts';
import { yupResolver } from '@hookform/resolvers/yup';
import { ModalBandFormModel, Genre, AlbumOnBand, AlbumMusic } from 'interfaces';
import { FiXCircle } from 'react-icons/fi';
import { defaultValues, defaultSchema, schemaWithAlbums, schemaWithMusic, schemaWithAlbumAndMusic } from './ModalBand.validation';
import * as S from './ModalBand.styles';

export type ModalBandProps = {
  handleCloseModal: () => void;
}

type AlbumBand = Omit<AlbumOnBand, 'genre'> & {
  genre: string;
};

type MusicBand = Omit<AlbumMusic, 'genre'> & {
  genre: string;
};

export const ModalBand = memo(({ handleCloseModal }: ModalBandProps) => {
  const { setMembers, reset: onReset, setReset, selectedMembers } = useMembersContext();
  const { handleCreateBand } = useCreateBand();

  const [albums, setAlbums] = useState<AlbumBand[]>([]);
  const [musics, setMusics] = useState<MusicBand[]>([]);
  const [hasAlbum, setHasAlbum] = useState(false);
  const [hasMusic, setHasMusic] = useState(false);

  const schemaValidate = !hasAlbum && !hasMusic ? defaultSchema : (
    hasAlbum && hasMusic ? schemaWithAlbumAndMusic : (
      hasAlbum && !hasMusic ? schemaWithAlbums : schemaWithMusic
    )
  );

  const {
    register,
    errors,
    control,
    handleSubmit,
    watch,
    reset,
    getValues,
    setError,
    clearErrors,
  } = useForm<ModalBandFormModel>({
    resolver: yupResolver(schemaValidate),
    defaultValues,
  });

  const albumRef = useRef<HTMLDivElement>(null);
  const musicRef = useRef<HTMLDivElement>(null);

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [albumImage, setAlbumImage] = useState('');
  const [albumMusics, setAlbumMusics] = useState<AlbumMusic[]>([]);
  const [albumError, setAlbumError] = useState('');
  const [albumMusicError, setAlbumMusicError] = useState('');
  const [musicError, setMusicError] = useState('');

  const members = watch('members');
  const album = watch('album.name');
  const albumMusic = watch('album.music.music_name');
  const music = watch('music.name');

  const { data: genres } = useFetch<Genre[]>(GENRES.BASE);
  const { data: users, isLoading } = useUserMusicians({ name });

  const handleUsersByName = useDebounce((value: string) => setName(value), 500);
  const handlePreviewBandImage = useCallback((value: string) => setImage(value), []);
  const handlePreviewAlbumImage = useCallback((value: string) => setAlbumImage(value), []);

  const handleAddAlbumMusic = handleSubmit(({ album: { music } }) => {
    if (albumMusics.some(({ name }) => name === music.name)) {
      setAlbumMusicError('Musica ja adicionada!');
    } else {
      reset({
        ...getValues(),
        album: {
          ...getValues().album,
          music: defaultValues.album.music,
        },
      });
      setAlbumMusics(prevState => [...prevState, music]);
    }
  });

  const handleErrorsValidate = (value: AlbumOnBand | AlbumMusic, keyValue: 'album' | 'music') =>
    Object.entries(value).map(([key, value]) => {
      if (!value) {
        setError(`${keyValue}.${key}`, {
          message: 'Campo obrigatorio',
        });
      }
      return value;
    });

  const handleAddAlbum = handleSubmit(({ album }) => {
    const errorsValidate = handleErrorsValidate(album, 'album');
    if (errorsValidate.includes(undefined ?? '')) return;

    if (albums.some(({ name }) => name === album.name)) {
      setAlbumError('Album ja adicionado!');
    } else {
      reset({
        ...getValues(),
        album: {
          ...defaultValues.album,
          genre: null as unknown as undefined,
        },
      });
      const albumWithPreviewImage = {
        ...album,
        genre: album.genre.value,
        previewImage: album.image.previewImage,
        checkImage: album.image.image.name,
        musics: albumMusics,
      };
      setAlbumMusics([]);
      setAlbumError('');
      setAlbumImage('');
      setAlbums(prevState => [...prevState, albumWithPreviewImage]);
    }
  });

  const handleAddMusic = handleSubmit(({ music }) => {
    const errorsValidate = handleErrorsValidate(music, 'music');
    if (errorsValidate.includes(undefined ?? '')) return;

    if (musics.some(({ name }) => name === music.name)) {
      setMusicError('Musica ja adicionada!');
    } else {
      reset({
        ...getValues(),
        music: defaultValues.music,
      });
    }
    const musicResponse = {
      ...music,
      genre: music.genre.value,
    };

    setMusics(prevState => [...prevState, musicResponse]);
    setAlbumImage('');
  });

  const handleRemoveAlbum = (album: unknown) => {
    setAlbums(prevState => prevState.filter(m => m !== album));
  };

  const handleRemoveMusic = (music: unknown) => {
    setMusics(prevState => prevState.filter(m => m !== music));
  };

  const handleRemoveAlbumMusic = (music: unknown) => {
    setAlbumMusics(prevState => prevState.filter(m => m !== music));
  };

  const onSubmit = handleSubmit((data) => {
    const { image } = data.image;

    const albumMusicValidate = !albumMusic ? albumMusics : [...albumMusics, data.album.music];

    const albumWithCheckImage = {
      ...data.album,
      checkImage: data.album.image.image.name,
      musics: albumMusicValidate,
    };

    const albumsValidate = !album ? albums : [...albums, albumWithCheckImage];
    const musicsValidate = !music ? musics : [...musics, data.music];

    const payload = {
      ...data,
      genres: data.genres.map(genre => genre.value),
      image,
      bandImage: image.name,
      albums: albumsValidate,
      musics: musicsValidate,
      members: selectedMembers,
    } as unknown as ModalBandFormModel;

    handleCreateBand(payload);
    handleCloseModal();
  });

  useEffect(() => {
    if (!isLoading) {
      setMembers(users ?? []);
    }
  }, [users, isLoading, setMembers]);

  useEffect(() => {
    if (onReset) {
      reset({
        ...getValues(),
        members: defaultValues.members,
      });
      setReset(false);
    }
  }, [onReset, setReset, getValues, reset]);

  useEffect(() => {
    if (hasMusic && musicRef.current) {
      musicRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hasMusic]);

  useEffect(() => {
    if (hasAlbum && albumRef.current) {
      albumRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hasAlbum]);

  return (
    <S.Container hasAlbum={hasAlbum || hasMusic}>
      <Title>Monte sua banda</Title>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <TextField
            name="name"
            ref={register}
            label="Nome"
            placeholder="Nome do banda"
            error={errors.name?.message}
          />
          <TextField
            name="city"
            ref={register}
            label="Cidade"
            placeholder="Cidade"
            error={errors.city?.message}
          />
          <FileHandler
            name="image"
            control={control}
            image={image}
            handlePreviewImage={handlePreviewBandImage}
          />
          <MultiSelectField
            name="genres"
            control={control}
            label="Gênero"
            placeholder="Selecione os gênero(s)"
            error={errors.genres?.message}
            options={genres ?? []}
          />
          <CustomSelect
            ref={register}
            onType={members}
            onChange={({ target: { value } }) => handleUsersByName(value)}
            placeholder="Pesquise os membros"
          />
        </FormGroup>

        {!hasAlbum && (
        <Add
          title="Adicionar álbum"
          handleAdd={() => {
            clearErrors('album');
            setHasAlbum(true);
          }}
          hasMargin
        />
        )}

        <S.HideContent ref={albumRef} show={hasAlbum}>
          <SubTitle>Álbum</SubTitle>
          <FiXCircle
            color="#fff"
            size={18}
            onClick={() => setHasAlbum(false)}
          />
          <Add
            title="Adicionar álbum"
            handleAdd={handleAddAlbum}
          />
          <MusicItemList
            items={albums as []}
            handleRemoveItem={handleRemoveAlbum}
            error={albumError}
          />
          <FormGroup>
            <TextField
              name="album.name"
              ref={register}
              label="Nome do álbum"
              placeholder="Nome do álbum"
              error={errors.album?.name?.message}
            />
            <SelectField
              name="album.genre"
              control={control}
              label="Gênero"
              placeholder="Selecione um gênero"
              error={(errors.album?.genre as FieldError)?.message}
              options={genres ?? []}
            />
            <FileHandler
              name="album.image"
              control={control}
              image={albumImage}
              handlePreviewImage={handlePreviewAlbumImage}
            />
            <TextField
              name="album.year_release"
              ref={register}
              label="Ano de lançamento"
              placeholder="Ano de lançamento"
              error={errors.album?.year_release?.message}
            />
          </FormGroup>
          <S.MusicHeader>
            <ShortTitle>Músicas do álbum</ShortTitle>
            <Add title="Adicionar música" handleAdd={handleAddAlbumMusic} />
          </S.MusicHeader>
          <MusicItemList
            items={albumMusics as []}
            handleRemoveItem={handleRemoveAlbumMusic}
            error={albumMusicError}
          />
          <FormGroup>
            <TextField
              name="album.music.name"
              ref={register}
              label="Nome da música"
              placeholder="Nome da música"
              error={errors.album?.music?.name?.message}
            />
            <TextField
              name="album.music.duration"
              ref={register}
              label="Duração"
              placeholder="Duração"
              error={errors.album?.music?.duration?.message}
            />
          </FormGroup>
        </S.HideContent>

        {!hasMusic && (
          <Add
            title="Adicionar música"
            handleAdd={() => {
              clearErrors('music');
              setHasMusic(true);
            }}
            hasMargin
          />
        )}

        <S.HideContent ref={musicRef} show={hasMusic}>
          <SubTitle>Músicas independentes</SubTitle>
          <FiXCircle
            color="#fff"
            size={18}
            onClick={() => setHasMusic(prevState => !prevState)}
          />
          <Add
            title="Adicionar musica"
            handleAdd={handleAddMusic}
          />
          <MusicItemList
            items={musics as []}
            handleRemoveItem={handleRemoveMusic}
            error={musicError}
          />
          <FormGroup>
            <TextField
              name="music.name"
              ref={register}
              label="Nome da música"
              placeholder="Nome da música"
              error={errors.music?.name?.message}
            />
            <SelectField
              name="music.genre"
              control={control}
              label="Gênero"
              placeholder="Selecione um gênero"
              error={(errors.music?.genre as FieldError)?.message}
              options={genres ?? []}

            />
            <TextField
              name="music.duration"
              ref={register}
              label="Duração"
              placeholder="Duração"
              error={errors.music?.duration?.message}
            />
          </FormGroup>
        </S.HideContent>
        <Button type="submit">Salvar</Button>
      </Form>
    </S.Container>
  );
});
