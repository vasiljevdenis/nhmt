import { Tooltip, Typography } from '@mui/material';
import img1 from '@images/infographics1.webp';
import img11Content from '@images/infographicsContent1_1.webp';
import img12Content from '@images/infographicsContent1_2.webp';
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
];

InfographicsData.forEach((item, index) => {
  item.id = index;
});

export default InfographicsData;