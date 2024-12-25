import { Box, Button, Typography,useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'; 
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from "react";
import { Link, useLocation } from "react-router-dom";

const routes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About Us",
    route: "/about",
  },
  {
    name: "Services",
    route: "/services",
  },
  {
    name: "Coverage",
    route: "/coverage",
  },
];

const Navbar = () => {
  const location = useLocation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen is small

  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "'Open Sans', Helvetica, sans-serif", // Correct font family syntax
        padding: "1rem 2rem",
        // You can adjust this color as needed
      }}
      className="content-spacing"
    >
      <Box>
        <img src="/images/logo.png" alt="Logo" style={{ maxWidth: "20rem" }} />
      </Box>

      {/* Conditionally render the navigation items or hamburger menu */}
      {isSmallScreen ? (
        // Hamburger Menu for small screen
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button onClick={() => setOpenMenu(!openMenu)} sx={{ color: 'white' }}>
            <MenuIcon />
          </Button>
          {/* Show menu when openMenu is true */}
          {openMenu && (
            <Box sx={{ position: 'absolute', top: '60px', right: '20px', backgroundColor: 'white', p: 2, borderRadius: 2 }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {routes.map((value) => (
                  <li key={value.name} style={{ margin: '1rem 0' }}>
                    <Link to={value.route} style={{ textDecoration: "none", color: "black" }}>
                      <Typography>{value.name}</Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </Box>
          )}
        </Box>
      ) : (
        // Navigation items for larger screens
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ul style={{ display: "flex", padding: 0, margin: 0 }}>
            {routes.map((value) => (
              <Link
                key={value.name}
                to={value.route}
                style={{ textDecoration: "none" }}
              >
                <li
                  className={`nav-item ${
                    location.pathname === value.route ? "active" : ""
                  }`}
                  style={{
                    marginRight: "1.5rem",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {value.name}
                </li>
              </Link>
            ))}
          </ul>
          <SearchIcon fontSize="medium" sx={{ color: 'white', ml: 2 }} />
          <Box>
            <Button
              variant="contained"
              sx={{
                p: 1.9,
                pl: 3.5,
                pr: 3.5,
                ml: 2,
                fontSize: "0.9rem",
                background: "black",
                fontWeight: "600",
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Contact Us
              </Typography>
              <ArrowForwardIosIcon ml={2} fontSize="small" />
            </Button>
          </Box>
        </Box>
      )}
      
    </Box>
  );
};

export default Navbar;
