import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button, LinearProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import videoData from './data';
import pgLogo from './images/pglogo.png'; // PG logo

const VideoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = videoData.find(v => v.id === parseInt(id));

  if (!video) {
    return <Typography variant="h5">Video not found</Typography>;
  }

  const progress = (video.id / videoData.length) * 100;

  return (
    <Box sx={{ backgroundColor: 'rgba(0, 56, 100, 1)', minHeight: '100vh', color: '#fff', py: 3 }}>
      <Container maxWidth="md">
        {/* Header Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h4" gutterBottom>
            
            {video.title}</Typography>
 
          <a href="/"><img src={pgLogo} alt="PG Logo" style={{ height: '30px', width: 'auto' }} /></a>
        </Box>

        {/* Video Container */}
        <Box sx={{ position: 'relative', paddingTop: '65%' }}>
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            frameBorder="0"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          >

            Loading....

          </iframe>
        </Box>

        <Typography variant="body1" mt={3}>
        <Box>
  <Typography variant="body1" sx={{ mt: 1 }}>
  <Typography variant="body1" sx={{ mt: 1 }}>
  {video.title === "DiamondKast Academy" ? (
    <>
      This DiamondKast Training video covers the features of DiamondKast Academy and how to use it effectively.{" "}
      <strong>DiamondKast Academy</strong> is the go-to resource for everything related to scoring while on site.{" "}
      Visit the full site <a href="https://www.diamondkast.com/tutorials?section=welcome-slides" target="_blank" rel="noopener noreferrer" style={{ color: '#00b34f' }}>here</a>.
    </>
  ) : (
    video.description
  )}
</Typography>

    
  </Typography>

  
</Box>        </Typography>

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', mt: 4, gap: 2 }}>
          {/* Previous Button */}
          <Button
            variant="contained"
            onClick={() => {
              if (video.id === 1) {
                navigate('/overview'); // Navigate to overview if it's the first video
              } else {
                navigate(`/video/${video.id - 1}`); // Go to the previous video
              }
            }}
            sx={{
              flex: 1,
              height: '50px',
              fontSize: { xs: '14px', sm: '16px' },
              textTransform: 'none',
              backgroundColor: '#00b34f',
              '&:hover': { backgroundColor: '#029241' },
            }}
          >
            Previous
          </Button>

          {/* Back to Overview Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
            <Button
              component={Link}
              to="/overview"
              variant="contained"
              disabled={video.id == 1}
              sx={{
                flex: 1,
                height: '50px',
                fontSize: { xs: '14px', sm: '16px' },
                textTransform: 'none',
                backgroundColor: '#fff',
                color: 'rgba(0, 56, 100, 1)',
                '&:hover': { backgroundColor: '#e0e0e0' },
              }}
            >
              Back to Overview
            </Button>
          </Box>

          {/* Next Button */}
          <Button
            variant="contained"
            onClick={() => {
              if (video.id === videoData.length) {
                navigate('/additional'); // Navigate to /quicklinks if it's the last video
              } else {
                navigate(`/video/${video.id + 1}`); // Go to the next video
              }
            }}
            sx={{
              flex: 1,
              height: '50px',
              fontSize: { xs: '14px', sm: '16px' },
              textTransform: 'none',
              backgroundColor: '#00b34f',
              '&:hover': { backgroundColor: '#029241' },
            }}
          >
            Next
          </Button>
        </Box>

        {/* Progress Bar */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Progress: {Math.round(progress)}%
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 5,
              borderRadius: 6,
              backgroundColor: '#ccc',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#00b34f',
              },
            }}
          />
        </Box>

      </Container>
    </Box>
  );
};

export default VideoPage;
