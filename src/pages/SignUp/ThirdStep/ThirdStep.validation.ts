import * as Yup from 'yup';

export const schemaValidate = Yup.object().shape({
  music: Yup.object({
    // music_name: Yup.string().required('Música obrigatória'),
    // duration_ms: Yup.string().required('Duração obrigatória'),
  }).required('Música obrigatorio'),
  album_name: Yup.string().required('Nome do álbum obrigatório'),
  year_release: Yup.string().required('Ano obrigatório'),
});

export const defaultValues = {
  year_release: '',
  music: {
    music_name: '',
    duration_ms: '',
  },
  album_name: '',
  album_image: '',
};
