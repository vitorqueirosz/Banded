import { useController, UseFormMethods } from 'react-hook-form';
import Select from 'react-select';
import * as S from './Select.styles';

type Option = {
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
  onChange?: (value: string) => void;
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
}: SelectProps) => {
  const { field: { ref, value, onChange: onFieldChange } } = useController({
    control,
    name,
  });

  const handleChange = ({ value }: Option) => {
    if (onChange) {
      onChange(value);
      return onFieldChange(value);
    }
    return onFieldChange(value);
  };

  return (
    <S.Wrapper>
      <Select
        classNamePrefix="selectField"
        inputRef={ref}
        options={options}
        name={name}
        placeholder={placeholder}
        value={options.find(({ value: optValue }) => optValue === value)}
        onChange={(value) => value && handleChange(value)}
        isLoading={isLoading}
        isDisabled={isLoading}
      />
      {!!label && <S.Label show={!!value} htmlFor={name}>{label}</S.Label>}
    </S.Wrapper>
  );
};
