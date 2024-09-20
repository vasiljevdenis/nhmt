import { Box, Grid, Typography } from "@mui/material";
import wrapper from "../assets/images/professionalitet.svg";
import agriculture from "../assets/images/agriculture.svg";
import art from "../assets/images/art.svg";
import atomic from "../assets/images/atomic.svg";
import avia from "../assets/images/avia.svg";
import building from "../assets/images/building.svg";
import chemical from "../assets/images/chemical.svg";
import communication from "../assets/images/communication.svg";
import electrical from "../assets/images/electrical.svg";
import farma from "../assets/images/farma.svg";
import forest from "../assets/images/forest.svg";
import fuel from "../assets/images/fuel.svg";
import industry from "../assets/images/industry.svg";
import it from "../assets/images/it.svg";
import law from "../assets/images/law.svg";
import mech from "../assets/images/mech.svg";
import medicine from "../assets/images/medicine.svg";
import metallurgy from "../assets/images/metallurgy.svg";
import mining from "../assets/images/mining.svg";
import pedagogy from "../assets/images/pedagogy.svg";
import radioelectronic from "../assets/images/radioelectronic.svg";
import railway from "../assets/images/railway.svg";
import shipbuilding from "../assets/images/shipbuilding.svg";
import tourism from "../assets/images/tourism.svg";
import transport from "../assets/images/transport.svg";
import water from "../assets/images/water.svg";
import { useEffect, useState } from "react";
import MainData from "../Eoms/data/8/MainData";

const images: string[] = [
  medicine,
  railway,
  transport,
  shipbuilding,
  atomic,
  building,
  mining,
  agriculture,
  art,
  avia,
  chemical,
  communication,
  electrical,
  farma,
  forest,
  fuel,
  industry,
  it,
  law,
  mech,
  metallurgy,
  pedagogy,
  radioelectronic,
  tourism,
  water
];

const pos: number[][] = [
  [23, 41],
  [42, 22],
  [65, 23],
  [81, 42],
  [81, 23],
  [65, 7],
  [42, 5],
  [23, 22]
];

const getRandomImage = (visibleImages: string[]) => {
  const availableImages = images.filter((image) => !visibleImages.includes(image));
  const randomIndex = Math.floor(Math.random() * availableImages.length);
  return availableImages[randomIndex];
};

function Footer() {

  const [visibleImages, setVisibleImages] = useState<string[]>(images.slice(0, 8));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleImages((prevVisibleImages) => {
        const randomIndex = Math.floor(Math.random() * prevVisibleImages.length);
        const newVisibleImages = [...prevVisibleImages];
        newVisibleImages[randomIndex] = getRandomImage(newVisibleImages);
        return newVisibleImages;
      });
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Grid container sx={{ position: 'relative', mt: 'auto' }}>
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
            fontWeight: '600'
          }}>{MainData.fgos.title()}</Typography>
          <Typography variant='body1' component="p" gutterBottom sx={{
            color: 'primary.main'
          }}>{MainData.fgos.name()}</Typography>
        </Box>
        <Box sx={{
          pl: { xs: 2, sm: 3 },
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
            fontWeight: '600'
          }}>{MainData.mdk.title()}</Typography>
          <Typography variant='body1' component="p" gutterBottom sx={{
            color: 'primary.main'
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
              src={img}
              className="item"
              style={{
                top: pos[i][0] + '%',
                right: i > 3 ? 'auto' : pos[i][1] + '%',
                left: i < 4 ? 'auto' : pos[i][1] + '%'
              }}
            />
          ))}
        </Box>
      </Grid>
      <Box sx={{
        position: 'fixed',
        top: 0,
        right: '8px',
        height: '100vh',
        display: {
          xs: 'none',
          sm: 'flex'
        },
        alignItems: 'center'
      }}>
        <Typography variant='h6' component="p" gutterBottom sx={{
          textTransform: 'uppercase',
          writingMode: 'vertical-lr'
        }}>ЦИФРОВОЙ ОБРАЗОВАТЕЛЬНЫЙ КОНТЕНТ</Typography>
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
        <path fill="#293896" fillOpacity="1" d="M0,0L1100,100L0,100Z"></path>
      </svg>
    </Grid>
  )
}

export default Footer