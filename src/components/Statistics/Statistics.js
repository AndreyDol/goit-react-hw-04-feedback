import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import { StatisticItem } from './StaticticItem';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return total === 0 ? (
    <Notification  message="There is no feedback"></Notification>
  ) : (
    <div style={{ margin: '15px' }}>
      <StatisticItem title={'Good'} value={good} color={'#00FF7F'} />
      <StatisticItem title={'Neutral'} value={neutral} color={'#87CEFA'} />
      <StatisticItem title={'Bad'} value={bad} color={'#FF4500'} />
      <StatisticItem title={'Total'} value={total} color={'#E0FFFF'} />
      <StatisticItem
        title={'Positive feedback'}
        value={positivePercentage + '%'}
        color={'#00FFFF'}
      />
    </div>
  );
};

Statistics.protoType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
