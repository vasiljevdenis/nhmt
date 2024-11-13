import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';
import GameState from '../store/GameState';
import { useTheme } from '@mui/material';

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

const PieChartWithCenterLabel = observer(() => {

  const [store] = React.useState(GameState);
  const theme = useTheme();

  const data = [
    { value: 50, label: '1 уровень', color: theme.palette.primary.light },
    { value: 100, label: '2 уровень', color: theme.palette.primary.primaryLight },
    { value: 150, label: '3 уровень', color: theme.palette.primary.main }
  ];
  
  const size = {
    width: 400,
    height: 200,
  };

  return (
    <PieChart sx={{ml: 'auto', mr: 'auto'}} series={[{ data, innerRadius: 50 }]} {...size}>
      <PieCenterLabel>46%</PieCenterLabel>
    </PieChart>
  );
});

export default PieChartWithCenterLabel;