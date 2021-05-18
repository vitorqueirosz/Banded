import { memo, useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UsersMusician } from 'useCases';
import { Add } from '../Add';
import { OptionsDropDown } from '../OptionsDropDown';
import * as S from './SelectDropDown.styles';

type SelectDropDownProps = {
  title: string;
  options: UsersMusician[];
  isLoading?: boolean;
}

export const SelectDropDown = memo(({ title, options, isLoading }: SelectDropDownProps) => {
  const { register } = useForm();
  const [showDropdown, setShowDropdown] = useState(false);
  const [loadedOptions, setLoadedOptions] = useState<UsersMusician[]>([]);

  const handleDropDown = useCallback(() =>
    setShowDropdown(prevState => !prevState), []);

  useEffect(() => {
    if (!isLoading) {
      setLoadedOptions(options);
    }
  }, [options, isLoading]);

  return (
    <S.Container>
      {!showDropdown && (
        <OptionsDropDown
          handleDropDown={handleDropDown}
          options={loadedOptions}
        />
      )}

      {showDropdown && (
        <>
          <Add
            title={title}
            handleClose={handleDropDown}
            hasClose
          />
          <S.Input
            name="name"
            placeholder="Nome do membro"
            ref={register}
          />
          <S.Input
            name="instrument"
            placeholder="Instrumento"
            ref={register}
          />
          <S.AddButton>Adicionar</S.AddButton>
        </>
      )}
    </S.Container>
  );
});
