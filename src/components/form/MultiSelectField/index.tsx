import { Error } from 'components/structure';
import { useController, UseFormMethods } from 'react-hook-form';
import Select, { components, OptionsType } from 'react-select';
import { MultiValueGenericProps } from 'react-select/src/components/MultiValue';
import * as S from './MultiSelect.styles';

export type MultiOption = {
  id?: string;
  name?: string;
  value: string;
  label: string;
}

type MultiSelectProps = Pick<UseFormMethods, 'control'> & {
  label?: string;
  options: MultiOption[];
  error?: string | undefined;
  name: string;
  placeholder?: string;
  onChange?: (value: OptionsType<MultiOption>) => void;
  isLoading?: boolean;
  inputSize?: boolean;
};

export const MultiSelectField = ({
  options,
  name,
  control,
  onChange,
  placeholder,
  label,
  isLoading,
  inputSize,
  error,
  ...rest
}: MultiSelectProps) => {
  const { field: { ref, value, onChange: onFieldChange } } = useController({
    control,
    name,
  });

  const handleChange = (value: OptionsType<MultiOption>) => {
    onChange && onChange(value);
    onFieldChange(value);
  };

  const MultiValueContainer = (props: MultiValueGenericProps<MultiOption>) => (
    <div>
      <components.MultiValueContainer {...props} />
    </div>
  );

  return (
    <S.Wrapper inputSize={inputSize}>
      <Select
        components={{ MultiValueContainer }}
        classNamePrefix="selectField"
        inputRef={ref}
        options={options}
        name={name}
        placeholder={placeholder}
        onChange={(value) => value && handleChange(value)}
        isLoading={isLoading}
        isDisabled={isLoading}
        isMulti
        {...rest}
      />
      {!!label && <S.Label show={!!value} htmlFor={name}>{label}</S.Label>}
      {!!error && <Error>{error}</Error>}
    </S.Wrapper>
  );
};
