import * as Yup from 'yup';

export const schemaValidate = Yup.object().shape({
  music_name: Yup.string().required('Música obrigatória'),
  duration_ms: Yup.string().required('Duração obrigatória'),
});

export const defaultValues = {
  music_name: '',
  duration_ms: '',
};
