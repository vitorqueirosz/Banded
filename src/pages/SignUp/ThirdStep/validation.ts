import * as Yup from 'yup';

export const schemaValidate = Yup.object().shape({
  music: Yup.object().required('Nome obrigatorio'),
  album_name: Yup.string().required('Senha obrigatorio'),
  images: Yup.object().required('Nome obrigatorio'),
  year_release: Yup.string().required('Nome obrigatorio'),
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
