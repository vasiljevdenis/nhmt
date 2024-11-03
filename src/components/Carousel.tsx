import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, IconButton, Typography } from "@mui/material";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import FullscreenIcon from '@mui/icons-material/Fullscreen';

interface SliderImages {
  src: string;
  alt: string;
  description: string;
}

interface SliderProps {
  arrows: boolean;
  dots: boolean;
  autoplay: boolean;
  loading: "lazy" | "eager" | undefined;
  zoom: boolean;
  items: SliderImages[];
}

const Carousel = (props: SliderProps) => {

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: props.arrows,
    dots: props.dots,
    infinite: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    variableWidth: false,
    variableHeight: true,
    speed: 500,
    autoplay: props.autoplay,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    className: "innerSlider",
    afterChange: (index: number) => { setCurrentIndex(index) }
  };

  const [slider, setSlider] = useState<SliderImages[]>(props.items);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const galleryRef = useRef(null);

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  useEffect(() => {
    if (galleryRef.current && fullscreen) {
      galleryRef.current.toggleFullScreen();
      galleryRef.current.slideToIndex(currentIndex);
    }
  }, [fullscreen])

  return (
    <>
      <Slider {...settings}>
        {slider.map((item, i) => (
          <Box key={'slider-item' + i}>
            <img
              src={`${item.src}`}
              alt={'Slider item ' + i}
              style={{ width: '100%' }}
              loading={props.loading}
            />
            <Typography variant="body1" component="div" fontWeight={600} textAlign={'center'}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Slider>
      <IconButton aria-label="fullscreen" onClick={toggleFullscreen} sx={{
        backgroundColor: 'primary.main',
        "&:hover": {
          backgroundColor: 'primary.main',
          opacity: '.9'
        },
        position: 'absolute',
        top: 21,
        right: 21
      }}>
        <FullscreenIcon sx={{ color: 'white' }} />
      </IconButton>
      {fullscreen && (
        <ImageGallery
          ref={galleryRef}
          items={slider.map(el => {
            return {
              original: el.src,
              originalAlt: el.alt,
              thumbnail: el.src,
              thumbnailAlt: el.alt,
              description: el.description
            }
          })}
          showPlayButton={false}
          autoPlay={false}
          onScreenChange={(f) => !f && toggleFullscreen()}
        />
      )}
    </>
  )
};

Carousel.defaultProps = {
  arrows: true,
  dots: false,
  autoplay: false,
  loading: 'lazy',
  zoom: false
};

export default Carousel;