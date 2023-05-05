import styled from "styled-components";

export const StatisticItemWrap = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 200px;
  height: 20px;
  padding: 10px;
  background-color: ${({ color }) =>color};
  border: 1px solid gray;
  border-radius: 1px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
 
`;