import ChartBar from './ChartBar';
import './Chart.css';
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((datapoint) => datapoint.value);
  const totalmaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalmaximum}
        />
      ))}
    </div>
  );
};
export default Chart;
