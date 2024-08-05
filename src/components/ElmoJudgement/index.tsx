import Styled from './index.styles';

type ElmoJudgementProps = {
  nameList: string[];
};

function ElmoJudgement(props: ElmoJudgementProps) {
  const { nameList } = props;
  return (
    <Styled.Container>
      <Styled.NameListContainer>
        <p>당신은 약속을 소중히 하지 않았지!!! </p>
        {nameList &&
          nameList.map((name, index) => (
            <Styled.NameTag key={index}>{name}</Styled.NameTag>
          ))}
      </Styled.NameListContainer>
      <Styled.BackgroundImage src="/elmosang.gif" alt="" />
    </Styled.Container>
  );
}

export default ElmoJudgement;
