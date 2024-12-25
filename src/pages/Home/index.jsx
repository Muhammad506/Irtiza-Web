import  { useEffect } from 'react';
import { Box, Typography, Button, Grid, Paper, Card, CardMedia } from '@mui/material';
import Navbar from '../../components/Navbar';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = () => {
  useEffect(() => {
    // Get all elements with the class 'trigger' (elements that should animate when in view)
    const triggers = document.querySelectorAll('.trigger');

    // Create an IntersectionObserver to observe when elements come into view
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add 'animate' class to trigger the animation when the element is in view
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing after it is in view
          }
        });
      },
      {
        threshold: 0.2, // When 20% of the element is in view, start the animation
      }
    );

    // Observe all trigger elements
    triggers.forEach((trigger) => {
      observer.observe(trigger);
    });

    // Cleanup the observer when the component is unmounted
    return () => observer.disconnect();
  }, []);

  return (
    <Box className="home">
      <Box className="nav-section">
        <Navbar />
        <Box sx={{ position: 'relative', width: '100%', textAlign: 'start', color: 'white', py: 25, px: 16 }}>
          {/* Heading */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "12px",
              letterSpacing: "2px",
              fontWeight: 'bold',
              mb: 2,
              position: 'relative',
              display: 'inline-block',
              paddingLeft: '70px',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: '0',
                top: '50%',
                width: '50px',
                height: '2px',
                backgroundColor: '#54ACDF',
                transform: 'translateY(-50%)',
              },
            }}
            className="trigger"
          >
            Welcome to Evoprime
          </Typography>

          {/* Subheading */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '3rem', md: '3rem' },
              fontWeight: 'bold',
              mb: 2,
              lineHeight: "3.125rem",
              textTransform: 'capitalize',
              // fontFamily: 'Poppins',
            }}
            className="trigger"
          >
            Delivering Excellence <br />
            in Every <b style={{ color: '#54ACDF' }}>Service</b>
          </Typography>

          {/* Paragraph */}
          <Typography
            variant="body1"
            sx={{
              fontSize: '0.813rem',
              lineHeight: "1.25rem",
              maxWidth: '800px',
              mb: 4,
            }}
            className="trigger"
          >
            We are committed to providing top-notch solutions tailored to your
            needs, with unmatched efficiency and responsiveness. At Evoprime,
            our philosophy is built on trust, quality, and innovation. Your
            satisfaction is our priority, and we never compromise on our
            values.
          </Typography>

          {/* Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'start', gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                px: 4,
                backgroundColor: 'black',
                py: 1.5,
                fontSize: '0.9rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
              }}
              className="trigger"
            >
              Explore More{' '}
              <ArrowForwardIosIcon sx={{ ml: 1, fontSize: 'small' }} />
            </Button>
            <Button
              variant="contained"
              sx={{
                px: 4,
                py: 1.5,
                backgroundColor: '#54ACDF',
                fontSize: '0.9rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
              }}
              className="trigger"
            >
              Get in Touch{' '}
              <ArrowForwardIosIcon sx={{ ml: 1, fontSize: 'small' }} />
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ py: 5, backgroundColor: '#f8f8f8' }}>
        <Grid container spacing={2} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              className="trigger image-animation"
              src="https://techconnectb2b.com/wp-content/uploads/2024/01/IMAGE2.png"
              alt="Professional IT Services"
              sx={{
                width: '100%',
                maxHeight: 800,
                objectFit: 'contain',
              }}
            />
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                textAlign: 'left',
                height: '100%',
              }}
            >
              {/* Title */}
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontSize: "1.125rem",
                  fontWeight: '600',
                  color: '#54ACDF',
                  paddingLeft: '55px',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '90%',
                    width: '40px',
                    height: '2px',
                    backgroundColor: '#54ACDF',
                    transform: 'translateY(-50%)',
                  },
                }}
                className="trigger"
              >
                About Us
              </Typography>

              {/* Heading */}
              <Typography
                className="trigger text-animation"
                variant="h1"
                sx={{
                  mb: 3,
                  fontSize: '2.875rem',
                  color: '#000',
                  fontWeight: "800",
                  textTransform: 'capitalize',
                  // fontFamily: 'Poppins',
                }}
              >
                We specialize in <br />
                delivering professional <br />
                IT services
              </Typography>

              {/* Paragraph */}
              <Typography sx={{ mb: 3, color: '#000', fontSize: '0.938rem', p: 0 }}>
                Evoprime offers comprehensive Software and IT Managed Services, end-to-end solutions, desktop
                services, support, and consultancy. Our expertise spans IT support, computer networking, and
                maintenance, ensuring seamless service from implementation to disposal. We focus on providing a
                unified experience with a consultative approach tailored to your needs.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {/* Experience */}
              <Grid item xs={12} md={5}>
                <Paper
                  elevation={12}
                  sx={{
                    p: 2,
                    display: 'flex',
                    alignItems: 'start',
                    gap: 1,
                  }}
                >
                  <Box
                    component="img"
                    src="/images/home/experience.png"
                    alt="Experience Icon"
                    sx={{
                      // width: 70,
                      // height: 70,
                      marginRight: '10px',
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{ mb: 1, fontSize: '1.375rem', fontWeight: 'bold', lineHeight: '20px' }}
                    >
                      Experience
                    </Typography>
                    <Typography sx={{ fontSize: '0.938rem' }}>
                      Leverage Our IT Expertise to Empower Your Business
                    </Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* Quick Support */}
              <Grid item xs={12} md={5}>
                <Paper
                  elevation={12}
                  sx={{
                    padding: "10px",
                    display: 'flex',
                    alignItems: 'start',
                    gap: 2,
                  }}
                >
                  <Box
                    component="img"
                    src="/images/home/technical-support.png"
                    alt="Quick Support Icon"
                  // sx={{ width: 70, height: 70, marginRight: '10px' }}
                  />
                  <Box>
                    <Typography variant="h3" sx={{ mb: 1, fontSize: '1.375rem', fontWeight: 'bold', lineHeight: '20px' }}
                    >
                      Quick Support
                    </Typography>
                    <Typography sx={{ fontSize: '0.938rem' }}>
                      Swift Responses, Reliable Solutions – Anytime, Anywhere
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>

            {/* Learn More Button */}
            <Button
              className="trigger button-animation"
              variant="contained"
              color="primary"
              href="https://techconnectb2b.com/index.php/about/"
              sx={{
                fontWeight: 'bold',
                mt: 3,
                px: 6,
                py: 2,
                backgroundColor: '#54ACDF',
              }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box className="marquee-container">
        <Box className="marquee">
          <Typography variant="h2" className="marquee_text">
            Navigating Business Challenges,<span>&nbsp;</span>
          </Typography>
          <Typography variant="h2" className="marquee_text">
            Navigating Business Challenges,<span>&nbsp;</span>
          </Typography>
          <Typography variant="h2" className="marquee_text">
            Navigating Business Challenges,<span>&nbsp;</span>
          </Typography>
          <Typography variant="h2" className="marquee_text">
            Navigating Business Challenges<span>&nbsp;</span>
          </Typography>
        </Box>
      </Box>
      <Box className="main_services">
        <Grid container spacing={2} >
          <Grid item xs={12} >

            <Box sx={{width: { xs: '100%' },mx: 'auto'}}>
              <Typography className="line-before">Our Services</Typography>
              <Typography variant="h1" className='serv_sub_content'>We Provide A Comprehensive Range
                of Cutting-Edge IT Solutions</Typography>
              <Grid container spacing={2}  justifyContent="center">
                <Grid item xs={12} sm={6} md={4} lg={3} >
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service1.jpg"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Global Development
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>

                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service2.jpg"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          App Development
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service4.jpg"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Resource on VA
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service5.jpg"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Cyber Security
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>






                </Grid>


                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service6.jpg"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Wireless surveys
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>

                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service7.jpg"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Helpdesk Solution
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service8.jpg"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Website Development
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service9.jpg"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          IMAC Services
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>






                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service10.jpg"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Full Time Resource Allocation
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>






                </Grid>
                <Grid itemxs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service11.jpg"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Resourse on SLA
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>






                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service12.jpg"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Retail Service
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>






                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service13.jpg"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Third Party Mantaince
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>






                </Grid>


              </Grid>
            </Box>

          </Grid>
        </Grid>



      </Box>
      <Box className="whatsappicon">
      <img src="/images/home/whatsapp.svg" alt="" width={70} />

      </Box>
    </Box>

  );
};

export default Home;
