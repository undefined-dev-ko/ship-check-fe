import React from 'react';
import Styled from './index.styles';
import data from './participants.json';

interface ParticipantProps {
  name: string;
  email: string;
}

function Participant(props: ParticipantProps) {
  return (
    <div>
      {props.name} {props.email}
    </div>
  );
}

function Footer() {
  const leader = data.find((e) => e.role === 'leader');
  const members = data.filter((e) => e.role !== 'leader');

  return (
    <Styled.Container>
      <Styled.Footer>
        <div className="left-container">
          <Styled.Title>소모임 “입장바꿔 생각해"와 함께해요</Styled.Title>

          <Styled.Participants>
            <div className="bold">참여</div>
            <div>
              <div className="participant-container">
                <div className="bold">모임장</div>

                <div className="participant">
                  <Participant {...leader} />
                </div>
              </div>

              <div className="participant-container">
                <div className="bold">모임원</div>

                <div className="participant">
                  {members.map((member) => (
                    <Participant {...member} />
                  ))}
                </div>
              </div>
            </div>
          </Styled.Participants>
        </div>

        <Styled.CopyRight>
          Copyright 2023. 입장바꿔 생각해. All rights reserved.
        </Styled.CopyRight>
      </Styled.Footer>
    </Styled.Container>
  );
}

export default Footer;
