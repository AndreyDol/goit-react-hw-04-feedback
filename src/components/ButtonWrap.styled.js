import styled from 'styled-components';

export const ButtonWrap = styled.div`
  display: flex;
  gap:10px;
`;


export const ButtonHover = styled.button`
  width: 70px;
  height: 40px;
  padding: 15px;
  background-color: #afeeee;
  border: 0px solid gray;
  border-radius: 1px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: ${({ option }) => {
  if (option === 'good') return '#00FF7F';
  if (option === 'neutral') return '#87CEFA';
  if (option === 'bad') return '#FF4500';
  return '#00ffff';
    }};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    color: green;
  }
`;