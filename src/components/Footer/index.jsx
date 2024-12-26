import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import Divider from '@mui/material/Divider';

import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#54ACDF", color: "white",marginTop:"60px", padding: "4rem 6rem",paddingBottom:"0px" }}>
      <Grid container spacing={4}>
        {/* Logo and Social Icons */}
        <Grid item xs={12}  md={6} lg={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Logo
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <Link href="#" color="inherit">
              <Facebook />
            </Link>
            <Link href="#" color="inherit">
              <Twitter />
            </Link>
            <Link href="#" color="inherit">
              <Instagram />
            </Link>
            <Link href="#" color="inherit">
              <LinkedIn />
            </Link>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Quick Links
          </Typography>
          <Box sx={{ marginTop: "1rem" }}>
            <Typography sx={{padding:"4px 0px"}}>
              <Link href="#" color="inherit" underline="none">
                Home
              </Link>
            </Typography>
            <Typography sx={{padding:"4px 0px"}}>
              <Link href="#" color="inherit" underline="none">
                About Us
              </Link>
            </Typography>
            <Typography sx={{padding:"4px 0px"}}>
              <Link href="#" color="inherit" underline="none">
                Services
              </Link>
            </Typography>
            <Typography sx={{padding:"4px 0px"}}>
              <Link href="#" color="inherit" underline="none">
                Coverage
              </Link>
            </Typography>
          </Box>
        </Grid>

        {/* Support */}
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Support
          </Typography>
          <Box sx={{ marginTop: "1rem" }}>
            <Typography>
              <Link href="#" color="inherit" underline="none">
                Privacy & Policy
              </Link>
            </Typography>
          </Box>
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Contact Us
          </Typography>
          <Box sx={{ marginTop: "1rem" }}>
            <Box sx={{display:"flex",padding:"4px 0px" }}>
            <HomeIcon /> <Typography sx={{paddingLeft:"20px"}}> 85 Great Portland Street, First Floor, London, United Kingdom, W1W 7LT</Typography>

            </Box>
            <Box sx={{display:"flex",padding:"4px 0px" }}>
            <EmailIcon /><Typography sx={{paddingLeft:"20px"}}><Link href="mailto:Evoprimetech.com" color="inherit">Evoprimetech.com</Link></Typography>

            </Box>
            <Box sx={{display:"flex",padding:"10px 0px" }}>
            <LocalPhoneIcon />  <Typography sx={{paddingLeft:"20px"}}>+447878776579</Typography>

            </Box>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ backgroundColor: "white",marginTop:"50px" }} />
      <Box sx={{textAlign:"center",padding:"10px 0px"}}>
        <Typography variant="body2">© Copyright 2024 All Right Reserved Evo Primetech</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
