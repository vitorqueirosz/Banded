import { useController, UseFormMethods } from 'react-hook-form';
import Select from 'react-select';
import * as S from './Select.styles';

export type Option = {
  id?: string;
  name?: string;
  value: string;
  label: string;
}

type SelectProps = Pick<UseFormMethods, 'control'> & {
  label?: string;
  options: Option[];
  name: string;
  placeholder?: string;
  onChange?: (value: Option) => void;
  isLoading?: boolean;
};

export const SelectField = ({
  options,
  name,
  control,
  onChange,
  placeholder,
  label,
  isLoading,
  ...rest
}: SelectProps) => {
  const { field: { ref, value, onChange: onFieldChange } } = useController({
    control,
    name,
  });

  const handleChange = (value: Option) => {
    onChange && onChange(value);
    onFieldChange(value);
  };

  return (
    <S.Wrapper>
      <Select
        classNamePrefix="selectField"
        inputRef={ref}
        options={options}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(value) => value && handleChange(value)}
        isLoading={isLoading}
        isDisabled={isLoading}
        {...rest}
      />
      {!!label && <S.Label show={!!value} htmlFor={name}>{label}</S.Label>}
    </S.Wrapper>
  );
};
