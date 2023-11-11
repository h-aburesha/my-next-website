import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

interface JourneyPoint {
  imageUrl: string;
  title: string;
  paragraph: string;
}

interface JourneyProps {
  journeyPoints: JourneyPoint[];
}



const Journey: React.FC<JourneyProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.WheelEvent) => {
    if (e.deltaY > 0 && activeIndex < journeyPoints.length - 1) {
      setActiveIndex(prevIndex => prevIndex + 1);
    } else if (e.deltaY < 0 && activeIndex > 0) {
      setActiveIndex(prevIndex => prevIndex - 1);
    }
  };

  const journeyPoints: JourneyPoint[] = [
    {
      imageUrl: 'https://via.placeholder.com/150',
      title: 'Lorem Ipsum',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      imageUrl: 'https://via.placeholder.com/150',
      title: 'Dolor Sit Amet',
      paragraph: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      imageUrl: 'https://via.placeholder.com/150',
      title: 'Consectetur Adipiscing',
      paragraph: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
    }
  ];

    return (
      <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          onWheel={handleScroll}
          sx={{ marginBottom: 2 }}
        >
        {journeyPoints.map((point, index) => (
          <motion.div
            key={index}
            animate={{ y: index === activeIndex ? 0 : -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" sx={{ width: 150, height: 150 }} image={point.imageUrl} title={point.title} />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{point.title}</Typography> // Make the title bold
                <Typography variant="body2">{point.paragraph}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    );
};

export default Journey;