import styled from 'styled-components';
import { COLOR } from '../../styles/constants';

const Container = styled.button`
  background-color: ${COLOR.primaryPurple};
  color: #f5f5f5;
  border: 0;
  border-radius: 8px;
  padding: 16px 20px;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
`;

interface MenuItemProps {
  label: string;
  onClick: () => void;
}

function MenuItem(props: MenuItemProps) {
  return <Container onClick={props.onClick}>{props.label}</Container>;
}

export default MenuItem;
