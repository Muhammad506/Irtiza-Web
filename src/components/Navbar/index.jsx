import React,{useState} from "react";
import {
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Drawer,
  IconButton,
  InputBase,
 
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, useLocation } from "react-router-dom";

const routes = [
  { name: "Home", route: "/" },
  { name: "About Us", route: "/about" },
  { name: "Services", route: "/services" },
  { name: "Coverage", route: "/coverage" },
  { name: "Contact us", route: "/contact" },
  { name: "Privacy Policy", route: "/privacy" },
];

const Navbar = () => {
  const location = useLocation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const searchDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };


  const visibleRoutes = routes.filter(
    (route) => route.name !== "Contact us" && route.name !== "Privacy Policy"
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        color: "white",
      }}
    >
      {/* Logo */}
      <Box className="logo_img">
        <img src="/images/logo.png" alt="Logo" style={{ maxWidth: "20rem" }} />
      </Box>

      {/* Responsive Navigation */}
      {isSmallScreen ? (
        <>
          {/* Hamburger Menu Icon */}
          
          <IconButton onClick={toggleDrawer(true)} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>

          {/* Drawer Component */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{
                width: 250,
                padding: "1rem",
                backgroundColor: "white",
                height: "100%",
              }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {routes.map((value) => (
                  <ListItem button key={value.name}>
                    <Link
                      to={value.route}
                      style={{
                        textDecoration: "none",
                        color:
                          location.pathname === value.route ? "blue" : "black",
                        fontWeight:
                          location.pathname === value.route ? "bold" : "normal",
                      }}
                    >
                      <ListItemText primary={value.name} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </>
      ) : (
        // Desktop Navigation
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ul
            style={{
              display: "flex",
              padding: 0,
              margin: 0,
              listStyle: "none",
            }}
          >
           {visibleRoutes.map((value) => 
 (
              <Link
                key={value.name}
                to={value.route}
                style={{
                  textDecoration: "none",
                  marginRight: "1.5rem",
                }}
              >
                <li
                  className={`nav-item ${
                    location.pathname === value.route ? "active" : ""
                  }`}
                  style={{
                    color:
                      location.pathname === value.route ? "white" : "white",
                    fontWeight:
                      location.pathname === value.route ? "bold" : "normal",
                  }}
                >
                  {value.name}
                </li>
              </Link>
            ))}
          </ul>
          <IconButton onClick={searchDrawer(true)} sx={{ color: "white" }}>
        <SearchIcon fontSize="medium" />
      </IconButton>

      {/* Drawer Component */}
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={searchDrawer(false)}
      >
        <Box
          sx={{
            height: "150px",
            padding: "1rem",
            backgroundColor: "#f5f5f5",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Close Icon */}
          <IconButton
            onClick={searchDrawer(false)}
            sx={{ alignSelf: "flex-end", marginBottom: "1rem" }}
          >
            <CloseIcon />
          </IconButton>

          {/* Search Input */}
          <InputBase
            placeholder="Search..."
            sx={{
              width: "80%",
              padding: "0.5rem",
              backgroundColor: "white",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Box>
      </Drawer>          <Button
            component={Link} // This makes the button behave like a Link
            to="/contact" // This specifies the route
            variant="contained"
            sx={{
              p: 1.5,
              ml: 2,
              background: "#54ACDF",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            Contact Us
            <ArrowForwardIosIcon sx={{ fontSize: "small", ml: 1 }} />
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
