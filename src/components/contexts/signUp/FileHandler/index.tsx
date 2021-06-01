import { FileField } from 'components/form';
import { UseFormMethods } from 'react-hook-form';
import * as S from './FileHandler.styles';

type FileHandlerProps = & Pick<UseFormMethods, 'control'> & {
  image: string;
  handlePreviewImage: (value: string) => void;
  name: string;
}

export const FileHandler = ({ image, control, handlePreviewImage, name }: FileHandlerProps) => (
  <S.Divisor hasImage={!!image}>
    <S.AlbumImage src={image} alt="AlbumImage" />
    <FileField
      control={control}
      name={name}
      handlePreviewImage={handlePreviewImage}
    />
  </S.Divisor>
);
