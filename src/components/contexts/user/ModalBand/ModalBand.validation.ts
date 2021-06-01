import * as Yup from 'yup';

export const initialSchema = {
  name: Yup.string().required('Nome obrigatório'),
  city: Yup.string().required('Cidade obrigatória'),
  image: Yup.object().shape({
    image: Yup.mixed(),
    previewImage: Yup.string(),
  }),
  genres: Yup.array()
    .of(
      Yup.object().shape({
        value: Yup.string(),
        label: Yup.string(),
      }),
    )
    .min(1)
    .required('Genero obrigatório'),
  members: Yup.string(),
};

export const defaultSchema = Yup.object().shape({
  ...initialSchema,
});

export const schemaWithAlbums = Yup.object().shape({
  ...initialSchema,
  album: Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    genre: Yup.string().required('Genero obrigatória'),
    year_release: Yup.string().required('Ano obrigatório'),
  }),
});

export const schemaWithMusic = Yup.object().shape({
  ...initialSchema,
  music: Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    duration: Yup.string().required('Duracao obrigatória'),
    genre: Yup.string().required('Genero obrigatória'),
  }),
});

export const schemaWithAlbumAndMusic = Yup.object().shape({
  ...initialSchema,
  album: Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    genre: Yup.string().required('Cidade obrigatória'),
    year_release: Yup.string().required('Ano obrigatória'),
  }),
  music: Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    duration: Yup.string().required('Cidade obrigatória'),
    genre: Yup.string().required('Cidade obrigatória'),
  }),
});

export const defaultValues = {
  name: '',
  city: '',
  image: {
    image: {},
    previewImage: '',
  },
  genres: [],
  members: '',
  album: {
    image: {
      image: ('' as unknown) as File,
      previewImage: '',
    },
    name: '',
    year_release: '',
    music: {
      name: '',
      duration: '',
    },
  },
  music: {
    name: '',
    duration: '',
  },
};
