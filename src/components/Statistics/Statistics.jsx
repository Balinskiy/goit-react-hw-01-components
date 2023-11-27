import { StatisticTitle, StatisticsList, Section } from './Statistics.styled';
import StatisticItem from 'components/StatisticItem/StatisticItem';
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {stats.length !== 0 &&
          stats.map(({ id, label, percentage }) => (
            <StatisticItem key={id} label={label} percentage={percentage} />
          ))}
      </StatisticsList>
    </Section>
  );
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
