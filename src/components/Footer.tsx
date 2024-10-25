import { Box, Grid, Typography } from "@mui/material";
import wrapper from "../assets/images/professionalitet.svg";
import agriculture from "../assets/images/agriculture.svg";
import atomic from "../assets/images/atomic.svg";
import industry from "../assets/images/industry.svg";
import mech from "../assets/images/mech.svg";
import metallurgy from "../assets/images/metallurgy.svg";
import mining from "../assets/images/mining.svg";
import railway from "../assets/images/railway.svg";
import chemical from "../assets/images/chemical.svg";
import year from "../assets/images/2024.svg";
import { useEffect, useState } from "react";
import MainData from "../Eoms/data/1/MainData";

interface logoImage {
  id: number;
  src: string;
  scale: 1,
  posY: number;
  posX: number;
}

const images: logoImage[] = [
  {
    id: 1,
    src: agriculture,
    scale: 1,
    posY: 23,
    posX: 41
  },
  {

    id: 2,
    src: railway,
    scale: 1,
    posY: 42,
    posX: 22
  },
  {

    id: 3,
    src: atomic,
    scale: 1,
    posY: 65,
    posX: 23
  },
  {

    id: 4,
    src: mining,
    scale: 1,
    posY: 81,
    posX: 42
  },
  {

    id: 5,
    src: industry,
    scale: 1,
    posY: 81,
    posX: 23
  },
  {

    id: 6,
    src: chemical,
    scale: 1,
    posY: 65,
    posX: 7
  },
  {

    id: 7,
    src: metallurgy,
    scale: 1,
    posY: 42,
    posX: 5
  },
  {

    id: 8,
    src: mech,
    scale: 1,
    posY: 23,
    posX: 22
  },
];

function Footer() {

  const [visibleImages, setVisibleImages] = useState<logoImage[]>(images);
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % visibleImages.length);
    }, 100);

    return () => clearInterval(interval);
  }, [visibleImages.length]);

  return (
    <Grid container sx={{ position: 'relative', mt: 'auto', pt: 2, pb: 5 }}>
      <Grid item xs={12} md={3} px={2} pt={2}>
      </Grid>
      <Grid item xs={12} md={9} px={2} pt={2} sx={{ textAlign: { xs: 'left' } }}>
        <Box sx={{
          pl: 2,
          display: 'inline-block',
          textAlign: 'left',
          verticalAlign: 'top',
          mr: 3
        }}>
          <Typography variant='body1' component="p" gutterBottom sx={{
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            fontWeight: '800',
            color: 'primary.main'
          }}>{MainData.fgos.title()}</Typography>
          <Typography variant='body1' component="p" gutterBottom sx={{
            color: '#3E3E3E'
          }}>{MainData.fgos.name()}</Typography>
        </Box>
        <Box sx={{
          pl: { xs: 2, sm: 3 },
          mt: {xs: 1, sm: 0},
          display: 'inline-block',
          textAlign: 'left',
          verticalAlign: 'top',
          width: {
            xs: 'min-content',
            sm: 'auto'
          }
        }}>
          <Typography variant='body1' component="p" gutterBottom sx={{
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            fontWeight: '800',
            color: 'primary.main'
          }}>{MainData.mdk.title()}</Typography>
          <Typography variant='body1' component="p" gutterBottom sx={{
            color: '#3E3E3E'
          }}>{MainData.mdk.name()}</Typography>
        </Box>
        <Box sx={{
          position: 'relative',
          width: 'fit-content',
          height: 'fit-content',
          display: 'inline-block',
          float: { xs: 'none', md: 'right' },
          ml: { xs: 'calc((100vw - 10rem) / 2 - 16px)', md: 6 },
          mr: 5.5,
          mt: { xs: 2, md: 0 }
        }}>
          <img src={wrapper} alt="Animation wrapper" style={{ width: '10rem' }} />
          {visibleImages.map((img, i) => (
            <img
              key={i}
              src={img.src}
              className="item"
              style={{
                top: img.posY + '%',
                right: i > 3 ? 'auto' : img.posX + '%',
                left: i < 4 ? 'auto' : img.posX + '%',
                transform: `scale(${currentImage === i ? 1.3 : 1})`,
                transition: "transform 0.5s ease"
              }}
            />
          ))}
          <img
            src={year}
            className="item"
            style={{
              top: '50%',
              right: '50%',
              width: '1.5rem',
              height: 'auto'
            }}
          />
        </Box>
      </Grid>
      <Box sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100vh',
        display: {
          xs: 'none',
          md: 'flex'
        },
        alignItems: 'center'
      }}>
        <Typography variant='h6' component="p" gutterBottom sx={{
          textTransform: 'uppercase',
          writingMode: 'vertical-lr',
          color: '#3e3e3e',
          px: 1
        }}>ЦИФРОВОЙ ОБРАЗОВАТЕЛЬНЫЙ КОНТЕНТ</Typography>
      </Box>
    </Grid>
  )
}

export default Footer