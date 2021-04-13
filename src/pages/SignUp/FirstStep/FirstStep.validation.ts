import * as Yup from 'yup';

export const schemaValidation = Yup.object().shape({
  name: Yup.string().required('Nome obrigatorio'),
  email: Yup.string().required('Email obrigatorio').email('Digite um e-mail valido'),
  password: Yup.string().required('Senha obrigatorio').min(6, 'Mínimo 6 caracteres'),
  city: Yup.string().required('Cidade obrigatoria'),
});

export const defaultValues = {
  name: '',
  email: '',
  password: '',
  city: '',
};
