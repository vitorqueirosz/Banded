/* eslint-disable @typescript-eslint/no-explicit-any */
import { MusicalItem } from 'components/contexts/music';
import { Spinner, WrapperList } from 'components/structure';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import * as S from './UserMusicalList.styles';

type UserMusicalDataProps = {
  items: any[];
  show: boolean;
  callback: () => void;
  hasMore: boolean;
  isFetching: boolean;
}

export const UserMusicalData = ({
  show,
  items,
  callback,
  hasMore,
  isFetching,
}: UserMusicalDataProps) => {
  const elementRef = useInfiniteScroll(hasMore, callback);

  const setLastItemRef = (index: number, arrayLength: number) => (
    (index === arrayLength - 1 ? elementRef : null)
  );

  return (
    <S.Container>
      <WrapperList show={show}>
        {items.map((item: any, index) => (
          <MusicalItem
            ref={setLastItemRef(index, items.length)}
            key={item?.id ?? item}
            item={item}
          />
        ))}
        {isFetching && (
          <S.SpinnerWrapper>
            <Spinner />
          </S.SpinnerWrapper>
        )}
      </WrapperList>
    </S.Container>
  );
};
