import { InputHTMLAttributes, useRef } from 'react';
import { useController, UseFormMethods } from 'react-hook-form';
import * as S from './FileField.styles';

export type FileFieldProps = & Pick<UseFormMethods, 'control'> & {
  name: string;
  handlePreviewImage: (file: string) => void;
  inputSize?: 'small' | 'normal';
} & InputHTMLAttributes<HTMLInputElement>

export const FileField = ({
  name,
  control,
  handlePreviewImage,
  inputSize = 'normal',
  ...rest
}: FileFieldProps) => {
  const { field: { onChange: onInputChange } } = useController({
    control,
    name,
  });

  const fileInput = useRef<HTMLInputElement>(null);

  const onChange = (file: FileList) => {
    const image = file.item(0);
    const previewImage = URL.createObjectURL(image);
    handlePreviewImage(previewImage);
    onInputChange({ image, previewImage });
  };

  const handleChooseImage = () => {
    if (fileInput.current) {
      fileInput.current.value = '';
      fileInput.current.click();
    }
  };

  return (
    <S.Container size={inputSize} onClick={handleChooseImage}>
      <input
        name={name}
        ref={fileInput}
        accept="image/*"
        type="file"
        onChange={({ target: { files } }) => files && onChange(files)}
        {...rest}
      />
      <span>Selecione uma imagem</span>
    </S.Container>
  );
};
