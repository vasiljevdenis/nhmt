import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';
import TrainingState from '../store/TrainingState';
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

const PieChartWithCenterLabelTraining = observer(() => {

  const [store] = React.useState(TrainingState);
  const theme = useTheme();

  const data = [
    { id: 0, value: store.getTotalScore, label: 'Всего баллов', color: theme.palette.primary.main },
    { id: 3, value: 100 - store.getTotalScore, color: 'white' }
  ];
  
  const size = {
    width: 400,
    height: 250,
  };

  const formatValue = (serie: MakeOptional<PieValueType, "id">) => {
    if (serie.id === 3) return '';
    const variants = [100];
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
      <PieCenterLabel>{Math.round((store.getTotalScore / 100) * 100)} %</PieCenterLabel>
    </PieChart>
  );
});

export default PieChartWithCenterLabelTraining;