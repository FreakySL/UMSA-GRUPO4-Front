import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box } from '@mui/material';
import genericImage from '../assets/images/GenericImage.webp';
import genericImage1 from '../assets/images/GenericImage1.webp';
import genericImage2 from '../assets/images/GenericImage2.webp';

const Carousel: React.FC = () => {
  const images = [
    genericImage,
    genericImage1,
    genericImage2,
  ];

  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 0' }}>
      <ResponsiveCarousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Hospital image ${index + 1}`} style={{ borderRadius: '8px', height: '40rem', width: '85rem'}} />
          </div>
        ))}
      </ResponsiveCarousel>
    </Box>
  );
}

export default Carousel;
