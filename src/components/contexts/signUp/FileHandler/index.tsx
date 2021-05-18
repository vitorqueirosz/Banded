import { FileField } from 'components/form';
import { UseFormMethods } from 'react-hook-form';
import * as S from './FileHandler.styles';

type FileHandlerProps = & Pick<UseFormMethods, 'control'> & {
  image: string;
  handlePreviewImage: (value: string) => void;
}

export const FileHandler = ({ image, control, handlePreviewImage }: FileHandlerProps) => (

  <S.Divisor hasImage={!!image}>
    <S.AlbumImage src={image} alt="AlbumImage" />
    <FileField
      control={control}
      name="images"
      handlePreviewImage={handlePreviewImage}
    />
  </S.Divisor>
);
