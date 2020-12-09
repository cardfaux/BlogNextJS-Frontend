import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const ChatComponent = (props) => {
  const [flipped, set] = useState(false);
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 1,
    // transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg) translateX(${flipped ? 100 : 0}%)`,
    transform: `translateX(${flipped ? 100 : 0}%)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <>
      <AnimatedChatBox style={{ opacity, transform: transform.interpolate((t) => `${t} rotateX(0deg) translateX(0%)`) }}>
        <StyledHeader>
          <StyledHeaderContainer>
            <StyledHeaderMessage>Chat Component</StyledHeaderMessage>
            <StyledCloseContainer onClick={() => set((state) => !state)}>🦄</StyledCloseContainer>
          </StyledHeaderContainer>
        </StyledHeader>
        <StyledInputWrapper className='input-group'>
          <input type='text' className='form-control' placeholder='Message' aria-label='Message with two button addons' />
          <AnimatedButton style={springProps} className='btn btn-outline-secondary' type='button'>
            Send
          </AnimatedButton>
        </StyledInputWrapper>
      </AnimatedChatBox>
    </>
  );
};

const AnimatedButton = styled(animated.button)`
  color: purple;
`;

const AnimatedChatBox = styled(animated.div)`
  position: absolute;
  top: calc(100% - 300px);
  right: 0;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(60, 60, 60, 1);
`;

const StyledChatDiv = styled.section`
  position: absolute;
  top: calc(100% - 300px);
  right: 0;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(60, 60, 60, 1);
`;
const StyledHeader = styled.header`
  background-color: rgba(0, 123, 255, 1);
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
`;

const StyledHeaderMessage = styled.p`
  padding: 0 70px;
  font-size: 20px;
  color: white;
`;

const StyledCloseContainer = styled.div`
  margin-right: 8px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledInputWrapper = styled.div`
  position: absolute !important;
  bottom: 0;
  button {
    background-color: rgba(0, 123, 255, 1);
    color: white;
  }
`;

export default ChatComponent;
