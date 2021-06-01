import { ShortMusicalItem } from 'components/contexts/music';
import { ItemList } from 'components/structure/ItemList';

type MusicItemListProps = {
  error: string;
  items: [];
  handleRemoveItem: (value: unknown) => void;
}

export const MusicItemList = ({ items, error, handleRemoveItem }: MusicItemListProps) => {
  if (!items.length) {
    return <></>;
  }
  return (
    items.length && (
      <ItemList error={error}>
        {items.map(({ name, previewImage, music_name }, index) => (
          <ShortMusicalItem
            key={name ?? music_name}
            name={name ?? music_name}
            previewImage={previewImage}
            handleRemoveItem={() => handleRemoveItem(items[index])}
          />
        ))}
      </ItemList>
    )
  );
};
