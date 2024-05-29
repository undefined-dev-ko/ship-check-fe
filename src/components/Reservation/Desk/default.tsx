import Styled from './index.styles';
import { Item } from '../../../types';

function Default({
  isPassed = false,
  isHovering,
  handleMouseOver,
  handleMouseOut,
  onReserveButtonClick,
  items = [],
}: {
  isPassed?: boolean;
  isHovering: boolean;
  handleMouseOver: () => void;
  handleMouseOut: () => void;
  items?: Item[];
  onReserveButtonClick: () => void;
}) {
  if (isPassed) {
    return <Styled.Container className="default"></Styled.Container>;
  }

  return (
    <Styled.Container
      className="default"
      isHovering={isHovering}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onReserveButtonClick}
    >
      {isHovering && (
        <>
          <p className="text">자리 예약하기</p>

          <Styled.ToolTip>
            <img src="/info_icon.svg" alt="info" />

            <div className="tooltiptext">
              {items.length
                ? items.map((item, index) => (
                    <p key={index}>- {convertItems(item)}</p>
                  ))
                : 'No Item'}
            </div>
          </Styled.ToolTip>
        </>
      )}
    </Styled.Container>
  );
}

const convertItems = (item: Item): string => {
  switch (item.category) {
    case 'monitor':
      return '모니터';
    case 'arm':
      return '모니터 암';
    case 'charger':
      return 'PD 충전기';
  }
};

export default Default;
