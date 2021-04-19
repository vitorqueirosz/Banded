/* eslint-disable @typescript-eslint/no-explicit-any */
import { MusicalItem } from 'components/contexts/music';
import { WrapperList } from 'components/structure';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { ForwardedRef, forwardRef, RefObject } from 'react';
import * as S from './UserMusicalList.styles';

type UserMusicalDataProps = {
  items: any[];
  show: boolean;
}

export const UserMusicalData = forwardRef(
  ({ items, show }: UserMusicalDataProps,
    ref: ForwardedRef<HTMLDivElement>) => {
    // eslint-disable-next-line no-console
    useInfiniteScroll(ref as RefObject<HTMLDivElement>, () => console.log('test callback'));

    const setLastItemRef = (index: number, array: any[]) => (
      (array.length - 1 === index ? ref : null)
    );

    return (
      <S.Container>
        <WrapperList show={show}>
          {items.map((item: any, index) => (
            <MusicalItem key={item.id} item={item} ref={setLastItemRef(index, items)} />
          ))}
        </WrapperList>
      </S.Container>
    );
  },
);
