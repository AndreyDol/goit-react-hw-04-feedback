
import { StatisticItemWrap } from "./Statistics.styled";

export const StatisticItem = ({ title, value, color }) => {
  return (
    <StatisticItemWrap color={color}>
      <p>{title}: </p>
      <p>{value}</p>
    </StatisticItemWrap>
  );
};