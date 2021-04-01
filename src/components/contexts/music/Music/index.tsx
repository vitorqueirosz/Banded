import { BandResponse, MusicianResponse } from 'useCases/feed';
import { FiDisc, FiMusic, FiUsers } from 'react-icons/fi';
import { Avatar } from 'components/structure';
import { Discover } from '../Discover';
import * as S from './Music.styles';

type MusicalItem = Partial<BandResponse> & Partial<MusicianResponse>;

export type MusicalItemProps = {
  item: MusicalItem;
  type?: 'normal' | 'band' | 'user';
};

export const MusicalItem = ({
  item: {
    image,
    name,
    city,
    albums,
    genres,
    musics, instrument, bands, members },
  type = 'normal',
}: MusicalItemProps) => {
  const genresJoined = genres?.map(g => g.name).join(', ');

  return (
    <S.Wrapper type={type}>
      <Avatar src={image || ''} instrument={instrument} hasBackground={!image} />

      <S.InfoContainer>

        <S.Infos>
          <S.Divisor>
            <S.Title>{name}</S.Title>
            <span>{city}</span>
          </S.Divisor>

          <S.Divisor>
            <S.GenreTitle>{instrument ? 'ins' : 'Gêneros'}</S.GenreTitle>
            <S.Genres>{genresJoined || instrument}</S.Genres>
          </S.Divisor>
        </S.Infos>

        <S.Discovery>
          {members ? (
            <Discover
              icon={FiUsers}
              title="Membros"
              amount={members}
            />
          ) : (
            <Discover
              icon={FiDisc}
              title="Bandas"
              amount={bands}
            />
          )}
          <Discover
            icon={FiDisc}
            title="Álbuns"
            amount={albums}
          />
          <Discover
            icon={FiMusic}
            title="Músicas"
            amount={musics}
          />
        </S.Discovery>

      </S.InfoContainer>
    </S.Wrapper>
  );
};
