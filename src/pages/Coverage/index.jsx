import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

import { Box, Typography, Grid, List, ListItem } from "@mui/material";

const Coverage = () => {
  return (
    <Box>
      {/* Navbar Section */}
      <Box className="coverage-section" sx={{}}>
        <Navbar />
        <Box
          className="nav_content"
          sx={{
            // px: { xs: 0, sm: 0, md: 0 },
            width: "100%",
            textAlign: { xs: "center", md: "start" },
            color: "white",
            // py: 5,
            px: { xs: 0, sm: 5, md: 10 },
            py: { xs: 0, md: 5 },
          }}
        >
          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            Coverage
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-sm md:text-base lg:text-lg max-w-xl text-justify"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            At Evoprime, we are committed to delivering unparalleled global
            support through our network of 1,200+ engineers and consultants
            across EMEA, APAC, and North America.
            </motion.p>
        </Box>
      </Box>

      {/* Title Section */}
      <Typography
        variant="h2"
        sx={{
          color: "#54ACDF",
          fontSize: { xs: "1.75rem", md: "2rem",lg:"2.4rem" },
          fontWeight: "bold",
          textAlign: "center",
          mt: 4,
          mb: 2,
        }}
      >
        WE ARE WHERE YOU NEED US
      </Typography>

      {/* Subtitle Section */}
      <Typography
        className="coverage_para"
        variant="h6"
        sx={{
          px: { xs: 3, sm: 4, md: 0 },
          textAlign: "center",
          lineHeight: 1.5,
          fontSize: { xs: "0.9rem", md: "1.2rem" },
          color: "#000",
          paddingX: {
            xs: 2,
            sm: 3,
            md: 10,
          },

          fontWeight: 700,
        }}
      >
        We excel in providing comprehensive technical expertise, offering Level
        0 to Level 3 engineering support with 24/7 availability across diverse
        regions.
      </Typography>

      {/* ASIA MAP Section */}
      <Box sx={{ backgroundColor: "#54ACDF", py: 2, my: 4 }}>
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
          }}
        >
          ASIA MAP
        </Typography>
      </Box>

      {/* Asia Regions */}
      <Grid container spacing={4} sx={{ px: { xs: 2, md: 10 } }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#54ACDF",
              textAlign: "center",
              mb: 1,
            }}
          >
            CENTRAL ASIA
          </Typography>
          <List>
            {["Kazakhstan", "Kyrgyzstan", "Tajikistan", "Turkmenistan"].map(
              (item, index) => (
                <ListItem key={index} sx={{ justifyContent: "center" }}>
                  {item}
                </ListItem>
              )
            )}
          </List>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#54ACDF",
              textAlign: "center",
              mb: 1,
            }}
          >
            SOUTH EASTERN ASIA
          </Typography>
          <List>
            {["Japan", "South Korea", "Taiwan", "Singapore", "India"].map(
              (item, index) => (
                <ListItem key={index} sx={{ justifyContent: "center" }}>
                  {item}
                </ListItem>
              )
            )}
          </List>
        </Grid>
      </Grid>

      {/* EUROPE MAP Section */}
      <Box sx={{ backgroundColor: "#54ACDF", py: 2, my: 4 }}>
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
          }}
        >
          EUROPE MAP
        </Typography>
      </Box>

      {/* Europe Regions */}
      <Grid container spacing={4} sx={{ px: { xs: 2, md: 10 } }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#54ACDF",
              textAlign: "center",
              mb: 1,
            }}
          >
            EASTERN EUROPE
          </Typography>
          <List>
            {["Hungary", "Belarus", "Greece", "Latvia"].map((item, index) => (
              <ListItem key={index} sx={{ justifyContent: "center" }}>
                {item}
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#54ACDF",
              textAlign: "center",
              mb: 1,
            }}
          >
            WESTERN EUROPE
          </Typography>
          <List>
            {["Germany", "Italy", "France", "Denmark"].map((item, index) => (
              <ListItem key={index} sx={{ justifyContent: "center" }}>
                {item}
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Coverage;
