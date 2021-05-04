import { forwardRef } from 'react';
import { getLocalHourFromDate, removeSecondsFromTime } from 'utils/date';
import * as S from './Message.styles';

export type MessageProps = {
  isReceived: boolean;
  message: string;
  time: Date;
}

export const Message = forwardRef<HTMLDivElement, MessageProps>(
  ({ isReceived, message, time }, ref) => (
    <S.Wrapper isReceived={isReceived} ref={ref}>
      <S.MessageWrapper>
        <S.Message>{message}</S.Message>
        <S.MessageTime>
          {removeSecondsFromTime(
            getLocalHourFromDate(time.toISOString()),
          )}
        </S.MessageTime>
      </S.MessageWrapper>
    </S.Wrapper>
  ),
);
