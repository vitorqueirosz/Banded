import { useCallback, useRef, useState } from 'react';
import Cropper from 'react-easy-crop';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Area } from 'react-easy-crop/types';
import { getImageCropped } from 'utils/getImageCropped';
import { useUpdateAvatar } from 'useCases';
import { Avatar } from 'components/structure';
import { FiCamera, FiCheck } from 'react-icons/fi';
import * as S from './CropPhoto.styles';

type CropPhotoProps = {
  avatar?: string;
  instrument?: string;
  handleCloseModal: () => void;
}

export const CropPhoto = ({ avatar, instrument, handleCloseModal }: CropPhotoProps) => {
  const { handleAvatarMutate, isPending } = useUpdateAvatar();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [image, setImage] = useState('');
  const [croppedImage, setCroppedImage] = useState<File | undefined>();

  const inputFileRef = useRef<HTMLInputElement>(null);
  const getImage = () => inputFileRef.current?.click();

  const onCropComplete = useCallback(async (_, croppedAreaPixels: Area) => {
    const cropImage = await getImageCropped(image ?? avatar, croppedAreaPixels);
    const fileImageCropped = new File(
      [cropImage],
      'image-cropped.jpeg',
    );

    setCroppedImage(fileImageCropped);
  }, [image, avatar]);

  const onChange = (file: FileList) => {
    const image = file.item(0);
    const previewImage = URL.createObjectURL(image);
    setImage(previewImage);
  };

  const handleUpdateAvatar = (croppedImage: File) => {
    handleAvatarMutate(croppedImage);
    handleCloseModal();
  };

  return (
    <S.Wrapper>
      {avatar ?? image ? (
        <Cropper
          image={image || avatar}
          crop={crop}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          cropShape="round"
        />
      ) : (
        <S.Content>
          <Avatar hasBackground size="large" instrument={instrument} />
        </S.Content>
      )}

      <S.Divisor>
        <S.InputFile onClick={getImage}>
          <FiCamera size={22} color="#fff" />
          <input
            type="file"
            accept="image/*"
            ref={inputFileRef}
            onChange={({ target: { files } }) => files && onChange(files)}
          />
        </S.InputFile>
        <button
          type="button"
          disabled={isPending}
          onClick={() => handleUpdateAvatar(croppedImage!)}
        >
          <FiCheck size={25} color="#fff" />
        </button>
      </S.Divisor>

      <Slider
        min={1}
        max={10}
        step={0.1}
        onChange={(zoom) => setZoom(zoom)}
      />
    </S.Wrapper>
  );
};
