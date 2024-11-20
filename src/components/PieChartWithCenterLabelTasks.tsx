import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';
import TasksState from '../store/TasksState';
import { useTheme } from '@mui/material';
import { MakeOptional } from '@mui/x-charts/internals';
import { PieValueType } from '@mui/x-charts';

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const PieChartWithCenterLabelTasks = observer(() => {

  const [store] = React.useState(TasksState);
  const theme = useTheme();

  const data = [
    { id: 0, value: store.getScored.slice(0, 5).reduce((acc, val) => acc + val.scored, 0), label: '1 уровень', color: theme.palette.primary.light },
    { id: 1, value: store.getScored.slice(5, 10).reduce((acc, val) => acc + val.scored, 0), label: '2 уровень', color: theme.palette.primary.primaryLight },
    { id: 2, value: store.getScored.slice(10, 15).reduce((acc, val) => acc + val.scored, 0), label: '3 уровень', color: theme.palette.primary.main },
    { id: 3, value: 300 - store.getTotalScore, color: 'white' }
  ];
  
  const size = {
    width: 400,
    height: 250,
  };

  const formatValue = (serie: MakeOptional<PieValueType, "id">) => {
    if (serie.id === 3) return '';
    const variants = [50, 100, 150];
    const maxScore = variants[serie.id as number];
    return serie.value + ' из ' + maxScore;
  };

  return (
    <PieChart sx={{ml: 'auto', mr: 'auto'}} series={[{ data, innerRadius: 50, valueFormatter: formatValue }]}
    margin={{ top: 40, bottom: 40, left: 40, right:40 }}
    slotProps={{ 
      legend: {
        direction: 'row',
        position: { vertical: 'bottom', horizontal: 'middle' },
        padding: 5,
      }
      }} {...size}>
      <PieCenterLabel>{Math.round((store.getTotalScore / 300) * 100)} %</PieCenterLabel>
    </PieChart>
  );
});

export default PieChartWithCenterLabelTasks;