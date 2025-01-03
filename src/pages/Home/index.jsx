import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  // Card,
  // CardMedia,
  Accordion,
  // AccordionActions,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import Navbar from "../../components/Navbar";
import ServiceCard from "../../components/ServiceCard";
import Footer from "../../components/Footer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add"; // Plus icon
import RemoveIcon from "@mui/icons-material/Remove"; // Minus icon

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const sectionRefe = useRef(null);
  const buttonRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic
  };
  useEffect(() => {
    // Get all elements with the class 'trigger' (elements that should animate when in view)
    const triggers = document.querySelectorAll(".trigger");

    // Create an IntersectionObserver to observe when elements come into view
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add 'animate' class to trigger the animation when the element is in view
            entry.target.classList.add("animate");
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the image
      gsap.fromTo(
        imageRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
          },
        }
      );

      // Animation for the text
      gsap.fromTo(
        textRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
          },
        }
      );

      // Animation for the button
      gsap.fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP context on component unmount
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the title
      gsap.fromTo(
        titleRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom", // Start when the top of the section hits the bottom of the viewport
          },
        }
      );

      // Animation for the subtitle
      gsap.fromTo(
        subtitleRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef2.current,
            start: "top bottom", // Start when the top of the section hits the bottom of the viewport
            delay: 0.2, // Slight delay for staggered animation
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP context on component unmount
  }, []);

  useEffect(() => {
    if (sectionRefe.current) {
      const elements = sectionRefe.current.querySelectorAll(
        ".bottom_box_img_text"
      );

      gsap.fromTo(
        elements,
        { x: 100, opacity: 0 }, // Start state: 100px to the right, fully transparent
        {
          x: 0, // End state: original position
          opacity: 1, // Fully visible
          duration: 1, // Duration of animation
          stagger: 0.2, // Delay between animations of each element
          scrollTrigger: {
            trigger: sectionRefe.current,
            start: "top 80%", // Trigger when the top of the section is 80% from the top of the viewport
            end: "bottom 60%", // Animation runs until the bottom of the section reaches 60% of the viewport
            toggleActions: "play none none none", // Play animation only once
          },
        }
      );
    }
  }, []);

  return (
    <Box className="home">
      <Box className="nav-section">
        <Navbar />
        <Box
          className="nav_content"
          sx={{
            position: "relative",
            width: "100%",
            textAlign: "start",
            color: "white",
            py: 18,
            px: 16,
          }}
        >
          {/* Heading */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "12px",
              letterSpacing: "2px",
              fontWeight: "bold",
              mb: 2,
              position: "relative",
              display: "inline-block",
              paddingLeft: "70px",
              "&::before": {
                content: '""',
                position: "absolute",
                left: "0",
                top: "50%",
                width: "50px",
                height: "2px",
                backgroundColor: "#54ACDF",
                transform: "translateY(-50%)",
              },
            }}
            className="trigger above_content"
          >
            Welcome to Evoprime
          </Typography>

          {/* Subheading */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },
              fontWeight: "bold",
              mb: 2,
              lineHeight: "3.125rem",
              textTransform: "capitalize",
              // fontFamily: 'Poppins',
            }}
            className="trigger center_content"
          >
            Delivering Excellence <br />
            in Every <b style={{ color: "#54ACDF" }}>Service</b>
          </Typography>

          {/* Paragraph */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "0.813rem",
              lineHeight: "1.25rem",
              maxWidth: "800px",
              mb: 4,
            }}
            className="trigger second_section_text3"
          >
            We are committed to providing top-notch solutions tailored to your
            needs, with unmatched efficiency and responsiveness. At Evoprime,
            our philosophy is built on trust, quality, and innovation. Your
            satisfaction is our priority, and we never compromise on our values.
          </Typography>

          {/* Buttons */}
          <Box sx={{ display: "flex", justifyContent: "start", gap: 2 }}>
            <Button
             component={Link} // This makes the button behave like a Link
            to="/services"
              variant="contained"
              sx={{
                px: 4,
                backgroundColor: "black",
                py: 1.5,
                fontSize: "0.9rem",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
              }}
              className="trigger contact_btn"
            >
              Explore More{" "}
              <ArrowForwardIosIcon sx={{ ml: 1, fontSize: "small" }} />
            </Button>
            <Button
              component={Link} // This makes the button behave like a Link
            to="/contact"
              variant="contained"
              sx={{
                px: 4,
                py: 1.5,
                backgroundColor: "#54ACDF",
                fontSize: "0.9rem",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
              }}
              className="trigger contact_btn "
            >
              Get in Touch{" "}
              <ArrowForwardIosIcon sx={{ ml: 1, fontSize: "small" }} />
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        ref={sectionRef}
        className="second_section"
        sx={{ py: 5, backgroundColor: "#f8f8f8" }}
      >
        <Grid container spacing={2} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              ref={imageRef}
              className="trigger image-animation"
              src="https://techconnectb2b.com/wp-content/uploads/2024/01/IMAGE2.png"
              alt="Professional IT Services"
              sx={{
                width: "100%",
                maxHeight: 800,
                objectFit: "contain",
              }}
            />
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Box
              ref={textRef}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                textAlign: "left",
                height: "100%",
              }}
            >
              {/* Title */}
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "#54ACDF",
                  paddingLeft: "55px",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: "90%",
                    width: "40px",
                    height: "2px",
                    backgroundColor: "#54ACDF",
                    transform: "translateY(-50%)",
                  },
                }}
                className="trigger"
              >
                About Us
              </Typography>

              {/* Heading */}
              <Typography
                className="trigger text-animation second_section_text2"
                variant="h1"
                sx={{
                  mb: 3,
                  fontSize: "2.875rem",
                  color: "#000",
                  fontWeight: "800",
                  textTransform: "capitalize",
                }}
              >
                We specialize in <br />
                delivering professional <br />
                IT services
              </Typography>

              {/* Paragraph */}
              <Typography
                sx={{
                  mb: 3,
                  color: "#000",
                  fontSize: "0.938rem",
                  p: 0,
                }}
              >
                Evoprime offers comprehensive Software and IT Managed Services,
                end-to-end solutions, desktop services, support, and
                consultancy. Our expertise spans IT support, computer
                networking, and maintenance, ensuring seamless service from
                implementation to disposal. We focus on providing a unified
                experience with a consultative approach tailored to your needs.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {/* Experience */}
              <Grid item xs={12} md={11}>
                <Paper
                  elevation={12}
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "start",
                    gap: 1,
                  }}
                >
                  <Box
                    component="img"
                    src="/images/home/experience.png"
                    alt="Experience Icon"
                  />
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        mb: 1,
                        fontSize: "1.375rem",
                        fontWeight: "bold",
                        lineHeight: "20px",
                      }}
                    >
                      Experience
                    </Typography>
                    <Typography sx={{ fontSize: "0.938rem" }}>
                      Leverage Our IT Expertise to Empower Your Business
                    </Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* Quick Support */}
              <Grid item xs={12} md={11}>
                <Paper
                  elevation={12}
                  sx={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "start",
                    gap: 2,
                  }}
                >
                  <Box
                    component="img"
                    src="/images/home/technical-support.png"
                    alt="Quick Support Icon"
                  />
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        mb: 1,
                        fontSize: "1.375rem",
                        fontWeight: "bold",
                        lineHeight: "20px",
                      }}
                    >
                      Quick Support
                    </Typography>
                    <Typography sx={{ fontSize: "0.938rem" }}>
                      Swift Responses, Reliable Solutions – Anytime, Anywhere
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>

            {/* Learn More Button */}
            <Button
              ref={buttonRef}
              className="trigger button-animation"
              variant="contained"
              color="primary"
              href="https://techconnectb2b.com/index.php/about/"
              sx={{
                fontWeight: "bold",
                mt: 3,
                px: 6,
                py: 2,
                backgroundColor: "#54ACDF",
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

      {/* Services section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: '100vh', // Full viewport height
        }}
      >
        <ServiceCard />
      </Box>

      <Box className="whatsappicon">
        <img src="/images/home/whatsapp.svg" alt="" width={70} />
      </Box>

      <Box className="why_choose_section">

        <Typography
          className='choose_section_text0'
          sx={{
            textAlign: "center",
            paddingTop: "40px",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            position: "relative", // Enables positioning for the pseudo-element
            display: "inline-block",
            "&:after": {
              content: '""',
              display: "block",
              width: "50px",        // Line width
              height: "2px",        // Line thickness
              backgroundColor: "white",
              margin: "8px auto 0", // Spacing above and centering the line
            }
          }}
        >
          Why Choose Us
        </Typography>

        <Typography variant='h2' className='choose_section_text1' sx={{
          paddingTop: "30px",
          color: "white", fontSize: "45px", fontWeight: "bold", lineHeight: "50px", textAlign: "center"
        }}>

          Companies Excited With Our Solutions
        </Typography>

        <Box className="choose_section_body" sx={{ paddingTop: "40px", px: "80px", paddingBottom: "40px" }}>
          <Grid container spacing={2}>
            {[
              { src: "/images/home/success.png", value: "120+", label: "Projects Completed" },
              { src: "/images/home/rating-3.png", value: "50+", label: "Active Clients" },
              { src: "/images/home/group-chat-1-1.png", value: "200+", label: "Expert Team" },
              { src: "/images/home/rating-4.png", value: "50+", label: "Happy Clients" },
            ].map((item, index) => (
              <Grid
                item
                xs={6}
                md={3}
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center", // Ensures horizontal centering
                  textAlign: "center",  // Centers text within the box
                }}
              >
                <Box>
                  <Box
                    component="img"
                    src={item.src}
                    alt=""
                    width={70}
                    sx={{
                      margin: "0 auto", // Centers the image horizontally
                      transition: "transform 0.7s ease",
                      "&:hover": {
                        transform: "translateX(10px)",
                      },
                    }}
                  />
                  <Typography
                    className="project_user"
                    sx={{ fontSize: "1.5rem", fontWeight: "bold", mt: 2 }}
                  >
                    {item.value}
                  </Typography>
                  <Typography sx={{ color: "white", mt: 1 }}>{item.label}</Typography>
                </Box>
              </Grid>


            ))}
          </Grid>


         

        </Box>
      </Box>

      <Box
        className="faq_section_title"
        sx={{ marginTop: "50px", padding: "40px", borderRadius: "8px" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            // height: "100vh",           // Ensure it takes the full viewport height
            paddingBottom: "5px",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              // paddingTop: "40px",
              color: "#54ACDF",
              fontSize: "16px",
              fontWeight: "600",
              position: "relative",
              display: "inline-block",
              "&:after": {
                content: '""',
                display: "block",
                width: "50px",
                height: "2px",
                backgroundColor: "#54ACDF",
                margin: "8px auto 0",
              },
            }}
          >
            Talk About Something
          </Typography>
        </Box>
      </Box>
      <Box className="faq_section">
        <Typography
          variant="h1"
          sx={{
            fontSize: "45px",
            lineHeight: "50px",
            textAlign: "center",
            marginBottom: "24px",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Box sx={{ maxWidth: "1000px", margin: "0 auto" }}>
          {[
            {
              question:
                "How can your end-to-end solutions benefit my business?",
              answer:
                "We streamline IT processes, boost efficiency, and secure your IT infrastructure to drive success.",
            },
            {
              question: "Do you offer on-site support?",
              answer:
                "Yes, we provide both on-site and remote support to promptly address IT issues.",
            },
            {
              question: "How can you help with computer networking?",
              answer:
                "Our team designs, implements, and manages seamless networking solutions to enhance organizational communication and data transfer.",
            },
            {
              question: "What sets your consultancy services apart?",
              answer:
                "We offer a consultative approach tailored to your business needs, challenges, and goals, ensuring alignment with your objectives.",
            },
            {
              question:
                "Do you offer maintenance support for IT infrastructure?",
              answer:
                "Yes, we ensure IT infrastructure health with updates, monitoring, and troubleshooting services.",
            },
            {
              question: "How do you handle IT disposal responsibly?",
              answer:
                "We use eco-friendly practices to recycle or dispose of hardware, prioritizing data security and regulatory compliance.",
            },
            {
              question: "What makes your desktop services stand out?",
              answer:
                "Optimized desktop performance with timely updates, security patches, and seamless remote assistance.",
            },
            {
              question: "How can I get started?",
              answer:
                "Contact us via our website or phone for a consultation. We’ll discuss your needs and propose a tailored solution.",
            },
          ].map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                marginBottom: "16px",
                border: "1px solid #ddd",
                borderRadius: "0px",
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === `panel${index}` ? (
                    <RemoveIcon sx={{ color: "white" }} />
                  ) : (
                    <AddIcon sx={{ color: "white" }} />
                  )
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  background: "linear-gradient(45deg, #54ACDF, #7BC3E2)",
                  padding: "10px",
                  borderRadius: "8px 8px 0 0",
                }}
              >
                <Typography sx={{ fontWeight: "bold", color: "white" }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "#fafafa",
                  padding: "16px",
                  color: "#555",
                }}
              >
                {item.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>

      <Box className="contact_form">
        <Grid container spacing={2}>
          {/* First Grid - Replacing the Image with Text */}
          <Grid item xs={12} md={6}>
            <img src="/images/home/contact4.svg" alt="" />
          </Grid>

          {/* Second Grid - Form Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                marginBottom: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Contact Us Today!
            </Typography>
            <form
              onSubmit={handleSubmit}
              style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "15px",
              }}
            >
              <TextField
                sx={{
                  marginBottom: "18px",
                  "& .MuiInputBase-input": {
                    color: "#54ACDF",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#54ACDF",
                    },
                    "&:hover fieldset": {
                      borderColor: "#54ACDF",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#54ACDF",
                    },
                  },
                  "& .MuiFormLabel-root": {
                    color: "#54ACDF",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#54ACDF",
                  },
                }}
                fullWidth
                required
                id="firstName"
                name="firstName"
                label="First Name"
              />
              <TextField
                sx={{
                  marginBottom: "18px",
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#54ACDF",
                    },
                    "&:hover fieldset": {
                      borderColor: "#54ACDF",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#54ACDF",
                    },
                  },
                  "& .MuiFormLabel-root": {
                    color: "#54ACDF",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#54ACDF",
                  },
                }}
                fullWidth
                required
                id="lastName"
                name="lastName"
                label="Last Name"
              />
              <TextField
                sx={{
                  marginBottom: "18px",
                  "& .MuiInputBase-input": {
                    color: "#54ACDF",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#54ACDF",
                    },
                    "&:hover fieldset": {
                      borderColor: "#54ACDF",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#54ACDF",
                    },
                  },
                  "& .MuiFormLabel-root": {
                    color: "#54ACDF",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#54ACDF",
                  },
                }}
                fullWidth
                required
                id="email"
                name="email"
                label="Email"
              />
              <TextField
                sx={{
                  marginBottom: "18px",
                  "& .MuiInputBase-input": {
                    color: "#54ACDF",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#54ACDF",
                    },
                    "&:hover fieldset": {
                      borderColor: "#54ACDF",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#54ACDF",
                    },
                  },
                  "& .MuiFormLabel-root": {
                    color: "#54ACDF",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#54ACDF",
                  },
                }}
                fullWidth
                required
                id="phone"
                name="phone"
                label="Phone"
              />
              <TextField
                sx={{
                  marginBottom: "18px",
                  "& .MuiInputBase-input": {
                    color: "#54ACDF",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#54ACDF",
                    },
                    "&:hover fieldset": {
                      borderColor: "#54ACDF",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#54ACDF",
                    },
                  },
                  "& .MuiFormLabel-root": {
                    color: "#54ACDF",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#54ACDF",
                  },
                }}
                fullWidth
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
              // defaultValue="Default Value"
              />
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  height: "50px",
                  fontWeight: "bold",
                  backgroundColor: "#54ACDF",
                  ":hover": {
                    backgroundColor: "#333",
                  },
                }}
                type="submit"
              >
                Submit Form
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
