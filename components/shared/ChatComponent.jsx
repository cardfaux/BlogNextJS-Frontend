import React from 'react';
import styled from 'styled-components';

const ChatComponent = () => {
  return (
    <>
      <StyledChatDiv>
        <StyledHeader>
          <StyledHeaderContainer>
            <StyledHeaderMessage>Chat Component</StyledHeaderMessage>
            <StyledCloseContainer>🦄</StyledCloseContainer>
          </StyledHeaderContainer>
        </StyledHeader>
        <StyledInputWrapper className='input-group'>
          <input type='text' className='form-control' placeholder='Message' aria-label='Message with two button addons' />
          <button className='btn btn-outline-secondary' type='button'>
            Send
          </button>
        </StyledInputWrapper>
      </StyledChatDiv>
    </>
  );
};

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
