import { TextField } from 'components/form';
import { SelectDropDown } from 'components/structure';
import { forwardRef, InputHTMLAttributes } from 'react';
import { UsersMusician } from 'useCases';

import * as S from './CustomSelect.styles';

export type CustomSelectProps = {
  error: string;
  options: UsersMusician[];
  onType: string;
  isLoading?: boolean;
} & InputHTMLAttributes<HTMLInputElement>

export const CustomSelect = forwardRef<
  HTMLInputElement,
  CustomSelectProps>(
    ({ error, onChange, onType, options, isLoading }, ref) => (
      <S.Container>
        <TextField
          name="members"
          ref={ref}
          onChange={onChange}
          label="Membros"
          placeholder="Pesquise os membros"
          autoComplete="off"
          error={error}
        />
        {/* aqui */}

        {onType && (
        <SelectDropDown
          options={options}
          title="Adicionar membro"
          isLoading={isLoading}
        />
        )}
      </S.Container>
    ),
  );
