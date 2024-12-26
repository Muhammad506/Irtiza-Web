import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Box, Typography, Grid, List, ListItem ,Button} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Coverage = () => {
  return (
    <Box sx={{}}>

<Box className="coverage-section">
        <Navbar />
        <Box className="nav_content" sx={{ position: 'relative', width: '100%', textAlign: 'start', color: 'white', py: 5, px: 10 }}>
          {/* Heading */}
          <Typography
            variant="h4"
            sx={{
              fontSize: "45px",
              lineHeight:"66px",
              letterSpacing: "2px",
              fontWeight: '800',
              mb: 1,
              position: 'relative',
              display: 'inline-block',
              // paddingLeft: '70px',
             
            }}
            className="trigger above_content"
          >
            Our Coverage
          </Typography>

          {/* Subheading */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Open Sans',

              fontSize: "1rem",
              fontWeight: '300',
              paddingRight:"500px",
              mb: 2,
              lineHeight: "1.3",
              textTransform: 'capitalize',
              // fontFamily: 'Poppins',
            }}
            className="trigger center_content"
          >
           At Evoprime, we are committed to delivering unparalleled global support through our network of 1,200+ engineers and consultants across EMEA, APAC, and North America.

          </Typography>

        
        
         
        </Box>
      </Box>
      
      {/* Title Section */}
      <Typography
        variant="h2"
        sx={{ color: '#54ACDF',paddingTop:"3rem", fontSize: "2.25rem", fontWeight: 'bold', marginBottom: 2, textAlign: 'center' }}
      >
        WE ARE WHERE YOU NEED US
      </Typography>

      {/* Subtitle Section */}
      <Typography
        variant="h6"
        sx={{ marginBottom: 4, padding: "0px 130px", textAlign: 'center', lineHeight: 1.5, fontSize: "1rem", color: "#000", fontWeight: "700" }}
      >
        We excel in providing comprehensive technical expertise, offering Level 0 to Level 3 engineering support with 24/7 availability across diverse regions. Our goal is to ensure swift service delivery within 4 hours or by the next business day (NBD) in numerous locations. Whether in major cities, smaller towns, or even remote areas, our extensive network guarantees exceptional support tailored to your needs.

      </Typography>

      {/* ASIA MAP Section */}
      <Box sx={{ backgroundColor: '#54ACDF', padding: 1, marginBottom: 4 }}>
        <Typography
          variant="h5"
          sx={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}
        >
          ASIA MAP
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ marginBottom: 4 }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 0,color:"#54ACDF" }}>
            CENTRAL ASIA
          </Typography>
          <List>
            {['Kazakhstan', 'Kyrgyzstan', 'Tajikistan', 'Turkmenistan', 'Turkmenistan'].map((item, index) => (
              <ListItem key={index} sx={{ paddingLeft: 0, display: 'flex', justifyContent: 'center' }}>
                {item}
              </ListItem>
            ))}
          </List>
        </Grid>


        <Grid item xs={12} md={6} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 0 ,color:"#54ACDF" }}>
            SOUTH EASTERN ASIA
          </Typography>
          <List>
            {['Japan', 'South Korea', 'Taiwan', 'Singapore', 'India', 'Thailand', 'China'].map((item, index) => (
              <ListItem key={index} sx={{ paddingLeft: 0 }}>
                {item}
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>

      {/* EUROPE MAP Section */}
      <Box sx={{ backgroundColor: '#54ACDF', padding: 1, marginBottom: 4 }}>
        <Typography
          variant="h5"
          sx={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}
        >
          EUROPE MAP
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 0 ,color:"#54ACDF" }}>
            EASTERN EUROPE
          </Typography>
          <List>
            {['Hungary', 'Belarus', 'Hungary', 'Greece', 'Latvia', 'Holland', 'Spain', 'Denmark'].map(
              (item, index) => (
                <ListItem key={index} sx={{ paddingLeft: 0 }}>
                  {item}
                </ListItem>
              )
            )}
          </List>
        </Grid>

        <Grid item xs={12} md={6} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 0 ,color:"#54ACDF" }}>
            WESTERN EUROPE
          </Typography>
          <List>
            {['Germany', 'Italy', 'France', 'Denmark', 'Austria', 'Sweden', 'Poland', 'Norway'].map((item, index) => (
              <ListItem key={index} sx={{ paddingLeft: 0 }}>
                {item}
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Coverage;