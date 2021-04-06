import { WrapperList } from 'components/structure';
import { MusicTabs } from 'constants/enums';
import { useBands, useMusicians } from 'useCases/feed';
import { MusicalItem } from '../Music';

type MusicalListProps = {
  city: string;
  activeTab: MusicTabs;
}

export const MusicalList = ({ city, activeTab }: MusicalListProps) => {
  const bands = useBands({
    city: '',
  });
  const musicians = useMusicians({
    city,
  });

  return (
    <>
      <WrapperList show={activeTab === MusicTabs.Band}>
        {bands.data?.map(band => (
          <MusicalItem key={band.id} item={band} />
        ))}
      </WrapperList>

      <WrapperList show={activeTab === MusicTabs.Musicians}>
        {musicians.data?.map(musician => (
          <MusicalItem key={musician.id} item={musician} />
        ))}
      </WrapperList>
    </>
  );
};
