import img1 from '@images/laboratory-item1.webp';
import img2 from '@images/laboratory-item2.webp';
import img3 from '@images/laboratory-item3.webp';
import img4 from '@images/laboratory-item4.webp';
import img5 from '@images/laboratory-item5.webp';
import img6 from '@images/laboratory-item6.webp';
import img7 from '@images/laboratory-item7.webp';
import img8 from '@images/laboratory-item8.webp';
import img9 from '@images/laboratory-item9.webp';
import imgres from '@images/laboratory-result.webp';
import imglabDesk from '@images/laboratory-desk.webp';
import { LaboratoryType } from '../../../types/laboratoryTypes';
import { Typography } from '@mui/material';

const LaboratoryData: LaboratoryType = {
  title: '',
  labDesk: imglabDesk,
  goal: '',
  tasks: () => {
    return (
      <>
        <ul>
          <li></li>
        </ul>
      </>
    )
  },
  theory: () => {
    return (
      <>
        <Typography variant='body1' component="p" gutterBottom></Typography>
        <Typography variant='body1' component="p" gutterBottom></Typography>
      </>
    )
  },
  experiments: [
    {
      text: '',
      resultFormula: [''],
      resultImage: imgres,
      resultImageTop: 55,
      resultImageLeft: 57,
      resultTop: 55,
      resultLeft: 35
    }
  ],
  equipment: [
    {
      type: 'reagent',
      name: '',
      formula: '',
      thumb: img1,
      count: 1,
      top: 75,
      left: 31,
      width: 8,
      zIndex: 4
    }
  ],
  steps: [
    {
      id: 1,
      text: () => {
        return (
          <>
            <Typography variant='body1' component="p" gutterBottom>Расположите на рабочем столе все оборудование и реактивы. Для этого нажмите на нужный элемент</Typography>
          </>
        )
      }
    },
    {
      id: 2,
      text: () => {
        return (
          <>
            <Typography variant='body1' component="p" gutterBottom>Нажмите Выполнить для смешения реактивов и получения результата</Typography>
          </>
        )
      }
    },
    {
      id: 3,
      text: () => {
        return (
          <>
            <Typography variant='body1' component="p" gutterBottom></Typography>
          </>
        )
      }
    },
    {
      id: 4,
      text: () => {
        return (
          <>
            <Typography variant='body1' component="p" gutterBottom></Typography>            
          </>
        )
      }
    },
  ]
}

export default LaboratoryData;