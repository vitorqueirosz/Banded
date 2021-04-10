import { InputHTMLAttributes, useRef } from 'react';
import { useController, UseFormMethods } from 'react-hook-form';
import * as S from './FileField.styles';

type FileField = & Pick<UseFormMethods, 'control'> & {
  name: string;
  handlePreviewImage: (file: string) => void;
} & InputHTMLAttributes<HTMLInputElement>

const FileField = ({
  name,
  control,
  handlePreviewImage,
  ...rest
}:FileField) => {
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
    <S.Container onClick={handleChooseImage}>
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

export default FileField;
