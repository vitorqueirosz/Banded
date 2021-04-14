import * as Yup from 'yup';

export const schemaValidate = Yup.object().shape({
  instrument: Yup.string().required('Instrumento obrigatorio'),
  bandsName: Yup.string().required('Banda obrigatoria'),
  hasMusic: Yup.boolean(),
});

export const defaultValues = {
  instrument: '',
  bandsName: '',
  hasMusic: '',
};
