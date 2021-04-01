import { MusicTabs } from 'constants/enums';
import { useFetch } from 'hooks/useFetch';
import { useState } from 'react';
import { UserFetchProps } from 'components/contexts/routes';
import { MusicalList } from 'components/contexts/music';
import { USERS } from 'constants/endpoints';
import { Title } from 'components/structure';
import * as S from './Home.styles';

export const Home = () => {
  const [activeTab, setActiveTab] = useState<MusicTabs>(MusicTabs.Band);
  const { data } = useFetch<UserFetchProps>(USERS.BASE);

  if (!data) {
    return <span>Loading...</span>;
  }

  return (
    <S.Wrapper>
      <Title>Hall musical</Title>

      <S.OptionsContainer>
        <S.Option
          activeTab={activeTab === MusicTabs.Band && MusicTabs.Band}
          onClick={() => setActiveTab(MusicTabs.Band)}
        >
          Bandas
        </S.Option>
        <S.Option
          activeTab={activeTab === MusicTabs.Musicians && MusicTabs.Musicians}
          onClick={() => setActiveTab(MusicTabs.Musicians)}
        >
          Musicos
        </S.Option>
      </S.OptionsContainer>

      <MusicalList city={data.user.city} activeTab={activeTab} />
    </S.Wrapper>
  );
};
