import { Seat } from '../../types';
import Styled from './index.styles';

function EmptySeatItem({
  seat,
  isReserveUI,
  onClick,
}: {
  seat: Seat | undefined;
  isReserveUI: boolean;
  onClick: () => void;
}) {
  return (
    <Styled.EmptySeatItem isReserveUI={isReserveUI} onClick={onClick}>
      {isReserveUI ? (
        <span className="reserve">예약하기</span>
      ) : (
        <span className="desk-no">{seat.deskNo}</span>
      )}
    </Styled.EmptySeatItem>
  );
}

export default EmptySeatItem;
