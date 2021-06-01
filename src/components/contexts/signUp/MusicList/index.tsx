/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import { ShortMusicalItem } from 'components/contexts/music';
import { ItemList } from 'components/structure/ItemList';

type MusicListProps = {
  items: any[];
  error: string;
  handleRemoveItem: (item: any) => void;
}

export const MusicList = ({ items, error, handleRemoveItem }: MusicListProps) => (
  <ItemList error={error}>
    {items.map(({ album_name, music_name, previewImage }, index) => (
      <ShortMusicalItem
        name={album_name ?? music_name}
        previewImage={previewImage}
        key={`musicalItem-${index}`}
        handleRemoveItem={() => handleRemoveItem(items[index])}
      />
    ))}
  </ItemList>
);
