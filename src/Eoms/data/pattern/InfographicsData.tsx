import { Tooltip, Typography } from '@mui/material';
import img1 from '@images/infographics1.webp';
import img2 from '@images/infographics2.webp';
import img3 from '@images/infographics3.webp';
import img4 from '@images/infographics4.webp';
import img5 from '@images/infographics5.webp';
import img6 from '@images/infographics6.webp';
import img7 from '@images/infographics7.webp';
import img8 from '@images/infographics8.webp';
import img11Content from '@images/infographicsContent1_1.webp';
import img12Content from '@images/infographicsContent1_2.webp';
import img21Content from '@images/infographicsContent2_1.webp';
import img22Content from '@images/infographicsContent2_2.webp';
import img31Content from '@images/infographicsContent3_1.webp';
import img32Content from '@images/infographicsContent3_2.webp';
import img41Content from '@images/infographicsContent4_1.webp';
import img42Content from '@images/infographicsContent4_2.webp';
import img51Content from '@images/infographicsContent5_1.webp';
import img52Content from '@images/infographicsContent5_2.webp';
import img61Content from '@images/infographicsContent6_1.webp';
import img62Content from '@images/infographicsContent6_2.webp';
import img71Content from '@images/infographicsContent7_1.webp';
import img72Content from '@images/infographicsContent7_2.webp';
import img81Content from '@images/infographicsContent8_1.webp';
import img82Content from '@images/infographicsContent8_2.webp';
import { Slide } from '../../../types/infographicsTypes';

// <Tooltip title="" arrow placement="top" enterTouchDelay={0} leaveTouchDelay={5000}><span className='hint'></span></Tooltip>

const InfographicsData: Slide[] = [
  {
    title: '',
    previewImage: img1,
    imageContent: [
      {
        src: img11Content,
        alt: '',
        description: ''
      },
      {
        src: img12Content,
        alt: '',
        description: ''
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='body1' component="p" gutterBottom></Typography>
        </>
      )
    }

  },
  {
    title: '',
    previewImage: img2,
    imageContent: [
      {
        src: img21Content,
        alt: '',
        description: ''
      },
      {
        src: img22Content,
        alt: '',
        description: ''
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='body1' component="p" gutterBottom></Typography>
        </>
      )
    }

  },
  {
    title: '',
    previewImage: img3,
    imageContent: [
      {
        src: img31Content,
        alt: '',
        description: ''
      },
      {
        src: img32Content,
        alt: '',
        description: ''
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='body1' component="p" gutterBottom></Typography>
        </>
      )
    }

  },
  {
    title: '',
    previewImage: img4,
    imageContent: [
      {
        src: img41Content,
        alt: '',
        description: ''
      },
      {
        src: img42Content,
        alt: '',
        description: ''
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='body1' component="p" gutterBottom></Typography>
        </>
      )
    }

  },
  {
    title: '',
    previewImage: img5,
    imageContent: [
      {
        src: img51Content,
        alt: '',
        description: ''
      },
      {
        src: img52Content,
        alt: '',
        description: ''
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='body1' component="p" gutterBottom></Typography>
        </>
      )
    }

  },
  {
    title: '',
    previewImage: img6,
    imageContent: [
      {
        src: img61Content,
        alt: '',
        description: ''
      },
      {
        src: img62Content,
        alt: '',
        description: ''
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='body1' component="p" gutterBottom></Typography>
        </>
      )
    }

  },
  {
    title: '',
    previewImage: img7,
    imageContent: [
      {
        src: img71Content,
        alt: '',
        description: ''
      },
      {
        src: img72Content,
        alt: '',
        description: ''
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='body1' component="p" gutterBottom></Typography>
        </>
      )
    }

  },
  {
    title: '',
    previewImage: img8,
    imageContent: [
      {
        src: img81Content,
        alt: '',
        description: ''
      },
      {
        src: img82Content,
        alt: '',
        description: ''
      }
    ],
    content: () => {
      return (
        <>
          <Typography variant='body1' component="p" gutterBottom></Typography>
        </>
      )
    }

  },
];

InfographicsData.forEach((item, index) => {
  item.id = index;
});

export default InfographicsData;