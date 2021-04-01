import { MusicTabs } from 'constants/enums';
import { useBands, useMusicians } from 'useCases/feed';
import { MusicalItem } from '../Music';

import * as S from './Musical.styles';

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
      <S.Container show={activeTab === MusicTabs.Band}>
        {bands.data?.map(band => (
          <MusicalItem key={band.id} item={band} />
        ))}
      </S.Container>

      <S.Container show={activeTab === MusicTabs.Musicians}>
        {musicians.data?.map(musician => (
          <MusicalItem key={musician.id} item={musician} />
        ))}
      </S.Container>

    </>
  );
};
