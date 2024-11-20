import img1 from '@images/video1.webp';
import img2 from '@images/video2.webp';
import img3 from '@images/video3.webp';
import img4 from '@images/video4.webp';
import img5 from '@images/video5.webp';
import video1 from '@videos/video1.mp4';
import video2 from '@videos/video2.mp4';
import video3 from '@videos/video3.mp4';
import video4 from '@videos/video4.mp4';
import video5 from '@videos/video5.mp4';
import { Video } from '../../../types/animationTypes';

const AnimationData: Video[] = [
  {
    title: '',
    previewImage: img1,
    videoContent: video1
  },
  {
    title: '',
    previewImage: img2,
    videoContent: video2
  },
  {
    title: '',
    previewImage: img3,
    videoContent: video3
  },
  {
    title: '',
    previewImage: img4,
    videoContent: video4
  },
  {
    title: '',
    previewImage: img5,
    videoContent: video5
  }
];

AnimationData.forEach((item, index) => {
  item.id = index;
});

export default AnimationData;