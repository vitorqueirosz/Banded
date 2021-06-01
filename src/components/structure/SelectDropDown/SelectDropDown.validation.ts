import * as Yup from 'yup';

export const schemaValidate = Yup.object().shape({
  name: Yup.string().required('Música obrigatória'),
  instrument: Yup.string().required('Duração obrigatória'),
});

export const defaultValues = {
  name: '',
  instrument: '',
};
