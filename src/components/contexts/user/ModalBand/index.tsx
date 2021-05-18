import { memo, useCallback, useState } from 'react';
import { TextField, CustomSelect } from 'components/form';
import { MultiSelectField } from 'components/form/MultiSelectField';
import { Add, Button, Form, FormGroup, Title } from 'components/structure';
import { useDebounce, useFetch } from 'hooks';
import { useForm } from 'react-hook-form';
import { Genre } from 'pages/Search';
import { GENRES } from 'constants/endpoints';
import { useUserMusicians } from 'useCases';

import { FileHandler } from 'components/contexts/signUp';
import * as S from './ModalBand.styles';

export type ModalBandProps = {
  handleCloseModal: () => void;
}

export const ModalBand = memo(({ handleCloseModal }: ModalBandProps) => {
  const { register, errors, control, handleSubmit, watch } = useForm();
  const members = watch('members');

  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const { data: genres } = useFetch<Genre[]>(GENRES.BASE);
  const { data: users, isLoading } = useUserMusicians({ name });

  const handleUsersByName = useDebounce((value: string) => setName(value), 500);

  const handlePreviewImage = useCallback((value: string) => setImage(value), []);

  const onSubmit = () => {
    handleCloseModal();
  };

  return (
    <S.Container>
      <Title>Monte sua banda</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <TextField
            name="name"
            ref={register}
            label="Nome"
            placeholder="Nome da banda"
            error={errors.email?.message}
          />
          <TextField
            name="city"
            ref={register}
            label="Cidade"
            placeholder="Cidade"
            error={errors.email?.message}
          />
          <FileHandler
            control={control}
            image={image}
            handlePreviewImage={handlePreviewImage}
          />
          <CustomSelect
            ref={register}
            onType={members}
            onChange={({ target: { value } }) => handleUsersByName(value)}
            placeholder="Pesquise os membros"
            error={errors.genres?.message}
            options={users ?? []}
            isLoading={isLoading}
          />
          <MultiSelectField
            name="genres"
            control={control}
            label="Gênero"
            placeholder="Gênero"
            error={errors.genres?.message}
            options={genres ?? []}
          />
        </FormGroup>

        <Add title="Adicionar banda" handleAdd={() => undefined} />

        <Button type="submit">Salvar</Button>
      </Form>
    </S.Container>
  );
});
