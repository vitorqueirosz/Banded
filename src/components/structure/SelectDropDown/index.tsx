import { useMembersContext } from 'contexts';
import { memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { UsersMusician } from 'useCases';
import { v4 as uuid } from 'uuid';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from 'components/form';
import { Add } from '../Add';
import { OptionsDropDown } from '../OptionsDropDown';
import { schemaValidate, defaultValues } from './SelectDropDown.validation';

import * as S from './SelectDropDown.styles';

type SelectDropDownProps = {
  title: string;
}

type FormModel = UsersMusician;

export const SelectDropDown = memo(({ title }: SelectDropDownProps) => {
  const { setSelectedMembers, setShowDropdown, showDropdown } = useMembersContext();
  const { register, handleSubmit } = useForm<FormModel>({
    resolver: yupResolver(schemaValidate),
    defaultValues,
  });

  const handleDropDown = useCallback(() =>
    setShowDropdown(prevState => !prevState), [setShowDropdown]);

  const onSubmit = (data: FormModel) => {
    const dataWithId = {
      ...data,
      id: uuid(),
    };
    setSelectedMembers(prevState => [...prevState, dataWithId]);
  };

  return (
    <S.Container>
      {!showDropdown && (
        <OptionsDropDown
          handleDropDown={handleDropDown}
        />
      )}

      {showDropdown && (
      <S.Form>
        <Add
          title={title}
          handleClose={handleDropDown}
          hasClose
        />
        <TextField
          id="name"
          ref={register}
          name="name"
          placeholder="Nome do membro"
          autoComplete="off"
        />
        <TextField
          id="instrument"
          ref={register}
          name="instrument"
          placeholder="Instrumento"
          autoComplete="off"
        />
        <S.AddButton
          type="button"
          onClick={handleSubmit(onSubmit)}
        >
          Adicionar
        </S.AddButton>
      </S.Form>
      )}
    </S.Container>
  );
});
