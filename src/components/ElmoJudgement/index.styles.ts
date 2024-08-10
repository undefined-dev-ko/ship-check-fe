import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 310px;
  object-fit: fill;
  border-radius: 24px;
`;

const NameListContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  box-sizing: border-box;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  color: #ffffff;
`;

const NameTag = styled.div`
  font-size: 30px;
  color: yellow;
`;

export default {
  Container,
  BackgroundImage,
  NameListContainer,
  NameTag,
};
