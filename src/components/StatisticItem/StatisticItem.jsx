import { Label, Listyle, Percentage } from './StatisticItem.styled';

function StatisticItem({ label, percentage }) {
  return (
    <Listyle className="item">
      <Label className="label">{label}</Label>
      <Percentage className="percentage">{percentage}%</Percentage>
    </Listyle>
  );
}

export default StatisticItem;
